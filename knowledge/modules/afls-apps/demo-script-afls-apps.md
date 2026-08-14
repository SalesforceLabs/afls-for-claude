**Manoj Kumar Mohapatra:** Hello everyone. Today we\'ll see the demo of how to create an AFLS app. But before that, what are AFLS apps? AFLS apps are custom LWC applications that our customers and partners can build and embed at various locations within the AFLS app mobile. Now, why are AFLS apps so powerful? It\'s a powerful feature for our customers or partners to build their own custom integrations to build their own custom features and not depend on us to actually build the feature. It\'s a powerful way to imagine and visualize and build any feature that they want. It could be a simple LWC application which is complex enough to be rendered in the mobile or it could be a as complex as an external integration as well. Now why do we need AFLS apps instead of LWC\'s? If the applications are really complex that cannot be sufficed by a simple LWC. We need an AFLS app. Now sometimes the custom LWC\'s are so rich that it cannot be rendered as it is on the mobile with the same resolution and pixel and hence we need an AFLS app.\
 

**Manoj Kumar Mohapatra:** AFLS apps work on top of the lightning mobile renderer which is a framework provided by the Salesforce platform. Now what are the use cases which are supported by AFLS apps? There are three use cases. The first is we can we can render an LWC app in the AFLS app in the form of a quick action on the record pages. The second is we can render an AFLS app uh in the form of an inline component within the record page. The third is we can render an AFLS app in the form of an LWC component in the homepage. In today\'s demo, we will see how to uh embed an LWC app in the form in in in line with the record page in the form of a separate tab. Now before that I have used cursor to login into an environment where I\'ll be building an LWC app. So as you can see um my cursor is connected to the Salesforce or on which I wanted to build an LWC app.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** I have taken an already present already existing LWC which is uh Kerros WC and and copied that as a separate uh LW uh LWC component. Now there are certain guidelines which we have to follow if you have to build an LWC uh AFLS app. First is the LWC component which we build should be prefixed with AFLS mobile inline as you can see. So what I\'ve done is I have I\'ve taken the keros WC uh LWC uh component and copied it with the prefix called AFLS mobile inline. Now after that is done we need to provide uh certain changes in the metadata excel file. As you can see um this LWC component has a metadata excel file where I have added these components. Now what does that mean? Now in this case I have made sure I add these XML tags. so that this LWC component can be embedded as an AFLS app within the homepage within the record page in line in the record page or in the form of a quick action.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** Now after I done that I have redeployed this LWC. Now our L LWC component is ready to use as an as an AFLS app. Next I would go to the orc and I would go to the setup page. But before that, where is the LWC AFLS app I wanted to deploy to? Now we are in the accounts record page and I wanted to create an engagement metric and uh show the list of various activities the HCP or the HCO has been engaged with in in terms of social activity high engagement what\'s the level of engagement what is the comparative analysis so that the fieldre can go and have a detailed insight about this SCP now I have already deployed this so you can see it here now how this is done is something which I\'ll be showing it in in our subsequent steps. So as you can see this is an AFLS app which is in line to the record page of the account. So I\'ll go to the setup.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** I\'ll go to object manager. We\'ll open the account. We will quickly go and create a quick action. Now as you can see quick action is already created by me. I\'ll show the step of how to create a quick action and what are the various parameters we have to choose. You create an action type type as lightning web component uh lightning web component. Now since you have made the changes in the XML file you will get an option of the AFLS mobile inline kerosol uh LWC component here. uh you\'ll have to make sure the label is same as that of the LWC component which you have created in this case is AFLS mobile learn kerros WC naming is something which you can give it on your own and then you click on save now I\'m not saving because I have already created the quick action now once you have created the quick action you go to the page layout now in the page layout you have two type of accounts one is is the person account and another is the business account.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** You make the necessary changes in both the type of accounts. You go to the mo mobile lightning actions and among the various options which are available you drag and drop the AFLS mobile inline keros WC to the Salesforce mobile and lightning experience. Now as you can see I\'ve already dropped this here. So what it does in the back end is it gets the context of this LWC to this page layout of the account page and then you click on save. Now since I\'ve already done this for both the type of accounts you can see it is already present in both the personal account as well as the business account. Similarly for business account you can see the AFLS mobile and then keros is already present. Now after you have done with all the things you go to the admin console since you have made the changes in the metadata but before you go to the admin console you go to the setup page of the lightning uh the edit page of the account page and then you drag and drop the respective LWC which you have created.\
 

 \
**Manoj Kumar Mohapatra:** for the AFLS app. As you can see, I\'ve already dragged and dropped. So, the engagement metric is already present over here. Now, once you have done all the changes, you go to the admin console and create the metadata cache because you have made the changes in the metadata. Go to the mobile click on create cache. Now I wanted to show this on the mobile in the field rep. So I\'ll be selecting the field rep and I\'ll be clicking on creating a new cache. I\'m not creating a new cache because all these activities are already done here. Now once your cache has been successfully created, you go to the mobile device, update your cache and login. and then you\'ll be able to see um the engagement metric as a subtab in the account record page. Now before that I wanted to show how does it look uh for an account let\'s say Santa Clarita hospital on the web. As you can see uh we have a subtab called engagement metrics where it shows the various social activities of this account.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** What kind of engagement it has. It also shows the competitive analysis uh the referral network insights and the upcoming events. Now we\'ll go to the mobile device and see how does it look. I will stop sharing from the web and start sharing the mobile device. As you can see on the mobile, we will go to the accounts tab. We will search for the same account which is Santa Clarita Hospital. We will go to the accounts page. Then we\'ll go to the engagement metrics. So as you can see we have similar kind of information here. Um as we see on the web we can if you want we can also launch this subtab in the form of a quick action here as you can see. So similar to what we have as login a visit we can have an engagement metric here based on our requirements or we can have an AFLS app on the homepage as well. something similar to the next best customer framework which we are seeing in the homepage. Thank\
 

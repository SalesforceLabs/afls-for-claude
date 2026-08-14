Of course! Here\'s a transcription of the video, organized into clear sections and paragraphs for better readability.

### Introduction

Hi, I am Nitin Agarwal, part of the AFLS product team. In this video, I\'m going to showcase the configuration and setup that is required to be done for displaying **Provider Card** onto the AFLS for CE mobile app by the admins. So, let\'s start.

### Provider Card and Actionable Relationship Center (ARC)

First of all, as you are all aware, Provider Card leverages its baseline power from **Actionable Relationship Center (ARC)**, the common component that we have got in industries. However, we have actually gone ahead and added enhancements to that so that it is made applicable and consumable for our life sciences use case.

So, let\'s start. Number one, as we can see, we have given a setup guide for an admin to look at what are the key steps they have to do. The first thing they have to do is actually go ahead and configure an ARC graph which can be used as a template for a provider card and showing the right information.

### Configuration: Creating the ARC Graph

I\'m in the Actionable Relationship Center. I can start off by creating a new graph. And what we are doing is we\'re actually shipping an out-of-the-box templated graph. This graph can be used by an admin as a startup guide from where they can keep on adding more entities or changing and configuring as per their needs.

What I have done is I have already created a **Sales Rep Card** here. I\'m going to just quickly walk through what I have got, and this was created on the basis of the provider card that we show as a template.

### Graph Properties and Entities

First of all, whenever I start, I have to create a card. The graph properties, something that we have added new, is this has to be of type **Card View**. If it is not of type Card View, this will not render into the mobile app and will not display the results. An important aspect here, as we are all aware about ARC, is you have to start off with the base entity from which you can showcase the data around. In this case, it\'s going to be **Account** because our HCPs and HCOs are actually modeled as accounts.

What we can also see here is that I can add the related entities and the sub-entities in a path to understand what all information I want to display. So, let\'s look at it. I have added an Account, I have added information like the Healthcare Provider, the Contact Point, the Business License, etc. So I\'ll quickly go through one of those to showcase what I have done.

When I go to Business License, I have not only added the entity, but I have also talked about the relationship that it has got with the contact point and also set the filter criteria. That means now I\'m going to get only those records which meet this criteria to be shown as part of the provider card.

### Customizing the Card View

Now, when I\'ve set up the entities and the information that I want to display, I\'m going to switch to **Card View**. As I switch to Card View, one of the things that I notice here is I can define the sections that I want to showcase based on the entities that I have configured earlier. I can add a section, I can delete a section.

So let\'s say I\'ve divided this into a couple of sections: **Key Attributes**, which showcases data across entities. So the intent here is when I\'m creating a section, the elements that I am showing can come from multiple entities together. It\'s not that it has to come only from one entity. And then also the fact is, as you can see, I can then decide how to display those. I can have multiple elements added to a section.

Let\'s take for example this element. I have got two types of elements: one is **Pill Group** or **Repeater**. What\'s the difference between them? Pill Group means I\'m going to showcase the information as a pill, but this is one-time information. Like, you will always have: Is the account a KOL? Is the account a speaker? Is it a targeted account? Or you want to showcase, hey, what is the segment of the account, because the account is likely to be only one segment at a time.

Whereas Repeater is all about when the information repeats. Let\'s say, for example, if it\'s specialties, I want to display more number of specialties or the HCP could have multiple specialties, two or three. That is where I can use the element type as Repeater. I can then set how do I want to display it. Do I want to display it as a pill or do I want to show it as text? In this case, I\'ve used Pill as an option. And then I can also select the source field which needs to be used to actually display the same.

### Flexibility and Extensibility

So, a few things that we have seen here is number one, it becomes so much easier for an admin to configure. They can club information in various sections and groups together. Number two, this will work not only on the entities that we are shipping but also on the custom entities and the custom fields that the customer may add to our entities. And above all, this is actually bringing data from multiple entities together, and we can display it.

Another important aspect that I would like to talk about here is we saw that I started with a core node entity of Account. Let\'s say tomorrow I want to create a similar card, a card view which is applicable to mobile, but I want to show it for some other base entity. Let\'s say for example, a Visit or for a CLM or a Consent. I could start with that base entity configuration, give that base entity, because it needs to get the record ID from the base setup, and then decide which all fields I want to do. So that way, it\'s a configurable component, can work across areas, and the power is with the admin to decide what configuration they want to have.

Above all, I can create multiple graphs as I want and then based on the user or the profile, I can actually assign those graphs to different users and profiles.

### Final Setup: Adding the Component to a Page

Now that I have configured my graph, the only thing that I need to do is go to the account page setup, edit the page, and this is what I see. There I can drag and drop the component. It asks me to give the name of the component, how I want to show it. I have put it as \"Account Snapshot\" here. I can put it as, let\'s say, \"Provider Card.\" Save it. As you can see, the provider card gets saved here and the details will start coming in.

I have to choose the graph that I want to showcase here, what is the graph that I have configured which I want to showcase. And then as an admin, I can then decide the **form factor**. As I\'ve stated earlier, Provider Card in the 258 release is optimized only for iPad or mobile form factors. And then also, I can also look at and say, hey, if this card is applicable for a specific profile, because let\'s say I\'ve created a provider card, but I want to on that page show it only if the profile is Sales Rep or a CAM, etc. Or I could use different provider cards to be shown on different pages.

An important aspect to note here is that this Provider Card configuration, once it\'s saved and metadata is created, this is available in the iPad and it syncs offline for end users to actually view it.

### Conclusion

So, controlling your configuration with ARC, getting data from multiple entities together and displaying it to the profile, to the user that you want as per your business needs, is the key differentiator here. With this, I\'ll end this demo. Thank you very much.

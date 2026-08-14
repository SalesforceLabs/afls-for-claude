Of course. Here is the transcript formatted with clear sections and paragraphs for better readability.

### Introduction

I\'m Nitin Agarwal, part of the AFLS product team. In this demo video, I am going to showcase how an admin can configure and set up for account summarization or smart summarization, the key capability that is coming out as part of our AFLS for CEQ, or Life Sciences for customer engagement in winter 26 release. So let\'s dive into the admin setup.

As an admin, I see that for setup for Life Sciences for customer engagement, I have an option where I can see what are the steps that I need to do to actually set up account summarization.

### Prerequisites for Setup

Obviously, there are certain prerequisites:

1.  Ensuring that LLMs or the standard generative AI is enabled.

2.  We have to ensure that territory-based derived sharing rules are enabled.

3.  We have to ensure that the users for which the summary has to be created (sales rep, CAM, etc.) have been assigned the right accounts and the right accesses so that the summaries are created appropriately.

Next, as an organization, I would want to track what has changed for an individual. Let\'s say, for example, Nitin is going to meet Dr. Joe after 30 or 60 days. In that period, what has actually changed for Dr. Joe\'s profile needs to be tracked. That is where **field history tracking** is required. So organizations who want to see what information has changed and showcase that as a summary to the sales rep have to enable the field history tracking for those particular objects and specific fields. Then they have to enable the cross-object field history setting, a common capability that is built on top of ARC, or Actionable Relationship Center.

### Configuring the Cross Object Field History Graph

After I\'ve done all these basic steps, the first thing I\'m going to do is actually configure a **cross-object field history graph**. Before I go into that, I wanted to just take a minute to explain. The cross-object field history graph is based on ARC. There can be multiple such graphs created, and the intent is that for a particular user profile or group of users, I may want to look at very different kinds of information than others.

For example, a sales rep talking to an HCP might need to know about affiliations, rating changes, or recent publications. Whereas a CAM meeting an HCP or an HCO might need different information, like drug usage in the hospital, changes in formulary status, or shifts in the patient population. The information is very different for a CAM versus a sales rep. That is where having this cross-object field history enables organizations to quickly define in a graphical, structured manner what objects and fields to use for a particular persona.

In this case, I\'m going to walk through creating a summary for a sales rep. We are actually shipping an out-of-the-box **provider summary graph** as a template which customers can use as a starting point. This enables organizations to test on their sandbox and see the key information a sales rep will need about their HCP is already there. The admin can then go ahead and configure it to make it more relevant for the end user or the profile they are looking at.

Now, let me showcase the cross-object field history builder. We start with an anchor node, which is an **Account**, and then add the related entities. I can add entities up to a depth of four layers. Importantly, when I\'m adding an entity, I can also define the relationship (one-to-many, many-to-many) and add filters. For example, for an account, I can go to visits, see what products or brands were detailed, and then see the HCP\'s reaction to the messages that were delivered.

Once I have set up this graph for a particular profile, I can mark it to be used for that profile, and the next step in the flow kicks in. As we have seen, it\'s easy to configure, visually easy to add entities, and most importantly, you can add not only the entities we are shipping but also custom entities and custom fields.

### The Provider Summarization Flow

The next step is the **flow**. We are shipping an out-of-the-box **provider summarization flow** as a template for organizations to start on day one. This flow has built-in some key aspects. Number one, before even fetching the data, it checks: Is the user correct? Is the account information right? Is the territory assigned? It also defines the conditions under which the summary should run.

Number two, we have also forked it for different run types. You can have an **independent run** or a **batch run**. Most of the time this process will run in a batch, but if the organization wants to request a particular summary to be generated from the agent console, that can be done quickly.

Before it starts, the flow identifies the period for which it needs historical information. How far back in history should it look? 30 days? 60 days? Or should it be conditional? By default, if the sales rep has visited the HCP, it uses the date from the last visit. However, an organization can also set a default of 90 days if there has not been a recent visit. This allows organizations to define the period based on conditions, personas, or visit frequency.

Another check we\'ve added is a **hash check**. After every run where a summary is generated, we store a hash of the information that was used. The next time we run the summary, we check if the hash is the same. If it is, it doesn\'t make sense to generate a new summary, so we use the existing one by default, though organizations can change this process.

The flow brings all this information together, calls an invocable action to get the data from the right cross-object field history graph, and then calls the **prompt**. We are shipping an out-of-the-box prompt that works well with the default setup. This prompt is configurable by customers, and they can change the prompt name in the flow to refer to a different one. It gives customers a day-one starting point and an idea of how they can make it more useful for their specific use cases.

### Running the Batch Process

Once the prompt and flow are set up, the next step is to run the entire process. We are shipping an out-of-the-box auto-launch flow called **\"run account summarization batch.\"** Through a batch management process, organizations can then schedule when it\'s going to run---weekly, monthly, or on custom dates.

Most importantly, I as an organization can define specific conditions for when the job should run. For example, I can set a condition here like, \"run only if account segment equals Tier 1.\" In this case, the job will only fetch accounts with a Tier 1 segment and feed them into the provider summarization flow. From there, the flow will run, refer to the right graph, get the information, send it to the prompt, and store the result. Once that information has been stored in the provider account territory summary, it gets synced to the iPad and is available to the end user.

### Key Takeaways

Before I end, here are a few takeaways from this demo:

1.  We are shipping **out-of-the-box capabilities** to enable customers to start on day one, so they have something to experiment with and see how it works.

2.  We have provided a **visual framework** for organizations to define the data and fields they want to use. This can be customized as needed, allowing for multiple graphs based on different personas.

3.  We are shipping an **out-of-the-box prompt** as a starting point.

4.  We are giving organizations control through the batch process to **throttle which accounts** they want to run summarization against. For example, for a newly launched drug, I might want to run this for specific customers. Or, if I only want to target specific KOLs, I can do that as part of this batch summarization run.

With this, I\'ll come to the end of this demonstration. Thank you.

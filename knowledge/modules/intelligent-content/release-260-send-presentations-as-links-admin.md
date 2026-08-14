# Admin - Send Presentations as Links Configuration

Welcome everyone to this series of enablement recordings. My name is Eva Miguel and in this video I will guide you through how to configure the send presentations as links feature in AFLS.

## Presentation Settings Configuration

I'll start by navigating to the admin console intelligent content. From here I'm going to open the presentation settings where all configuration related to presentations and sharing behavior is managed. In this section sharing settings you will see a new option called send presentations as email links. When this setting is enabled end users can share presentations using secure links instead of sending traditional file attachments by emails. This can be configured at the org level, profile or user level as any other setting on this page. You will also notice that the existing option to send presentation as attachment is still available. We have simply renamed it to send presentation as email attachments. This means that both approaches can coexist allowing customers to choose the method that best fits their compliance and engagement needs.

Just below you can see the days until link expires. These settings defines how long a recipient can access the presentation link before it automatically expires helping for security and compliance requirement. By default is 7 days.

Next you will see the digital experience site URL. This is the site used to host and deliver the presentation when a recipient opens the link. It allows recipients to access the content without needing to login while still ensuring access is controlled, secure, and fully trackable.

## How Links Are Generated

Behind the scenes, each time a presentation is shared as a link, the system generates a unique recipient-specific access link. This enables AFLS to securely manage access and track engagement at the individual recipient level. When a recipient clicks the link, they are automatically directed to the latest active version of the presentation. They can navigate through the content as intended and all interactions are tracked.

Finally, it's important to know that only active presentations are accessible. If a presentation becomes inactive after the link is shared, the recipient will see a specific message indicating that the content is no longer available and access to the material will be blocked.

## Presentation Party Access Records

Presentation links are generated just before the mail is sent. They are created on demand. Once the system knows two key things — which presentation is being shared and which target account (either an HCP or an account) is receiving it — AFLS creates a presentation party access record. This includes the presentation ID, the presentation name, the party ID, effective start and end date (when the link is active), and an access identifier. This is formatted as PPA (presentation party access) followed by a globally unique identifier. This access identifier is a unique token generated at the exact moment that represents the email and a new one is created for every presentation party access record. In other words, one record equals one presentation for one account for one send.

## Experience Cloud Site Configuration

Next we need to configure the Experience Cloud site. We open the setup, find the sites (all sites). Here you can either create a new Experience Cloud site or reuse an existing one. If you are creating a new site use an Aura template which is required to support the presentation player. If you already have for example a remote engagement site, the recommended approach will be to reuse it by simply adding a new page for presentation viewing. This avoids duplication and keeps all external engagement experiences in one place.

On your site you need to create a new page and drag the custom component — presentation player digital experience. Then you need to ensure that this page is accessible to guest users and add a permission to the guest user profile. The permission set must include "access presentation player for digital experience."

Important: you need to capture the published URL along with the new page path and copy it back to the admin console digital experience site URL field.

## Presentation-Level Configuration

Enabling this feature at the org/profile/user level is only one part of the setup. To add an additional compliance layer, each presentation must also be explicitly configured as enabled by email. This is an existing configuration already used today to allow presentations to be sent as email attachments. We have extended its usage so that the same setting can be reused for sending presentations as links. This allows the business to control which presentations can be shared externally and ensures that certain materials — for regulatory, legal or strategy reasons — are not permitted to be sent.

## Email Template Configuration

The final piece of the setup is configuring the email templates that will be used to send presentation links. Not every email template automatically supports this feature. Email templates must be explicitly authorized and flagged to work with presentation links. This ensures that business users retain full control over where and how presentation links appear within the email body. The email template must include a specific placeholder in the HTML body. This placeholder defines where the presentation links will be inserted. On the uploading process you need to check "presentations as link" to ensure the template supports this feature.

The platform dynamically injects the correct links based on the selected presentations and recipient, ensuring a secure and governed sharing experience. Once this setup is complete, end users can seamlessly send presentations as links directly from their workflow, for example, after a call or as part of a follow-up email. And that's it for the configuration.

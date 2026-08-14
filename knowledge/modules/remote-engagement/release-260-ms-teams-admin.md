# Admin - Microsoft Teams Integration Configuration

Welcome everyone to this enablement recording series. My name is Eva Miguel. In this video, I will walk you through how to configure the Microsoft Teams integration for remote engagement in AFLS.

## Overview

Customers want flexibility to use additional conferencing technologies such as Microsoft Teams to align with HCP preferences and leverage platforms that sales reps already use and trust. AFLS provides a bridge account integration with Microsoft Teams allowing users to authenticate using their existing Teams credentials. When a visit is created in AFLS, the system automatically generates a Microsoft calendar event with a Microsoft Teams online meeting. Sales reps can launch the meeting directly from AFLS which opens the native Microsoft Teams application to host the session and HCPs join directly through MS Teams.

**Note:** This is a pilot feature since the February '26 release delivers a reduced pilot-ready scope supporting success-only flows. Full error handling and expanded capabilities are planned for the June '26 release.

## Runtime Flow

1. User schedules or launches a remote engagement session in AFLS
2. Salesforce creates a Microsoft calendar event with a Microsoft Teams online meeting enabled
3. Meeting link is automatically generated and distributed
4. HCP joins via Microsoft Teams (mobile, desktop, or browser)
5. Content is shared and engagement metrics are captured within AFLS

## Step 1: Register Application in Microsoft Azure

Go to your Microsoft Azure account > App Registrations > New Registration. Provide a name and register it. Copy the following important information:
- **Client ID**
- **Tenant ID** (Directory ID)
- Create a **new secret or certificate** — copy the value (only available once)

## Step 2: Add API Permissions

In the registered app, go to API Permissions. Add the following Microsoft Graph delegated permissions (4 required permissions). If they don't exist, add them via "Add a permission" > Microsoft Graph > Delegated permissions.

Also retrieve and save the **Authorization Endpoint v2** and **Token Endpoint** from the Endpoints section.

## Step 3: Configure External Identity Provider in Salesforce

Go to Setup > Named Credentials > External Identity Providers. Open and edit the provider, paste all the information copied from Azure (Client ID, Tenant ID, secret, authorization endpoint, token endpoint). Save.

Copy the **Callback URL** that gets generated. Go back to your Azure app registration and paste it in the Redirect URI section.

## Step 4: Create Permission Set

Go to Setup > Permission Sets. Create a new one (e.g., "Microsoft External Credentials"). Under External Credential Principal Access, ensure "AFLS Microsoft Teams O" is enabled. Under Object Settings > User External Credentials, enable Read, Create, Edit and Delete permissions.

Assign this permission set to users who will use Teams.

## Step 5: Configure Video Call Settings

In Object Manager, create new channel values in the Visit object for remote channels (separate channels for Twilio and MS Teams).

In Admin Console > Remote Engagement:
- Select default provider (Twilio or Teams)
- Under **Microsoft Teams Settings**: When the user selects MS Teams channel, a new MS Teams meeting will be created
- **Invitation delivery method**: For this release (Feb '26), only Microsoft Teams invitations are enabled. AFLS remote invitations using approved field email will come in the June 2026 release.

That's all for the configuration of Microsoft Teams integration in AFLS.

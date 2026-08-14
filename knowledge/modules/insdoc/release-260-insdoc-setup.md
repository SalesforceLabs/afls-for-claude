# InsDoc Setup (Pilot in 260)

Hello everyone. In this demo, I'll be walking you through the setup of the Ins Doc feature as an admin user.

**Important:** This feature is being delivered over two releases. It is a **pilot release in 260**. This feature is currently behind pilot permissions in 260, so it isn't customer configurable yet in production orgs. However, these permissions can be enabled for internal testing in a sandbox.

## Step 1: Create Record Types

InsDoc requires dedicated record types on both the Account and Healthcare Provider objects. Create the InsDoc account record types on:
- Account object
- Healthcare Provider object

## Step 2: Configure Admin Console

Once record types are created, set them in the dedicated admin console for InsDoc (a tab in the existing Account Management admin console tile). Set the newly created InsDoc record type for each object (Account and Healthcare Provider). When InsDoc records are created, they will use these record types — both an Account record and a Healthcare Provider record are created.

## Step 3: Enable Trigger Handlers

Ensure that existing trigger handlers for Provider Affiliation are all enabled for this feature to work.

## Step 4: Clone and Configure the Flow

The main driver of this feature is the flow. An out-of-the-box **CreateInsDocRecords** flow is provided. This flow is used for auto-creating InsDoc records.

**Best practice:** Clone the out-of-the-box flow so customers can customize it.

### Customization areas:

**InsDoc Account Naming:**
Since InsDoc accounts are auto-created, the name needs to be defined. Default formula: `HCO name - HCP name`. This can be customized by the client.

**Fields copied to InsDoc Account:**
When the InsDoc account is created, certain data is automatically copied over. The fields can be defined within the flow. These are customizable — new fields can be added or existing fields can be removed. Custom fields can also be added.

**Healthcare Provider record fields:**
Similarly, fields copied to the Healthcare Provider record are defined in the flow and are customizable.

**Contact Point Address:**
The Contact Point Address is also copied onto the InsDoc account in the out-of-the-box flow. This is customizable — clients may decide to copy other data.

## Step 5: Activate

Once the flow has been cloned and activated, the setup of InsDoc is done.

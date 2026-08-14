# Insights Admin Setup

## Step 1: Enable DB Schema Records

The first step in configuring insights is to enable the following DB schema records for insights related objects for the medical science representative profile to support offline mobile sync:

- Account
- User
- User Reaction
- Medical Insight
- Medical Insight Account
- Medical Insight Product
- Subject
- Subject Assignment

Within the admin console, navigate to object metadata cache configuration, define the basic information, format it with DB schema_medical insight, set the appropriate object name, assign it to the medical sales representative profile, choose data as transactional objects or configuration for metadata objects. Click save and repeat for each of the objects above.

After updating the permissions, run the metadata cache specifically for this profile to push changes to mobile devices.

## Step 2: Add Insights Entry Point

Navigate to Setup > App Manager, edit the Life Sciences commercial app, and under navigation items, add the Medical Insights tab to the selected items list and save. Verify that it applies to the appropriate profiles.

## Step 3: Optimize Medical Insight Page Layouts

Navigate to the page layout assignment for the medical profile and drag these four related lists:
- Medical Insight Accounts
- Medical Insight Products
- Subject Assignments
- User Reactions

These will show on the corresponding record page for an insight.

## Step 4: Create Field Sets

For **visits**: Create the "visit insights related list" field set and include Name, Source Type and Content to show up.

For **accounts**: Create the "account insights related field set" on the Medical Insight Account object and include Name, Medical Insight and Reason Type to show up.

This is up to the organization's design and can be configured.

## Step 5: Configure Generic Related List Components

Configure and integrate the insights related list into the account and visit detail pages using the Life Sciences Generic Related List component.

**For Account page:**
- Go to the account page, add the GRL under the related list tab
- Search for the "related list life sciences" component, drag it to the layout
- Fill in: Object API Name, Field Set Name, Label API Name, WHERE clause to query by the record ID
- Remove the standard new action button, show the record count, save and activate

**For Visit page:**
- Same steps as account, using the visit-specific field set and WHERE clause

## Step 6: Configure Admin Settings

These are generic on/off toggles where you can configure:
- Account as required field on an insight
- Product as required field
- Hide accounts
- Make tags required

These can be applied by profile or set as an org default.

## Step 7: Configure Quick Actions

Navigate to Admin Console > Quick Actions tile. Configure each quick action separately:
- Click New
- Select quick action name: "Create Medical Insights"
- Name the quick action, choose store order, mark as mobile only
- Select the profile (Administrator or Medical Sales Representative)
- Repeat for: Home Page, Account Page, and Visit Page
- For Account and Visit pages, specify the right SObject

## Verification

When logged in as a medical science representative, you should see:
- The Insights tab
- New Insight quick action buttons on the homepage, account and visit record pages
- Captured data populating in the specific generic related lists

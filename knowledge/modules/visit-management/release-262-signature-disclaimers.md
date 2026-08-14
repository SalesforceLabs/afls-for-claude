## Signature Page Disclaimers Based on HCP's Country (Summer '26)

Hello, and welcome to this Summer '26 Release Enablement recording. My Name is Rieko Taylor, product manager at Agentforce Life Sciences. In this video, I'm going to dive into a highly anticipated compliance enhancement: Signature Page Disclaimers based on the HCP's country.

### The Challenge

Currently, when field reps capture an HCP's signature for product samples, the regulatory disclaimers displayed are based on the rep's territory. For example, a rep aligned to a German territory will see German-specific disclaimer content.

But what happens in complex, multi-country environments? Imagine an EU border region where a German-speaking rep is engaging an HCP whose practice is actually located in France. The current model falls short because the disclaimer must reflect the HCP's regulatory context, not the rep's.

In this release, we are introducing a dynamic filtering capability that evaluates the HCP's specific country—and optionally their language—to display the correct disclaimer texts during signature capture.

### Admin Setup

We are reusing the exact same 'Disclaimer Filtering Fields' settings in the Admin Console > Consent Management tile that you already use today for Consent disclaimers. Admins simply specify where the system should pull the filtering data from. You have two options:

1. **Account object** — pull filtering data directly from a field on the Account
2. **Account Territory level field** — from the Provider Account Territory Information object. This is useful for multi-country HCP practices such as those in EU border regions. For example, you can assign a German disclaimer to a German rep meeting the HCP at a location in Germany and assign a French disclaimer to a French rep meeting the same HCP at a location in France.

If you populate both of these settings, the system will prioritize the Account Territory Fields value.

### FilterAttributeValues Configuration

Set filtering values in the FilterAttributeValues field on the Compliance Statement Definition records to match the country—like 'Germany' or 'France'. You can even use semicolon-separated values to apply a single disclaimer to multiple countries at once, or combine country and language codes, like 'Germany-French' or "Germany-German", to ensure the HCP gets the right country rules in their preferred language.

If you choose not to configure these filtering fields, the system will fall back to standard behavior, displaying disclaimers based on your existing user or territory sharing rules.

### Demo Example

Setup:
- 1st disclaimer has no Filter Attribute Values set (displayed to all)
- 2nd disclaimer has "France" filter
- 3rd disclaimer has "Germany" filter
- 4th disclaimer has both "Germany" and "France"
- All 4 disclaimer texts are shared to the sales rep's territory

Results:
- **Dr. Morita** (France set in filtering field): Shows disclaimers 1, 2, and 4
- **Dr. Ignacia** (Germany set in filtering field): Shows disclaimers 1, 3, and 4

Applying these additional filters ensures that HCPs are presented with the appropriate regulatory statements.

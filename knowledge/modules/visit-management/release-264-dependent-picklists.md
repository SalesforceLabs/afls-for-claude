# Dependent Picklists on Visit Engagement - Winter '27 (264)

Platform: iPad and Web.

## What's New

Standard field dependencies now work on the Visit Engagement page: when a field user selects a value in the controlling field, dependent picklist fields filter to show only the mapped values. Example: a rep picks a product discussion topic and the related picklist narrows to values valid for that topic.

## Supported Objects

- Provider Visit
- Provider Visit Product Discussion
- Custom objects configured for Visit Engagement

## Admin Setup

1. Configure the field dependency (standard Salesforce setup): in Object Manager select the object, create or identify the controlling field and the dependent picklist, then on the controlling field create/edit **Field Dependencies** mapping each controlling value to its valid dependent values.
2. **Generate the metadata cache** after configuring or changing a dependency so it is available on the Visit Engagement page (web and mobile).

## Gotchas

- Forgetting the metadata cache refresh is the likely cause of dependencies not applying on Visit Engagement.

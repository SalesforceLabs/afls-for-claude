# Validate Visits on Save and Return Warnings - Winter '27 (264)

Platform: iPad and Web.

## What's New

- Visit Action Validation custom scripts can now run on **Save**, not just Submit or Sign.
- Scripts can return a new **warning** status, which shows a dismissible confirmation instead of a blocking error (web and mobile).

Previously, validation only ran on Submit or signature capture, so reps learned of issues late, and admins could not warn without hard-blocking.

Use case: enforce country- or company-specific rules not available out of the box (e.g. visit limits). A rep over the limit sees a warning on Save and can continue; a stricter rule can return a blocking error that prevents the save.

## Admin Setup (update the existing Visit Action Validation custom script)

1. Read the current action from the `actionName` environment option and include `Save` in the supported actions:

```js
const actionName = env.getOption('actionName');
const allowedActions = ['Save', 'Submit', 'Sign'];
```

   Check `actionName` to apply the same validation to all actions, or define different behavior for Save, Submit, and Sign.

2. For non-blocking issues, return `status: 'warning'` with the message in `title`:

```js
return [{
    status: 'warning',
    title: 'At least one detailed product should be discussed in the visit.'
}];
```

Reference: "Visit Action Validation Scripts" in Salesforce Help. See also the `afls-custom-scripts` skill for IIFE/CodeText conventions.

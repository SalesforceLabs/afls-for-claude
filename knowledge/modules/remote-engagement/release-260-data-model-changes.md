# Remote Engagement - Data Model Changes

Welcome everyone to this enablement recording series. My name is Eva Miguel. In this video, I'm going to show you the data model changes that we have introduced for remote engagement in this release.

## The Challenge

Today, collecting HCP signatures often requires either a live remote visit or a face-to-face interaction. This creates friction when HCPs aren't available for a real-time meeting but consent is needed. Examples:

- A rep needs a signature (e.g., for DTP) but the discussion happened over the phone
- A medical inquiry is discussed during a Microsoft Teams or Zoom meeting
- HCP consent is required before sending an email with compliant content

In all of these cases, there is currently no clean way to collect a compliance signature without forcing a live session or a workaround. HCP expectations have clearly evolved — they want to review content on their own time, sign securely from any device, and complete required actions without joining another meeting.

## What's Changing

AFLS introduced a flexible data model that separates signature requests from remote visit records. This allows signature requests to be created and tracked independently with support for secure signing links sent via email.

**Important:** This is not the feature itself. What we are introducing here are the **data model foundations** that make these scenarios possible. These changes prepare AFLS to support asynchronous compliance signature features in a future release without needing to redesign the data model later.

## New Core Entity: Digital Signature Request

A new core entity **Digital Signature Request** becomes the central record for any signature flow independent of a live remote visit. It represents why a signature is needed and allows signatures to be created, sent, tracked and completed asynchronously. Various fields have been added to support this.

## Extended Objects

Several existing objects have been extended to reference this new request:

- **Emails** can now track the delivery of signing links
- **Consent Snapshots** are clearly tied to the correct request
- **Digital Signatures** capture device and environment details for compliance
- **Remote Visits** remain supported but signatures no longer depend on them
- **Request Types** now distinguish live meeting signatures from asynchronous inquiries

These new entities and extensions lay the foundation for future asynchronous compliance signature features without changing existing workflows or breaking current implementations.

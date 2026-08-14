# Medical Inquiries

Medical Inquiries in AFLS enables field reps and medical affairs teams to capture, route, and track medical information requests from healthcare providers. This module supports compliance workflows for handling unsolicited medical questions during field interactions.

## Documentation Files

- [Medical Inquiries Configuration Guide](./medical-inquiries-configuration-guide.md)

## Support Engineering Training (AFLS4CE Value Chain)

### Key Concepts

- **Multi-entity record page** — Inquiry + Case combined view. Record-type Names MUST match EXACTLY on both objects.
- **Standard button overrides** — Inquiry's `New` and `Edit` MUST be overridden with multi-entity create/edit overrides — else plain Inquiry page renders.
- **Generic Workflow Stage Path** — Custom component drives status transitions, CRUD access per stage, role-conditional actions (Creator vs Responder via custom formula field).
- **Validation vs Checklist scripts** — Both are LWC components linked to stage objects. Validation **blocks** state movement; Checklist **does not** (icon-only feedback).
- **Queue-based ownership change** — On submit, Case moves to OOTB Inquiry Queue; background triggers (Case MSL Queue Handler, Case Change Ownership Handler, Case Share to Creator Handler) propagate ownership + share back to original Sales Rep creator.
- **Compliance Statement Definition** — `ModuleType = Medical Inquiry` + `StatementType = Disclaimer`; record must be shared to Sales Rep for disclaimer text to render during signature.

- [support-engineering-inquiry](./support-engineering-inquiry.md) — Apr 13, 2026 session. Multi-entity page setup, button overrides, record type matching, Lightning record page (Multi-Object Record View + Answer-tab field-set on `InquiryQuestionAnswer`), Generic Workflow Stage Path Container, 3 workflow action types, validation/checklist LWC pattern, signature capture + disclaimer config, queue ownership change + 4 trigger handlers, 9 troubleshooting patterns.

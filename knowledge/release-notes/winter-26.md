# Winter '26 Release Notes — AFLS

## Key Features

### Agentforce for AFLS (Beta)
- Introduction of Field Sales Agent for AFLS
- Pre-built topics: Visit Management, Account Lookup, Activity Tracking
- Pre-built actions: Schedule Visit, Log Call, Check Account Goals
- Einstein Studio configuration for agent customization
- Available for web app only (not mobile)

### Visit Management Enhancements
- Visit engagement sidebar on mobile
- Custom related lists in visit page layouts
- Improved product detailing flow
- Compliance statement support for pre-call and post-call

### Sample Management Updates
- Enhanced inventory reconciliation workflows
- Improved sample limit enforcement with real-time checking
- Batch job for automated sample limit generation

### User Management
- Self-service permission set license assignment
- License capacity monitoring via API
- Improved role hierarchy visualization

### Intelligent Content / CLM
- Bulk Presentation API for programmatic content upload
- Support for HTML ZIP presentations
- Territory-based content distribution
- Presentation page-level product assignment

### Mobile App
- DB Schema Manager improvements
- One-way sync support (web → mobile)
- Metadata cache generation via Connect API
- Navigation tab customization

## API Changes

- New `LifeSciConfigAssignment` Tooling API entity for profile/permission set assignments
- `generate_mobile_metadata_cache` Connect API endpoint
- Enhanced `diff_orgs` capability for configuration comparison

## Deprecations

- Legacy FlexCard-based provider card (use standard Lightning components)
- OmniScript-based visit flows on mobile (use native mobile visit engagement)

# Spring '26 Release Notes — AFLS

## Key Features

### Agentforce for AFLS (GA)
- Field Sales Agent now generally available
- Pre-built topics and actions for common field rep workflows
- Einstein Studio integration for custom agent configuration
- Support for visit scheduling, account lookup, and activity tracking via natural language

### Enhanced Activity Plans
- Weighted goal support for multi-product territories
- Shared territory goals across team members
- Improved batch job performance for goal measure calculations

### Mobile App Enhancements
- Dynamic Actions support on home page and account pages
- Improved offline sync reliability
- Push notification deep links to specific records

### Territory Alignment
- Bulk territory reassignment via API
- Improved affiliation alignment performance
- New batch job scheduling options (hourly frequency)

### Key Account Management
- Action Plan templates for standardized KAM workflows
- Stakeholder influence mapping on mobile
- Goal tracking dashboard improvements

### Data Cloud Integration
- NBC (Next Best Customer) predictive scoring via Data Cloud
- Real-time engagement scoring signals
- TabNext Metrics for territory prioritization

## API Changes

- New `MobileApplicationDetail` REST endpoint for cache status
- Enhanced Tooling API support for `LifeSciConfigRecord` CRUD
- Bulk Presentation API performance improvements

## Deprecations

- Legacy sample transaction API endpoints (use InventoryOperation instead)
- Classic UI admin pages (use Admin Console)

## Known Issues

- Mobile metadata cache generation may timeout for orgs with 50+ profiles
- Affiliation alignment batch job may fail if ProviderAffiliation records have null Role values

# Mobile Metadata Cache

The Mobile Metadata Cache (also known as DB Schema or Object Metadata Cache) is a critical component for AFLS Mobile (iPad) app functionality. It defines which objects and fields are available for offline sync and determines the mobile app's data schema.

## Key Concepts

### LifeSciMobileMetadataRecord

This is the main object that stores mobile metadata cache configuration. It has a parent-child hierarchy:

- **Parent Record**: Contains the overall cache configuration
- **Child Records**: Profile-specific configurations linked to the parent

### Status Flow

Records go through these statuses:
1. `New` - Just created
2. `ValidationCompleted` - Ready for generation
3. `Processing` - Generation in progress
4. `Active` / `Published` - Ready for mobile sync
5. `Error` - Generation failed

### IntegrationStatus Values

| Status | Description |
|--------|-------------|
| `New` | Not yet processed |
| `Pending` | Awaiting processing |
| `Ok` | Successfully processed |
| `Error` | Processing failed |

## Admin Console Location

**Admin Console > Mobile > Object Metadata Cache Configuration**

This is the UI-based approach for managing mobile metadata cache.

## Documentation

- [Programmatic Generation](./programmatic-generation.md) - How to generate cache via Apex/API

## Summer '26 (Release 262) Enhancements

- [Idle Background Sync](./release-262-idle-background-sync.md)
- [LMR Offline](./release-262-lmr-offline.md)

## Support Engineering Training (AFLS4CE Value Chain)

- [Mobile Sync Architecture](./support-engineering-mobile-sync.md) — end-to-end sync flow, transaction lifecycle, six sync types, metadata cache settings, troubleshooting playbook

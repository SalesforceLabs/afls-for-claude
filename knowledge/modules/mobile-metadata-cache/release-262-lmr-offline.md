# LMR Offline Feature (Summer '26)

## Background

The LMR (Lightning Mobile Runtime) module hosts Lightning Web Components inside the AFLS Mobile app. By default, all UI-API requests from LWC wire adapters flow to the Salesforce server via the network. The **offline subsystem** adds a local interception layer that can resolve UI-API requests directly from the device's local database.

When a request arrives:
1. The offline subsystem checks whether a registered handler can serve the request locally
2. If a handler matches, it builds a response from the local SQLite database and returns it immediately — no network call
3. If no handler matches and the device is **online**, the request falls through to the normal network path
4. If no handler matches and the device is **offline**, the adapter returns a localized "API call is unsupported offline" error

Write operations persist changes to the local database and generate sync transactions, exactly like the AFLS mobile app.

- **Offline temporary IDs** use the format `EntityName-UUID` (longer than 18 chars)
- **Write operations** (POST/PATCH/DELETE) persist changes locally and generate temporary IDs, synced to server when connectivity is restored

## Enabling the Feature

Setting: `EnableLSCMobileAppsOfflineSupport = true`

This is a field on the **ApplicationSettings** Life Science Config Category.

**Admin Console location:** Mobile → Application Settings → AFLS Mobile Apps → **Use Mobile Apps offline**

## Supported Lightning Adapters (Resolve Offline)

### Record Operations
| Adapter | Module | Offline Behavior |
|---|---|---|
| `getRecord` | `lightning/uiRecordApi` | Returns field values for previously-synced records |
| `getRelatedListRecords` | `lightning/uiRelatedListApi` | Returns child records via named relationship |
| `createRecord` (imperative) | `lightning/uiRecordApi` | Creates locally with temp ID; syncs on reconnect |
| `createRecord` (batch) | `lightning/uiRecordApi` | Batch creates locally; syncs on reconnect |
| `updateRecord` (imperative) | `lightning/uiRecordApi` | Updates record in local DB |
| `deleteRecord` (imperative) | `lightning/uiRecordApi` | Marks deleted locally; syncs on reconnect |
| `getRecordCreateDefaults` | `lightning/uiRecordApi` | Returns cached default field values and layout info |

### Metadata / Object Info
| Adapter | Module | Offline Behavior |
|---|---|---|
| `getObjectInfo` | `lightning/uiObjectInfoApi` | Returns object schema (fields, relationships, CRUD, record types) |
| `getObjectInfos` | `lightning/uiObjectInfoApi` | Batch object metadata; partial failures possible |

### Picklist Values
| Adapter | Module | Offline Behavior |
|---|---|---|
| `getPicklistValues` | `lightning/uiObjectInfoApi` | Returns picklist label/value pairs for a single field |
| `getPicklistValuesByRecordType` | `lightning/uiObjectInfoApi` | Returns all picklist fields for an object/record-type |

### Layout & UI
| Adapter | Module | Offline Behavior |
|---|---|---|
| `getLayout` | `lightning/uiRecordApi` | Returns record page layout from local metadata |
| `getRecordUi` | `lightning/uiRecordApi` | Returns combined record + layout + object-info |
| `getRecordCreateDefaults` (template) | `lightning/uiRecordApi` | Template defaults for record creation |
| `getRecordCreateDefaults` (clone) | `lightning/uiRecordApi` | Clone template defaults |

### Lookups
| Adapter | Module | Offline Behavior |
|---|---|---|
| `getLookupRecords` | `lightning/uiRecordApi` | Searches local DB for lookup field matches |

## Unsupported Adapters (Return Error Offline)

- `notifyRecordUpdateAvailable`, `getRecordNotifyChange` (cache invalidation)
- `getRelatedListInfo`, `getRelatedListInfoBatch`, `getRelatedListsInfo` (related list metadata)
- `getRelatedListRecordsBatch`, `getRelatedListCount`
- `getNavItems` (Beta — navigation items)
- `graphql` (GraphQL queries)
- Connect API (`/connect/` endpoints)
- Apex REST (`/services/apexrest/`)
- SOQL via REST (`/services/data/{version}/query`)

Error response when unsupported call made offline:
```json
{"status": 400, "body": "{\"error\": \"API call is unsupported offline\"}"}
```

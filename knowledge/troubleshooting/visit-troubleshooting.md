# Visit Management — Troubleshooting

## "Visit not saving on mobile"
**Cause:** Record type mismatch between Visit and ProviderVisit
**Fix:** Ensure record type names are identical on both objects. Check in Setup > Object Manager.

## "Product detailing section missing"
**Cause:** Product Detailing not enabled in Admin Console
**Fix:** Admin Console > Visit Settings > Product Detailing > Enable Product Detailing Enabled = true. Regenerate metadata cache.

## "Signature page not appearing"
**Cause:** No ComplianceStatementDefinition records for the Visit module
**Fix:** Create at least one ComplianceStatementDefinition with Module = 'Visit' and IsActive = true.

## "Visit not appearing in rep's calendar"
**Cause:** Missing Event record linked to the Visit, or rep not assigned to the account's territory
**Fix:** Check Visit.WhatId links to an Event. Verify rep's UserTerritory2Association includes the account's territory.

## "Cannot create visit on mobile"
**Cause:** Visit not in DB Schema, or Quick Action not configured
**Fix:** Check `list_db_schema` for Visit object. Check `list_afls_actions` for NewVisit action. Regenerate cache.

## "Detailing summary not saving"
**Cause:** ProviderVisit record type does not match Visit record type
**Fix:** Create matching record type on ProviderVisit. Names must be identical.

## "Visit sync error on iPad"
**Cause:** DB Schema SOQL filter on Visit is invalid, or Visit trigger handler is inactive
**Fix:** Check `get_db_schema` for Visit WhereSoql. Check `list_trigger_handlers` for VisitTriggerHandler.

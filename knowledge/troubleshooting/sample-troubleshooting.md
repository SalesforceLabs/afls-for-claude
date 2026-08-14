# Sample Management — Troubleshooting

## "Sample limit exceeded but shouldn't be"
**Cause:** ProviderSampleLimit QuantityDisbursed not reset for new time period, or wrong TimePeriod associated
**Fix:** Check TimePeriod dates. Run Sample Limits batch job to regenerate limits for the current period.

## "Product not appearing in sample drop"
**Cause:** Product not active, not assigned to rep's territory, or not in DB Schema
**Fix:** Check Product2.IsActive = true. Verify product-to-territory assignment. Check DB Schema for Product2 and InventoryOperation.

## "Inventory count mismatch"
**Cause:** ProductItem records out of sync after manual adjustments
**Fix:** Run inventory reconciliation. Query ProductItem for the location and verify counts match physical inventory.

## "Cannot disburse samples on mobile"
**Cause:** Sample-related objects missing from DB Schema, or SampleTriggerHandler inactive
**Fix:** Check DB Schema for ProductDisbursement, ProviderSampleLimit, ProductItem. Check trigger handler status.

## "Sample limit batch job not generating limits"
**Cause:** Missing TimePeriod records or products not associated with limit templates
**Fix:** Verify TimePeriod records exist for the current period. Check sample limit template product assignments in Admin Console.

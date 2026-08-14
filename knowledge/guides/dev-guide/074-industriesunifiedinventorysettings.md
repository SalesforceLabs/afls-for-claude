<!-- guide:dev-guide section:industriesunifiedinventorysettings pages:1953-1954 -->
# IndustriesUnifiedInventorySettings

AFLS Overview                                                                                      IndustriesUnifiedInventorySettings



Field Name                                          Field        Description
Type
run randomization procedures for their clinical trials. The default value
is false. Available in API version 61.0 and later.

enableVisitInventoryEnabled                         boolean      Indicates whether to enable inventory tracking for visits.

enableVisitPlanningAndExecutionAction boolean                    Indicates whether to enable actions for Visit Planning and Execution.

enableWaitlistManagementPref                        boolean      Indicates whether to enable preferences for Waitlist Management.




## Declarative Metadata Sample Definition

The following is an example of a Industries.Settings metadata file.
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
<enableLifeSciencesClinialTrailManagement>true</enableLifeSciencesClinialTrailManagement>


## <enableAdverseEvents>true</enableAdverseEvents>

<enableTrialManagementRandomization>true</enableTrialManagementRandomization>
</IndustriesSettings>

The following is an example package.xml that references the previous definition.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>Industries</members>
<name>Settings</name>
</types>
<version>66.0</version>
</Package>




## IndustriesUnifiedInventorySettings

Represents the settings for Industries Unified Inventory.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

IndustriesUnifiedInventorySettings components have the suffix IndustriesUnifiedInventory.settings and are stored
in the settings folder.



## Version

IndustriesUnifiedInventorySettings components are available in API version 64.0 and later.

<!-- page:1954 -->

AFLS Overview                                                                                IndustriesUnifiedInventorySettings




## Fields

Field Name                                Description
enableBatchManagement                     Field Type
Boolean
Description
Indicates whether the batch-based inventory management features are enabled
(true) or not (false). Within AFLS, this is a core component of the
Unified Inventory Extension Entities, supporting Sample Inventory use cases. When
enabled, it provides access to the entities ProductionBatch, ProductBatchItem, and
InventoryCntProdtBatchItem.

enableInventoryCount                      Field Type
Boolean
Description
Indicates whether the Inventory Count is enabled (true) or not (false). The
Inventory Count provides the ability to manage inventory count processes by planning
inventory counts, counting inventory at designated locations, and tracking count
results.

enableProductInventoryOperations Field Type
Boolean
Description
Indicates whether the Product Inventory Operations that provides the capabilities to
perform various actions related to managing product inventory is enabled (true) or
not (false).




## Declarative Metadata Sample Definition

The following is an example of an IndustriesUnifiedInventorySettings component.
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesUnifiedInventorySettings xmlns="http://soap.sforce.com/2006/04/metadata">
<enableBatchManagement>true</enableBatchManagement>
<enableInventoryCount>true</enableInventoryCount>
<enableProductInventoryOperations>true</enableProductInventoryOperations>
</IndustriesUnifiedInventorySettings>

The following is an example package.xml that references the previous definition.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>IndustriesUnifiedInventory</members>
<name>Settings</name>
</types>
<version>64.0</version>
</Package>

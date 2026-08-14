<!-- guide:dev-guide section:fields-on-producttransfer pages:1475-1475 -->
# Fields on ProductTransfer

AFLS Overview                                                                                            Fields on ProductTransfer




## Fields on ProductTransfer

AFLS fields extend the standard ProductTransfer object to capture specific inventory and batch information.



## Fields

Field                                Details
InventoryCountReferenceId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The inventory count record where the product transfer is recorded.
This field is a relationship field.
Relationship Name
InventoryCountReference
Refers To
InventoryCntProdtBatchItem

InventoryOperationId                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The inventory operation associated with the product transfer.
This field is a relationship field.
Relationship Name
InventoryOperation
Refers To
InventoryOperation

ProductionBatchId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The production batch associated with the transferred products.
This field is a relationship field.
Relationship Name
ProductionBatch
Refers To
ProductionBatch

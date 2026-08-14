<!-- guide:dev-guide section:introduction pages:1-4 -->
# Introduction


## Guide

Version 66.0, Spring ’26




Last updated: February 13, 2026

<!-- page:2 -->

© Copyright 2000–2026 Salesforce, Inc. All rights reserved. Salesforce is a registered trademark of Salesforce, Inc., as are other

names and marks. Other marks appearing herein may be trademarks of their respective owners.

<!-- page:3 -->


Chapter 1: AFLS Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
AFLS Data Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Clinical Engagement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Customer Engagement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
Patient Engagement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 714
MedTech Commercial Engagement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1366
AFLS Associated Objects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1426
StandardObjectNameChangeEvent . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1426
StandardObjectNameFeed . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1429
StandardObjectNameHistory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1434
StandardObjectNameOwnerSharingRule . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1436
StandardObjectNameShare . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1438
VisitedPartyFeed . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1439
VisitorFeed . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1444
AFLS Fields on Standard Objects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1448
Account . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1449
AccountPlan . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1450
AccountPlanObjective . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1453
ActionPlan . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1454
ActionPlanItem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1457
ActionPlanTemplateItemValue . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1458
Action Plan Template . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1459
Action Plan Template Item . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1460
ActionPlanTemplateVersion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1460
Contact . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1462
Fields on ContactPointAddress . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1463
Fields on Event . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1466
Fields on Event Relation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1468
Product Request . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1470
Product Request Line Item . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1470
Product Transfer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1471
StandardValueSet Names and Standard Picklist Fields . . . . . . . . . . . . . . . . . . . . . . . . . . 1472
AFLS Platform Events . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1476
ApplnFormAppealStsChgEvnt . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1476
CareBnftVrfyRqstStsChgEvent . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1477
Working With Electronic Health Records . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1478
Mapping FHIR v4.0 to Salesforce Standard Objects . . . . . . . . . . . . . . . . . . . . . . . . . 1479
Store HL7 v2.3 Messages in Salesforce Standard Objects . . . . . . . . . . . . . . . . . . . . . 1584
AFLS Business APIs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1602

<!-- page:4 -->



Resources . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1603
Request Bodies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1689
Response Bodies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1781
Apex Reference . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1849
embeddedai Namespace . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1849
ConnectApi Namespace . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1855
AFLS Standard Invocable Actions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1866
Assign Candidate to Research Study Group Action . . . . . . . . . . . . . . . . . . . . . . . . . 1867
Build Product Territory Detailed Availability Action . . . . . . . . . . . . . . . . . . . . . . . . . . 1869
Generate Research Study Blocks Action . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1870
Get Context Data Action . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1872
Get Life Sciences Configuration Field Names and Values . . . . . . . . . . . . . . . . . . . . . 1875
Process Criteria Matching Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1877
Serialize Hierarchical Context Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1879
AFLS Tooling API Objects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881
AssessmentConfiguration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1882
CareBenefitVerifySettings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1885
CareLimitType . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1888
CareProviderAfflRoleConfig . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1892
CareProviderSearchConfig . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1894
CareRequestConfiguration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1897
CareSystemFieldMapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1902
TimelineObjectDefinition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1906
Customer Engagement Tooling API Objects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1906
SearchableObjDataSyncInfo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1924
SearchCriteriaConfiguration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1926
SearchResultActionConfig . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1931
AFLS Metadata Types . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1934
CareBenefitVerifySettings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1935
CareLimitType . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1937
CareRequestConfiguration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1939
CareSystemFieldMapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1942
CareProviderSearchConfig . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1944
Flow for AFLS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1945
IndustriesSettings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1946
IndustriesUnifiedInventorySettings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1949
LifeSciConfigCategory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1951
LifeSciConfigRecord . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1954
SearchResultActionConfig . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1959
TimelineObjectDefinition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1961
UIObjectRelationConfig . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1963
Customer Engagement Metadata Type . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1968
API End-of-Life Policy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1974

<!-- guide:dev-guide section:lifesciconfigcategory pages:1955-1957 -->
# LifeSciConfigCategory

AFLS Overview                                                                                           LifeSciConfigCategory




## LifeSciConfigCategory

Represents the category that Life Sciences configuration records are organized into.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

LifeSciConfigCategory components have the suffix .lifeSciConfigCategory and are stored in the
lifeSciConfigCategories folder.



## Version

LifeSciConfigCategory components are available in API version 65.0 and later.



## Fields

Field Name                                 Description
category                                   Field Type
LifeSciConfigCategoryType (enumeration of type string)
Description
Required
Defines the category for the configuration.
Possible values are:
- AccountProviderVisitRecordTypeMapping
- AccountSearchSettings
- ActivityHistoryAdministration
- ActivityHistoryRelatedLabel
- ActivityPlanConfiguration
- ActivityPlanSettings
- AddressSettings
- AffiliationReverseRoleMapping
- AffiliationSettings
- ApplicationSettings
- BestTimeSettings
- BulkUpdateRestrictedEntity
- BusinessHoursHolidayMapping
- CalendarEvent

<!-- page:1956 -->

AFLS Overview                                          LifeSciConfigCategory




## Field Name              Description

- CallCustomDiscussionRecordType
- CallDiscussionRecordType
- CustomAction
- CustomerMergeSettings
- DbSchema
- DEASettings
- DTVComponentConfig
- DTVObjectConfig
- ExternalSearchPreferences
- ExternalSearchUserSettings
- FieldSetMapping
- InsDocSettings
- InsightSettings
- InventoryManagementSettings
- KAM
- KAMSettings
- LogSettings
- NavigationIcons
- NextBestCustomerSettings
- OptAdministration
- PlannerAdministration
- ProductAdminSettings
- ProfileBasedAppSettings
- ProviderSummarization
- QuickAction
- ReportsAndDashboardsSync
- SearchBeforeCreate
- SprintSettings
- StateDistributorLicenseSettings
- StateLicenseNumberSettings
- SyncProcessorConfiguration
- SyncTransactionAdminView
- SyncTransactionConfig
- SyncTransactionFieldBehaviour
- TerritoryManagement
- TimeOffTerritoryRule
- TimeOffTerritorySettings
- TimeOffTerritorySlots

<!-- page:1957 -->

AFLS Overview                                                                                         LifeSciConfigCategory




## Field Name                               Description

- TimeOffTerritoryWorkingDaySettings
- TimelineActivitySetting
- UISchema
- VideoCallPhoneNumber
- VideoCallSettings
- WorkingDaysConfig

categoryLabel                            Field Type
String
Description
The label for the categories.

isProtected                              Field Type
Boolean
Description
Indicates whether the field is protected (true) or not (false).

masterLabel                              Field Type
String
Description
Required
The main label for the configuration.


## type                                     Field Type

LifeSciCategoryType (enumeration of type string)
Description
Type of configuration category.
Values are:
- Hierarchical
- List




## Declarative Metadata Sample Definition

The following is an example of a LifeSciConfigCategory component.
<?xml version="1.0" encoding="UTF-8"?>
<LifeSciConfigCategory xmlns="http://soap.sforce.com/2006/04/metadata">
<category>ApplicationSettings</category>
<masterLabel>ApplicationSettings</masterLabel>
</LifeSciConfigCategory>

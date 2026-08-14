<!-- guide:dev-guide section:life-sciences-cloud-metadata-types pages:1938-1938 -->
# AFLS Metadata Types

AFLS Overview                                                                                 AFLS Metadata Types




## Field                                  Details

Metadata                               Type
SearchResultActionConfig on page 1959
Properties
Create, Nillable, Update
Description
The search result action configuration’s metadata.





## AFLS Metadata Types

Metadata API enables you to access some types and feature settings that you can customize in the user interface.
For more information about Metadata API and to find a complete reference of existing metadata types, see Metadata API Developer
Guide.



## CareBenefitVerifySettings

Represents the configuration settings for benefit verification requests.
CareLimitType
Defines the characteristics of limits on benefit provision.
CareRequestConfiguration
Represents the details for a record type such as service request, drug request, or admission request. One or more record types can
be associated with a care request.
CareSystemFieldMapping
Represents a mapping from source system fields to Salesforce objects and fields. This type extends the Metadata metadata type and
inherits its fullName field.
CareProviderSearchConfig
Represents the information about the fields that appear in care provider search results. This type extends the Metadata metadata
type and inherits its fullName field.
Flow for AFLS
The Flow for AFLS represents the metadata associated with a flow. Use Flow to create an application that takes users
through a series of pages to query and update the records in the database. You can also run logic and provide branching capability
based on user input to build dynamic applications.
IndustriesSettings
Represents settings for AFLS.
IndustriesUnifiedInventorySettings
Represents the settings for Industries Unified Inventory.
LifeSciConfigCategory
Represents the category that Life Sciences configuration records are organized into.
LifeSciConfigRecord
Represents the configuration records used in AFLS.

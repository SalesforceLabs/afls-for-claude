<!-- guide:dev-guide section:life-sciences-cloud-tooling-api-objects pages:1885-1885 -->
# AFLS Tooling API Objects

AFLS Overview                                                                                     AFLS Tooling API Objects



]
}

Sample Response


{
"serializedContextData": {
"CareProgram": {
"Name": "Drug Use Satisfaction Improvement Program",
"Outcome": [
{
"Name": "Reduced Symptoms",
"IndicatorAssignment": [
{
"IndicatorDefinitionName": "Symptom Monitoring",
"UnitOfMeasureName": "Percentage"
}
]
}
]
}
}
}




## AFLS Tooling API Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for
many metadata types allow you to retrieve smaller pieces of metadata.
For more information about Tooling API objects and to find a complete reference of all the supported objects, see Introducing Tooling
API.



## AssessmentConfiguration

Represents a configuration for Assessment component. An AssessmentConfiguration entry indicates configuration for user flows
such as sending out emails or reminder actions on assessments initiated by the patient. This object is available in API version 58.0
and later.
CareBenefitVerifySettings
Configuration settings for benefit verification requests. This object is available in API version 53.0 and later.
CareLimitType
Defines the characteristics of limits on benefit provision. This object is available in API version 53.0 and later.
CareProviderAfflRoleConfig
Represents information about the affiliations of the healthcare provider. For example, this object represents an affiliation between
a healthcare provider and a hospital. This object is available in API version 59.0 and later.
CareProviderSearchConfig
Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made
available in the search object (target). This object is available in API version 48.0 and later.

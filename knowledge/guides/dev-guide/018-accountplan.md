<!-- guide:dev-guide section:accountplan pages:1454-1456 -->
# AccountPlan

AFLS Overview                                                                                                         AccountPlan




## Fields

Field                                Details
Effective Date                       Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date from when the person account is active.

End Date                             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date from when the person account is no longer active.

Source System ID                     Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in its source system. This field can’t be encrypted.




## AccountPlan

AFLS fields extend the standard Account Plan object to represent information about customers with measurable objectives
and executable steps to proactively manage and grow customer relationships.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), update(), upsert()



## Fields

Field                                Details
ActionPlanCompletedPct               Type
percent
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1455 -->

AFLS Overview                                                                                                AccountPlan



Field                     Details


## Description

The completed percentage of action plans associated with the account plan.

EconomicalAnalysisInfo    Type
textarea
Properties
Create, Nillable, Update
Description
The evaluation of economic factors that can affect the account, including market trends,
economic indicators, and financial health of the customer and their industry.

EnvironmentalAnalysisInfo Type
textarea
Properties
Create, Nillable, Update
Description
The assessment of environmental factors that can impact the account, such as sustainability
considerations, climate change-related risks, and regulatory compliance with environmental
standards.

LegalAnalysisInfo         Type
textarea
Properties
Create, Nillable, Update
Description
The detailed analysis of the legal landscape relevant to the account, including regulations,
compliance requirements, and potential legal risks or opportunities.

PoliticalAnalysisInfo     Type
textarea
Properties
Create, Nillable, Update
Description
The detailed assessment of political factors that can influence the account, such as
government policies, regulatory changes, and political stability in the relevant regions.

SocialAnalysisInfo        Type
textarea
Properties
Create, Nillable, Update

<!-- page:1456 -->

AFLS Overview                                                                                                                   AccountPlan



Field                                   Details


## Description

The examination of social factors that can impact the account, including demographic trends,
cultural considerations, and social responsibility initiatives.

SourceSystemIdentifier                  Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in the source system.

SourceSystemName                        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system from which data is loaded into the object.

TechnologicalAnalysisInfo Type
textarea
Properties
Create, Nillable, Update
Description
The evaluation of technological factors that can affect the account, including emerging
technologies, industry-specific innovations, and the customer's technological capabilities
and infrastructure.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AccountPlanChangeEvent on page 1426
Change events are available for the object.
AccountPlanFeed on page 1429
Feed tracking is available for the object.
AccountPlanHistory on page 1434
History is available for tracked fields of the object.

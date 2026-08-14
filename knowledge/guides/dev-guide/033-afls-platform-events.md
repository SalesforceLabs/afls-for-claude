<!-- guide:dev-guide section:life-sciences-cloud-platform-events pages:1480-1480 -->
# AFLS Platform Events

AFLS Overview                                                                                        AFLS Platform Events



Standard Value Set Name                                               Field Name
ShipmentStatus                                                        ProductTransfer.ShipmentStatus

SprintStatus                                                          Sprint.Status

StakeholderInfluenceLevel                                             AccountPlanStakeholder.InfluenceLevel

StakeholderRoleType                                                   AccountPlanStakeholder.RoleType

StakeholderStrength                                                   AccountPlanStakeholder.Strength

StartedByType                                                         ActionPlan.StartedByType

TaraSkipReasonEnum                                                    TerritoryAcctRcmdAction.SkipReason

TerritoryBusinessPlanStatus                                           TerritoryBusinessPlan.Status

TierTypes                                                             Formularyltem.TierType

TPAAffiliationRole                                                    TerrProvAffilAssignRule.AffiliationRole

UserAdInfoPrefCntry                                                   UserAdditionalInfo.PreferredCountry

VisitChannel                                                          ProviderVisit.Channel

VisitChannel                                                          ProviderVisitProdDetailing.ProviderVisitChannel

VisitChannel                                                          Visit.Channel

VisitPriority                                                         Visit.VisitPriority




## AFLS Platform Events

Use the ApplnFormAppealStsChgEvnt platform event to notify subscribers when the status of the Financial Assistance Program’s appeal
changes. Use the CareBnftVrfyRqstStsChgEvent platform event to notify subscribers when the status of care benefit verify request changes.
This platform event object is available within the AFLS platform.



## ApplnFormAppealStsChgEvnt

Notifies subscribers of changes to the status of an appeal filed against a Financial Assistance Program. This object is available in API
version 63.0 and later.
CareBnftVrfyRqstStsChgEvent
Notifies subscribers of changes to the status of a care benefit verify request. This object is available in API version 65.0 and later.



## ApplnFormAppealStsChgEvnt

Notifies subscribers of changes to the status of an appeal filed against a Financial Assistance Program. This object is available in API
version 63.0 and later.



## Supported Calls

create(), describeSObjects()

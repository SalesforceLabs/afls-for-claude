<!-- guide:dev-guide section:working-with-electronic-health-records pages:1482-1482 -->
# Working With Electronic Health Records

AFLS Overview                                                                               Working With Electronic Health Records




## Supported Calls

create(), describeSObjects()



## Special Access Rules

This object is available to users with Manage Pharmacy Benefits Verification and Health Cloud Starter (for AFLS) or Health
Cloud Foundation (for Health Cloud) permission set.



## Fields

Field                                 Details
EventCreationDateTime                 Type
dateTime
Properties
Create, Nillable
Description
The date and time when the event was created.

RecordIdentifier                      Type
string
Properties
Create
Description
The identifier of the associated care benefit verify request record.

Status                                Type
string
Properties
Create
Description
Specifies the status of a care benefit verify request.





## Working With Electronic Health Records

HL7 (Health Level Seven) is a standard for exchanging electronic health records (EHR). You can parse EHR data transmitted via HL7 data
messages and store it in Salesforce.
Salesforce is committed to interoperability and the use of standards to facilitate the exchange of health data. As a voting member of
HL7.org, Salesforce can share excerpts of HL7 standards, post the standards on Salesforce digital assets, and use HL7 organizational and
“Care Connected” logos. Here we reference some of the key data elements in the HL7 standards to facilitate mapping to the Salesforce
data model.

Note: Elements that aren't mapped here are not yet supported. We are continuing to map additional elements.

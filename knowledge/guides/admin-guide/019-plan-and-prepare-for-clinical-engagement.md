<!-- guide:admin-guide section:plan-and-prepare-for-clinical-engagement pages:771-775 -->
# Plan and Prepare for Clinical Engagement



consequences can occur if organizations differ in their interpretation of a patient’s data. To avoid this
scenario, the life sciences industry uses terminology systems that standardize the definitions of various
situations and clinical data. These systems consist of subunits that the industry terms Coding,
Codeable Concept, and Value Set.


The Clinical Data Model and FHIR

The Clinical data model is built to align with the Fast Healthcare Interoperability Resources (FHIR)
specification, which is an open API standard for the exchange of healthcare information. The FHIR
standard is defined by Health Level 7 (HL7), the organization that also defined the HL7 messaging
standard.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


The standard objects in the Clinical data model store all sorts of clinical data, including conditions,
medications, encounters, immunizations, procedures, and so on. The AFLS
implementation of FHIR aligns with FHIR v4.0.1.

To verify the FHIR (Fast Healthcare Interoperability Resources) R4-aligned clinical data model for Life
Sciences Cloud is enabled in your org, search for and then select FHIR R4 Support Settings under Life
Sciences Cloud in Setup. If the FHIR-Aligned Data Model setting is not enabled for your org, enable it
now.


The FHIR-Aligned Clinical Data Model

AFLS’s clinical data model maps closely to FHIR R4 specification, but with a few minor
differences.

- The new clinical data model supports most of the FHIR R4 attributes, except certain instances that
aren’t relevant for the typical AFLS user.
-    Entities like Identifier and Code Set have more attributes than their FHIR R4 counterparts. These extra
fields increase data usability across the Salesforce platform and support specific needs of certain
features in AFLS.
-    FHIR R4 typically defines zero-to-one, zero-to-many, one-to-one, or one-to-many values for each
attribute. However, the Salesforce platform doesn’t support one-to-many and zero-to-many values for
a field, except in multi-select picklists. Instead, Salesforce uses child objects that can create multiple
records that all reference the same parent record to achieve this type of logical zero/one-to-many
values. For instance, an encounter can have multiple providers participating in it. To support this
scenario, Salesforce has the Clinical Encounter Provider child object. This child object has records
representing each provider in an encounter, and each of these records reference the record of the

<!-- page:772 -->



encounter that these providers were a part of.


Supporting Clinical Data in AFLS

Clinical data that comes from EHR or other clinical systems is critical to the planning, execution, and
management of coordinated care plans for patients. Clinical data can be integrated with Salesforce using
several standard APIs to map messages from EHR systems into AFLS objects and fields.

The Clinical data model is built to align with the Fast Healthcare Interoperability Resources (FHIR)
specification. This data model supports easier and more straightforward clinical data integration from
other source systems. When devising an implementation strategy, you or your integration partner maps
messages from the electronic health records system to the correct AFLS object.

AFLS uses the following standard objects to manage patient data.


## Account

In AFLS, the account record for a patient is a person account, not an account
representing a business or an organization. Contacts and accounts that represent caregivers or
external healthcare providers are associated with the account through the patient care plan
(case record).



## Contact

In the Salesforce data model, contacts are the people associated with the patient, such as family
members and specialists who are outside of your organization. A contact must be related to an
account. When you set up and use Salesforce Experience Cloud, the Contact object supports
communication within the private patient site. Care team members are added as either external
contacts without site access or as Salesforce users and contacts, which give them access to the
patient site.



## User

AFLS includes internal Salesforce users and Experience Cloud users. Each user
type has different access to records and functions. Internal users have access to patient data,
when granted. Experience Cloud users don’t have access to patient data.



## Case

In AFLS, the care plan is a record type of Case. The case permission controls access
to the elements of the care plan, to the care team (Case Team), and to the communication
within the patient’s Experience site. All care team members are associated with the patient’s
contact record through the Case object.



## Problem Definition

Represents clinical or non-clinical health issues that a care plan must address.

<!-- page:773 -->




## Goal Assignment

Represents the intended objectives of carrying out a care plan.



## Task

Represents an activity, such as making a phone call, completing a survey, attending a medical
appointment, or other to-do items. Tasks can be directly related to a goal or problem on the care
plan, or even directly to the care plan itself.



## Standard objects in the Clinical data model

These standard objects hold patient data that comes from external EHR source systems. For
example, HealthCondition represents detailed information about conditions, problems, and
diagnoses recognized by a clinician. Objects in this data model are built to align with FHIR R4,
specifically FHIR v4.0.1.



Code Sets and Code Set Bundles

Having accurate information and standardized definitions is vital for the life sciences industry. Serious
consequences can occur if organizations differ in their interpretation of a patient’s data. To avoid this
scenario, the life sciences industry uses terminology systems that standardize the definitions of various
situations and clinical data. These systems consist of subunits that the industry terms Coding, Codeable
Concept, and Value Set.

In the AFLS implementation of the Clinical data model, coding is termed code set and
codeable concept is termed code set bundle. Code Set and Code Set Bundle are generic objects
designed to store a wider variety of standardized codes required by the industry. They are aligned with
FHIR R4.


## Codings, Codeable Concepts, and Value Sets

To work effectively with these entities, it’s important to know what they are first. These entities are
related to each other by way of hierarchies, concepts, or contexts.
Recommendations for Using Code Sets and Code Set Bundles
The type and range of codes required vary across organizations. The code requirements also depend
on the type of care and services organizations provide and on the terminology systems they prefer. As
such, AFLS doesn’t pre-populate these objects with any codes from terminology
systems.


Codings, Codeable Concepts, and Value Sets

To work effectively with these entities, it’s important to know what they are first. These entities are
related to each other by way of hierarchies, concepts, or contexts.

Codings relate to codeable concepts as a hierarchy. Basically, a codeable concept is a set of codings that
represent the same concept. However, a value set groups codings more loosely based on their context.
Let’s take a closer look at what these entities are and how they’re structured.

<!-- page:774 -->




Coding

A coding, or code set in AFLS, represents a specific concept in the context of the
terminology system that defines that concept. Multiple codings can represent the same real-world
concept. However, their form depends on the terminology systems that define them and the versions of
those systems. Codings consist of five components: Code, Display, System, Version, and User Selected.

Code: The symbol that represents the concept. This code can be a string of numbers or characters, and
not necessarily a word. If this attribute is absent in a coding, the terminology system has no defined code
to represent that coding’s concept. Consider a code as the form of a coding.

Display: The text that represents the meaning of the code and its concept.

System: The URI of the terminology system that defines the concept of a coding. There are many
terminology systems that the industry uses, like LOINC, SNOMED, RxNorm, ICD, and so on.

Version: The version of the terminology system that defines the coding. As mentioned earlier, the form a
coding takes can change across versions of the terminology system.

User Selected: The boolean value that specifies whether the code is explicitly chosen by a user, as
opposed to being selected by an automated algorithm. The expectation is that codings marked true for
this attribute are more likely to be more accurate. If there are multiple codings that represent the same
concept, codings marked true for this attribute tend to be more accurate. The AFLS
implementation calls this attribute Primary.

Here’s what a JSON sample for a coding looks like:



## <coding>

<system value="http://snomed.info/id"/>
<version value="International Release – 20130731"/>
<code value="389145006"/>
<display value="Allergic Asthma"/>
<primary value="true"/>
</coding>


The AFLS implementation of coding doesn't support hierarchies because the FHIR
definition of a coding doesn’t specify hierarchies. However, if your organization requires recording
hierarchies, you can do that by adding a self-reference field to the Code Set object.


Codeable Concept

A codeable concept represents a unique real-world concept that’s represented by codings. Codeable
concepts bind together codings from across systems and versions, with the binding factor being the
shared concept that those codings represent. For instance, let’s say that system 1 represents COVID-19 as
C19 in version 2.31 and as CVD2019 in version 1.13, and system 2 represents COVID-19 as C204. The

<!-- page:775 -->



codeable concept that represents the real-world concept of COVID-19 binds all three codings together.

The AFLS implementation of codeable concepts, called code set bundles, allow only 15
codings to be bound together while FHIR places no such constraint on codeable concepts.

Here’s a JSON sample for a codeable concept:


<codeableConcept>
<!-- SNOMED code -->
<coding>
<system value="http://snomed.info/id"/>
<version value="International Release – 20130731"/>
<code value="389145006"/>
<display value="Allergic Asthma"/>
<primary value="true"/>
</coding>
<!-- ICD code -->
<coding>
<system value="urn:oid:2.16.840.1.113883.6.42"/>
<version value="9"/>
<code value="493.00"/>
<display value="Extrinsic asthma - unspecified"/>
<primary value="false"/>
</coding>
<text value="Atopic Asthma"/>
</codeableConcept>



Value Set

A value set, like a codeable concept, binds together different codings. However, a value set is grouped by
the context of the codings that are bound together and isn’t a shared concept that aligns across
terminology systems. For instance, while a codeable concept binds together codes representing a
specific illness, a value set binds together code sets representing multiple illnesses.

AFLS hasn’t explicitly implemented value sets using any object or component. However, to
achieve a basic degree of grouping, you can group together code set records that have the same values
for the Code Set Type field.


Recommendations for Using Code Sets and Code Set Bundles

The type and range of codes required vary across organizations. The code requirements also depend on
the type of care and services organizations provide and on the terminology systems they prefer. As such,
AFLS doesn’t pre-populate these objects with any codes from terminology systems.

As an admin, it’s up to you to populate these objects with the codes your organization needs. As the

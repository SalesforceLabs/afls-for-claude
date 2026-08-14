<!-- guide:dev-guide section:apex-reference pages:1853-1853 -->
# Apex Reference

AFLS Overview                                                                                                          Apex Reference



Property Name          Type                   Description                                   Filter Group and       Available Version
Version
code                   String                 API response code.                            Small, 60.0            60.0

isSuccess              Boolean                Indicates whether the request was             Small, 60.0            60.0
successful (true) or not (false).

message                String                 Error message when the request fails.         Small, 60.0            60.0

workTypeLeadTimeMap Map<String,               Key value pairs of work type IDs and their    Big, 60.0              60.0
Integer>               corresponding lead times in days.




## Apex Reference

This Apex reference goes into detail about the built-in Apex classes, interfaces, methods, or enums for AFLS.
For Apex-related objects and SOAP API calls, see Objects and SOAP API Calls and Headers for Apex in the SOAP API Developer Guide.



## embeddedai Namespace

The embeddedai namespace provides classes and methods to manage and represent records and data in Apex to support
embedded AI features.
ConnectApi Namespace
The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect
REST API. Use Connect in Apex to create custom experiences in Salesforce.



## embeddedai Namespace

The embeddedai namespace provides classes and methods to manage and represent records and data in Apex to support embedded
AI features.
These are the classes in the embeddedai namespace.



## ApexMap Class

Create, clone, and convert string based key-value pairs to a JSON string format.
RecordApexRepresentation Class
Contains properties and a method to create a serializable representation of a record and its associated data for AI service integration
and data processing.



## ApexMap Class

Create, clone, and convert string based key-value pairs to a JSON string format.


Namespace
embeddedai

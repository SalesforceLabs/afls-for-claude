<!-- guide:dev-guide section:life-sciences-cloud-associated-objects pages:1430-1430 -->
# AFLS Associated Objects

AFLS Overview                                                                                   AFLS Associated Objects




## AFLS Associated Objects

This section provides a list of objects associated to AFLS standard objects with their standard fields.
Some fields may not be listed for some objects. To see the system fields for each object, see System Fields in the Object Reference for
Salesforce and Lightning Platform.
To verify the complete list of fields for an object, use a describe call from the API or inspect with an appropriate tool. For example, inspect
the WSDL or use a schema viewer.



## StandardObjectNameChangeEvent

A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events
using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing
record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations
or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.


Supported Calls
describeSObjects()



## Special Access Rules

- Not all objects may be available in your org. Some objects require specific feature settings and permissions to be enabled.
- For more special access rules, if any, see the documentation for the standard object. For example, for AccountChangeEvent, see the
special access rules for Account.



## Change Event Name

Change events are available for all custom objects and a subset of standard objects. The name of a change event is based on the name
of the corresponding object for which it captures the changes.
Standard Object Change Event Name
<Standard_Object_Name>ChangeEvent


## Example: AccountChangeEvent

Custom Object Change Event Name
<Custom_Object_Name>__ChangeEvent

Example: MyCustomObject__ChangeEvent



## Change Event Fields

The fields that a change event can include correspond to the fields on the associated parent Salesforce object, with a few exceptions.
For example, AccountChangeEvent fields correspond to the fields on Account.
The fields that a change event doesn’t include are:
- The IsDeleted system field.
- The SystemModStamp system field.

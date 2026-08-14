<!-- guide:dev-guide section:embeddedai-namespace pages:1854-1858 -->
# embeddedai Namespace

AFLS Overview                                                                                             embeddedai Namespace



## ApexMap Constructors

Learn more about the constructors available with the ApexMap class.
ApexMap Properties
ApexMap Methods
Create a copy of the ApexMap object and convert key-value pairs to string format.



## ApexMap Constructors

Learn more about the constructors available with the ApexMap class.
The ApexMap class includes these constructors.


ApexMap(key, value)
Initializes a new instance of the ApexMap class by assigning the specified key and value. This constructor creates a single key–value
entry that can be included in an embedded AI Apex map for passing contextual data to embedded AI logic.
ApexMap()
Initializes the ApexMap class.


ApexMap(key, value)
Initializes a new instance of the ApexMap class by assigning the specified key and value. This constructor creates a single key–value
entry that can be included in an embedded AI Apex map for passing contextual data to embedded AI logic.



## Signature

public ApexMap(String key, String value)

embeddedai.ApexMap, newinstance, [String, String], embeddedai.ApexMap


Parameters
key
Type: String
The unique identifier for an entry in the embedded AI Apex map. This key references and retrieves the associated value during
embedded AI processing.
value
Type: String
The data associated with the specified key in the embedded AI Apex map. This value stores the contextual information consumed
by embedded AI logic.


ApexMap()
Initializes the ApexMap class.

<!-- page:1855 -->

AFLS Overview                                                                                         embeddedai Namespace


Signature
public ApexMap()

embeddedai.ApexMap, newinstance, [], embeddedai.ApexMap




## ApexMap Properties

These are the properties for ApexMap.


key
Represents key of the key-value pair. This property is used to store the unique ID or name of the data.
value
Represents value of the key-value pair. This property is used to store the data associated with the key.


key
Represents key of the key-value pair. This property is used to store the unique ID or name of the data.



## Signature

public String key {get; set;}

embeddedai.ApexMap, key


Property Value
Type: String



## value

Represents value of the key-value pair. This property is used to store the data associated with the key.



## Signature

public String value {get; set;}

embeddedai.ApexMap, value


Property Value
Type: String



## ApexMap Methods

Create a copy of the ApexMap object and convert key-value pairs to string format.
These are the methods for ApexMap.


toString()
Returns a string representation of the ApexMap object.

<!-- page:1856 -->

AFLS Overview                                                                                               embeddedai Namespace


toString()
Returns a string representation of the ApexMap object.



## Signature

public String toString()

embeddedai.ApexMap, toString, [], String


Return Value
Type: String



## RecordApexRepresentation Class

Contains properties and a method to create a serializable representation of a record and its associated data for AI service integration and
data processing.


Namespace
embeddedai



## RecordApexRepresentation Constructors

Learn more about the constructors available with the RecordApexRepresentation class.
RecordApexRepresentation Properties
RecordApexRepresentation Methods
Create detailed, hierarchical record objects and convert them to a custom JSON string for structured AI input.



## RecordApexRepresentation Constructors

Learn more about the constructors available with the RecordApexRepresentation class.
The RecordApexRepresentation class includes these constructors.


RecordApexRepresentation(objectType, recordData, relatedRecordData)
Initializes a new instance of the RecordApexRepresentation class with the specified object type, primary record data, and related
record data. This constructor represents a structured record and its relationships for consumption by embedded AI logic.
RecordApexRepresentation()
Initializes the RecordApexRepresentation class.


RecordApexRepresentation(objectType, recordData, relatedRecordData)
Initializes a new instance of the RecordApexRepresentation class with the specified object type, primary record data, and related record
data. This constructor represents a structured record and its relationships for consumption by embedded AI logic.

<!-- page:1857 -->

AFLS Overview                                                                                             embeddedai Namespace



## Signature

public RecordApexRepresentation(String objectType, List<embeddedai.ApexMap> recordData,
List<embeddedai.RecordApexRepresentation> relatedRecordData)

embeddedai.RecordApexRepresentation, newinstance, [String, List<embeddedai.ApexMap>,
List<embeddedai.RecordApexRepresentation>], embeddedai.RecordApexRepresentation


Parameters
objectType
Type: String
The object type represented by this record (for example, Account, Case, or a custom object). This value defines the context in which
the record data is interpreted by embedded AI processing.
recordData
Type: List<embeddedai.ApexMap on page 1849>
The field-level data for the primary record as a collection of key–value pairs. Each ApexMap entry corresponds to a field name and
its associated value used to construct the record context.
relatedRecordData
Type: List<embeddedai.RecordApexRepresentation on page 1852>
Related records associated with the primary record. Each entry represents a related object and its data, enabling hierarchical or
relational record context to be passed to embedded AI logic.


RecordApexRepresentation()
Initializes the RecordApexRepresentation class.



## Signature

public RecordApexRepresentation()

embeddedai.RecordApexRepresentation, newinstance, [], embeddedai.RecordApexRepresentation




## RecordApexRepresentation Properties

The following are properties for RecordApexRepresentation.



## objectType

Stores the type of the object.
recordData
Stores a list of objects, where each object holds a key-value pair.
relatedRecordData
Stores a list that contains a child or related records associated with the record data.



## objectType

Stores the type of the object.

<!-- page:1858 -->

AFLS Overview                                                                                           embeddedai Namespace



## Signature

public String objectType {get; set;}

embeddedai.RecordApexRepresentation, objectType


Property Value
Type: String



## recordData

Stores a list of objects, where each object holds a key-value pair.



## Signature

public List<embeddedai.ApexMap> recordData {get; set;}

embeddedai.RecordApexRepresentation, recordData



## Property Value

Type: List<embeddedai.ApexMap>



## relatedRecordData

Stores a list that contains a child or related records associated with the record data.



## Signature

public List<embeddedai.RecordApexRepresentation> relatedRecordData {get; set;}

embeddedai.RecordApexRepresentation, relatedRecordData



## Property Value

Type: List<embeddedai.RecordApexRepresentation>



## RecordApexRepresentation Methods

Create detailed, hierarchical record objects and convert them to a custom JSON string for structured AI input.
The following are methods for RecordApexRepresentation.


toRecordApexRep(jsonString)
Converts a JSON-formatted string into a RecordApexRepresentation instance. This method parses the provided JSON and constructs
a structured record representation that can be used by embedded AI logic.
toString()
Returns a structured JSON string representation of the RecordApexRepresentation object and its nested related records.

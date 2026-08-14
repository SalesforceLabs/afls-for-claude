<!-- guide:dev-guide section:connectapi-namespace pages:1859-1869 -->
# ConnectApi Namespace

AFLS Overview                                                                                          ConnectApi Namespace


toRecordApexRep(jsonString)
Converts a JSON-formatted string into a RecordApexRepresentation instance. This method parses the provided JSON and constructs a
structured record representation that can be used by embedded AI logic.



## Signature

public static embeddedai.RecordApexRepresentation toRecordApexRep(String jsonString)

embeddedai.RecordApexRepresentation, toRecordApexRep, [String],
embeddedai.RecordApexRepresentation


Parameters
jsonString
Type: String
The JSON-formatted string containing record data and related record information to be converted into a RecordApexRepresentation
object.



## Return Value

Type: embeddedai.RecordApexRepresentation
Returns a RecordApexRepresentation instance populated with the data parsed from the provided JSON string.


toString()
Returns a structured JSON string representation of the RecordApexRepresentation object and its nested related records.



## Signature

public String toString()

embeddedai.RecordApexRepresentation, toString, [], String


Return Value
Type: String



## ConnectApi Namespace

The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST
API. Use Connect in Apex to create custom experiences in Salesforce.
For information about working with the ConnectApi classes, see Connect in Apex.



## LifeSciEmailTemplate Methods

These are the LifeSciEmailTemplate methods for AFLS.
LifeSciPresentation Methods
These are the LifeSciPresentation methods for AFLS.

<!-- page:1860 -->

AFLS Overview                                                                                                ConnectApi Namespace



## LifeSciPresPageProductGuidance Methods

These are the LifeSciPresPageProductGuidance methods for AFLS.
Input Classes
These are the Apex input classes for AFLS.
Output Classes
These are the Apex output classes for AFLS.
ConnectApi Enums
Enums specific to the ConnectApi namespace.



## LifeSciEmailTemplate Methods

These are the LifeSciEmailTemplate methods for AFLS.


createEmailTemplate(emailTemplateInput)
Create an email template with the provided metadata.
updateEmailTemplate(emailTemplateInput)
Update an existing email template with the provided metadata.


createEmailTemplate(emailTemplateInput)
Create an email template with the provided metadata.


API Version
65.0


Requires Chatter
No



## Signature

public static ConnectApi.GenericResponseOutputRepresentation
createEmailTemplate(ConnectApi.EmailTemplateInputRepresentation emailTemplateInput)


Parameters
emailTemplateInput
Type: ConnectApi.EmailTemplateInputRepresentation
Input representation that contains the metadata for the email template. The fileId field is not accepted in this Apex representation.



## Return Value

Type: ConnectApi.GenericResponseOutputRepresentation

<!-- page:1861 -->

AFLS Overview                                                        ConnectApi Namespace



## Example

ConnectApi.EmailTemplateInput input = new ConnectApi.EmailTemplateInput();
input.name = 'Sample Email Template';
input.id = 'email-template-id';
input.emailSubject = 'Email Subject';
input.description = 'Email template description';
input.contentDocumentId = '069SB0000047U0mYAE';
input.activatedDate = Date.today();
input.deactivatedDate = Date.today().addDays(365);
input.senderType = 'SalesRep';
input.senderEmailFieldAPIName = 'noreply@company.com';
input.replyToType = 'SalesRep';
input.replyToEmailAddress = 'support@company.com';
input.bccEmailIdList = 'admin@company.com';
input.isActive = true;
input.isDefaultAutoEmailTemplate = false;
input.isSubjectLineEditable = true;
input.shouldIgnoreEmailConsent = false;
input.surveyId = '0KdYH0000000VyH0AU';
input.productId = '1KeYH0000001j2m0AA';
input.communicationSubscriptionId = 'comm-sub-source-system-id';
input.automatedEmailContextType = 'ProviderVisit';
input.automatedEmailActionType = 'Create';
input.languages = new List<String>();
input.languages.add('es_AD');
input.languages.add('es');
input.topics = new List<String>();
input.topics.add('Onboarding');
input.topics.add('User Engagement');
input.customFields = new List<ConnectApi.CustomFieldRepresentation>();
ConnectApi.CustomFieldRepresentation customField1 = new
ConnectApi.CustomFieldRepresentation();
customField1.fieldName = 'Email_Template_Category__c';
customField1.fieldValue = 'Product Information';
input.customFields.add(customField1);
ConnectApi.CustomFieldRepresentation customField2 = new
ConnectApi.CustomFieldRepresentation();
customField2.fieldName = 'Priority__c';
customField2.fieldValue = 'High';
input.customFields.add(customField2);
System.debug(ConnectApi.LifeSciEmailTemplate.createEmailTemplate(input));



updateEmailTemplate(emailTemplateInput)
Update an existing email template with the provided metadata.


API Version
65.0


Requires Chatter
No

<!-- page:1862 -->

AFLS Overview                                                                                               ConnectApi Namespace



## Signature

public static ConnectApi.GenericResponseOutputRepresentation
updateEmailTemplate(ConnectApi.EmailTemplateInputRepresentation emailTemplateInput)


Parameters
emailTemplateInput
Type: ConnectApi.EmailTemplateInputRepresentation
Input representation that contains the metadata for the email template. The fileId field is not accepted in this Apex representation.



## Return Value

Type: ConnectApi.GenericResponseOutputRepresentation



## Example

ConnectApi.EmailTemplateInput input = new ConnectApi.EmailTemplateInput();
input.name = 'Sample Email Template Updated';
input.id = 'email-template-id';
input.emailSubject = 'Email Subject Updated';
input.description = 'Email template description Updated';
input.contentDocumentId = '069SB0000047U0mYAE';
input.activatedDate = Date.today();
input.deactivatedDate = Date.today().addDays(365);
input.senderType = 'PredefinedEmail';
input.senderEmailFieldAPIName = 'noreply@company.com';
input.replyToType = 'PredefinedEmail';
input.replyToEmailAddress = 'support@company.com';
input.bccEmailIdList = 'admin@company.com';
input.isActive = true;
input.isDefaultAutoEmailTemplate = false;
input.isSubjectLineEditable = true;
input.shouldIgnoreEmailConsent = false;
input.productId = '01t000000000001';
input.surveyId = 'survey-001';
input.communicationSubscriptionId = 'comm-sub-001';
input.automatedEmailContextType = 'ProviderVisit';
input.automatedEmailActionType = 'Create';
input.attachmentObjectTypes = new List<String>();
input.attachmentObjectTypes.add('Account');
input.languages = new List<String>();
input.languages.add('es_AD');
input.languages.add('es');
input.topics = new List<String>();
input.topics.add('Onboarding');
input.topics.add('User Engagement');
System.debug(ConnectApi.LifeSciEmailTemplate.updateEmailTemplate(input));




## LifeSciPresentation Methods

These are the LifeSciPresentation methods for AFLS.

<!-- page:1863 -->

AFLS Overview                                                                                                     ConnectApi Namespace


createPresentationContent(presentationContentInput)
Create new presentation content with the provided metadata.
updatePresentationContent(presentationContentInput)
Update existing presentation content with the provided metadata.


createPresentationContent(presentationContentInput)
Create new presentation content with the provided metadata.


API Version
65.0


Requires Chatter
No



## Signature

public static ConnectApi.GenericResponseOutputRepresentation
createPresentationContent(ConnectApi.PresentationContentInputRepresentation
presentationContentInput)



## Parameters

presentationContentInput
Type: ConnectApi.PresentationContentInputRepresentation
Input representation that contains the metadata for the presentation content. The fileId field is not accepted in this Apex representation.



## Return Value

Type: ConnectApi.GenericResponseOutputRepresentation



## Example

ConnectApi.PresentationContentInputRepresentation input = new
ConnectApi.PresentationContentInputRepresentation();
input.contentType = 'PRESENTATION_PDF';
ConnectApi.PresentationInput presentation = new ConnectApi.PresentationInput();
presentation.name = 'PDF Presentation Name';
presentation.id = 'pdf-presentation-id';
presentation.enableDoubleTapZoom = true;
presentation.enablePinchZoom = true;
presentation.playerGesture = 'SWIPEUP';
presentation.activationDate = Date.today();
presentation.deactivationDate = Date.today().addDays(365);
input.presentation = presentation;
input.pages = new List<ConnectApi.PresentationPageInput>();
ConnectApi.PresentationPageInput page1 = new ConnectApi.PresentationPageInput();
page1.pageNumber = 1;

<!-- page:1864 -->

AFLS Overview                                                                                                     ConnectApi Namespace



page1.name = 'PDF Page 1 Name';
page1.id = 'pdf-page-name-1';
page1.mandatory = true;
page1.contentDocumentId = '069SB0000048cPDYAY';
page1.activationDate = Date.today();
page1.deactivationDate = Date.today().addDays(365);
ConnectApi.ProductGuidanceRepresentation product1 = new
ConnectApi.ProductGuidanceRepresentation();
product1.productId = '1KeYH0000001j2m0AA';
product1.guidanceIds = new List<String>();
product1.guidanceIds.add('guidance-id-1');
product1.guidanceIds.add('guidance-id-2');
page1.products = new List<ConnectApi.ProductGuidanceRepresentation>();
page1.products.add(product1);
input.pages.add(page1);
ConnectApi.PresentationPageInput page2 = new ConnectApi.PresentationPageInput();
page2.pageNumber = 2;
page2.name = 'PDF Page 2 Name';
page2.id = 'pdf-page-name-2';
page2.mandatory = true;
page2.activationDate = Date.today();
page2.deactivationDate = Date.today().addDays(365);
input.pages.add(page2);
System.debug(ConnectApi.LifeSciPresentation.createPresentationContent(input));



updatePresentationContent(presentationContentInput)
Update existing presentation content with the provided metadata.


API Version
65.0


Requires Chatter
No



## Signature

public static ConnectApi.GenericResponseOutputRepresentation
updatePresentationContent(ConnectApi.PresentationContentInputRepresentation
presentationContentInput)



## Parameters

presentationContentInput
Type: ConnectApi.PresentationContentInputRepresentation
Input representation that contains the metadata for the presentation content. The fileId field is not accepted in this Apex representation.



## Return Value

Type: ConnectApi.GenericResponseOutputRepresentation

<!-- page:1865 -->

AFLS Overview                                                                 ConnectApi Namespace



## Example

ConnectApi.PresentationContentInputRepresentation input = new
ConnectApi.PresentationContentInputRepresentation();
input.contentType = 'PRESENTATION_PDF';
ConnectApi.PresentationInput presentation = new ConnectApi.PresentationInput();
presentation.name = 'Updated PDF Presentation Name';
presentation.id = 'pdf-presentation-id';
presentation.enableDoubleTapZoom = false;
presentation.enablePinchZoom = false;
presentation.playerGesture = 'TAPBOTTOM';
presentation.activationDate = Date.today().addDays(1);
presentation.deactivationDate = Date.today().addDays(400);
input.presentation = presentation;
input.pages = new List<ConnectApi.PresentationPageInput>();
ConnectApi.PresentationPageInput page1 = new ConnectApi.PresentationPageInput();
page1.pageNumber = 1;
page1.name = 'Updated PDF Page 1 Name';
page1.id = 'pdf-page-name-1';
page1.mandatory = true;
page1.contentDocumentId = '069SB0000048cPEYBZ';
page1.activationDate = Date.today().addDays(1);
page1.deactivationDate = Date.today().addDays(400);
input.pages.add(page1);
ConnectApi.PresentationPageInput page2 = new ConnectApi.PresentationPageInput();
page2.pageNumber = 2;
page2.name = 'Updated PDF Page 2 Name';
page2.id = 'pdf-page-name-2';
page2.mandatory = false;
page2.activationDate = Date.today().addDays(1);
page2.deactivationDate = Date.today().addDays(400);
input.pages.add(page2);
System.debug(ConnectApi.LifeSciPresentation.updatePresentationContent(input));




## LifeSciPresPageProductGuidance Methods

These are the LifeSciPresPageProductGuidance methods for AFLS.


createPresPageProductGuidance(pageProductInput)
Create a new association between products and guidance with a presentation page.
deletePresPageProductGuidance(pageProductInput)
Delete the association between a presentation page and products or guidances.


createPresPageProductGuidance(pageProductInput)
Create a new association between products and guidance with a presentation page.


API Version
65.0

<!-- page:1866 -->

AFLS Overview                                                                                              ConnectApi Namespace


Requires Chatter
No



## Signature

public static ConnectApi.GenericResponseOutputRepresentation
createPresPageProductGuidance(ConnectApi.PageProductInputRepresentation pageProductInput)


Parameters
pageProductInput
Type: ConnectApi.PageProductInputRepresentation
Input representation that contains the presentation page ID and a list of associated products and guidances.



## Return Value

Type: ConnectApi.GenericResponseOutputRepresentation



## Example

ConnectApi.ProductContentInputRepresentation input = new
ConnectApi.ProductContentInputRepresentation();
input.pageProducts = new List<ConnectApi.PresentationPageProductRepresentation>();
ConnectApi.PresentationPageProductRepresentation pageProduct = new
ConnectApi.PresentationPageProductRepresentation();
pageProduct.id = 'pdf-page-name-1';
pageProduct.products = new List<ConnectApi.ProductGuidanceRepresentation>();
ConnectApi.ProductGuidanceRepresentation product = new
ConnectApi.ProductGuidanceRepresentation();
product.productId = '1KeYH0000001j2m0AA';
product.guidanceIds = new List<String>();
product.guidanceIds.add('guidance-id-1');
product.guidanceIds.add('guidance-id-2');
pageProduct.products.add(product);
input.pageProducts.add(pageProduct);
System.debug(ConnectApi.LifeSciPresPageProductGuidance.createPresPageProductGuidance(input));



deletePresPageProductGuidance(pageProductInput)
Delete the association between a presentation page and products or guidances.


API Version
65.0


Requires Chatter
No

<!-- page:1867 -->

AFLS Overview                                                                                            ConnectApi Namespace



## Signature

public static ConnectApi.GenericResponseOutputRepresentation
deletePresPageProductGuidance(ConnectApi.PageProductInputRepresentation pageProductInput)


Parameters
pageProductInput
Type: ConnectApi.PageProductInputRepresentation
Input representation that contains the presentation page ID and a list of products and guidances to delete.



## Return Value

Type: ConnectApi.GenericResponseOutputRepresentation



## Example

ConnectApi.ProductContentInputRepresentation input = new
ConnectApi.ProductContentInputRepresentation();
input.pageProducts = new List<ConnectApi.PresentationPageProductRepresentation>();
ConnectApi.PresentationPageProductRepresentation pageProduct = new
ConnectApi.PresentationPageProductRepresentation();
pageProduct.id = 'pdf-page-name-1';
pageProduct.products = new List<ConnectApi.ProductGuidanceRepresentation>();
ConnectApi.ProductGuidanceRepresentation product = new
ConnectApi.ProductGuidanceRepresentation();
product.productId = '1KeYH0000001j2m0AA';
product.guidanceIds = new List<String>();
product.guidanceIds.add('guidance-id-1');
product.guidanceIds.add('guidance-id-2');
pageProduct.products.add(product);
input.pageProducts.add(pageProduct);
System.debug(ConnectApi.LifeSciPresPageProductGuidance.deletePresPageProductGuidance(input));




## Input Classes

These are the Apex input classes for AFLS.



## ConnectApi.EmailTemplateInputRepresentation

Input representation for creating or updating an email template.
ConnectApi.PageProductInputRepresentation
Input representation for creating or deleting product guidance associations on a presentation page.
ConnectApi.PresentationContentInputRepresentation
Input representation for creating or updating presentation content.



## ConnectApi.EmailTemplateInputRepresentation

Input representation for creating or updating an email template.

<!-- page:1868 -->

AFLS Overview                                                                                              ConnectApi Namespace



Property Name              Type                      Description                                           Available Version
activatedDate              Date                      Activation date for the email template.               65.0

attachmentObjectTypes String                         String representing the attachment object types.      65.0

automatedEmailActionType String                      Action type for the automated email.                  65.0

automatedEmailContextType String                     Context type for the automated email.                 65.0

bccEmailIdList             String                    List of BCC email IDs.                                65.0

communicationSubscriptionId String                   ID of the communication subscription associated       65.0
with the email template.

contentDocumentId String                             ID of the Content Document of the email template. 65.0

customFields               Object                    Custom fields for the email template.                 65.0

deactivatedDate            Date                      Deactivation date for the email template.             65.0

description                String                    Description of the email template.                    65.0

emailSubject               String                    Subject of the email template.                        65.0

id                         String                    ID of the email template.                             65.0

isActive                   Boolean                   Indicates if the email template is active.            65.0

isDefaultAutoEmailTemplate Boolean                   Indicates if the email template is a default automated 65.0
email template.

isSubjectLineEditable Boolean                        Indicates whether the subject line is editable.       65.0

languages                  List<String>              List of languages for the email template.             65.0

name                       String                    Name of the email template.                           65.0

productId                  String                    ID of the product associated with the email template. 65.0

replyToEmailAddress String                           Reply-to email address.                               65.0

replyToType                String                    Reply-to type for the email template.                 65.0

senderEmailFieldAPIName String                       API name of the sender's email field.                 65.0

senderType                 String                    Sender type for the email template.                   65.0

shouldIgnoreEmailConsent Boolean                     Indicates whether email consent should be ignored. 65.0

surveyId                   String                    ID of the survey associated with the email template. 65.0

topics                     List<String>              List of topics associated with the email template.    65.0




## ConnectApi.PageProductInputRepresentation

Input representation for creating or deleting product guidance associations on a presentation page.

<!-- page:1869 -->

AFLS Overview                                                                                                          ConnectApi Namespace



Property Name              Type                           Description                                                   Available Version
pageProducts              ts<iLConnectApi.PageProductRepresentation> List of presentation pages and their product and   65.0
guidance associations.




## ConnectApi.PresentationContentInputRepresentation

Input representation for creating or updating presentation content.

Property Name              Type                           Description                                                   Available Version
contentType                String                         Type of content, such as:                                     65.0
-    PRESENTATION_PDF
-    PRESENTATION_ZIP
-    PRESENTATION_PAGE

pages                      sLti<ConnectApi.PageRepresentation> List of presentation pages and their associated          65.0
metadata.

presentation               ConnectApi.PresentationRepresentation Representation of the presentation, including its      65.0
name, ID, and other properties.




## Output Classes

These are the Apex output classes for AFLS.



## ConnectApi.GenericResponseOutputRepresentation

Output representation for a generic response from a Connect API call.



## ConnectApi.GenericResponseOutputRepresentation

Output representation for a generic response from a Connect API call.

Property Name              Type                           Description                                                   Available Version
isSuccess                  Boolean                        Indicates if the API call was successful.                     65.0

errors                     List<String>                   List of errors encountered during the API call.               65.0

jobId                      String                         ID of the asynchronous processing job, if applicable. 65.0

message                    String                         Message describing the result of the API call.                65.0




## ConnectApi Enums

Enums specific to the ConnectApi namespace.
ConnectApi enums inherit all properties and methods of Apex enums.
Enums are not versioned. Enum values are returned in all API versions. Clients should handle values they don't understand gracefully.

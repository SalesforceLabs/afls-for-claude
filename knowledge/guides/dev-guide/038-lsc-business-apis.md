<!-- guide:dev-guide section:life-sciences-cloud-business-apis pages:1606-1606 -->
# Life Sciences Cloud (LSC) Business APIs

LSC Overview                                                                                       LSC Business APIs



## Table 52: XTN - Salesforce

XTN                               Salesforce Field                   Type                               Notes
XTN.1 - Telephone Number          ContactPointPhone.Telephone Phone                                     N/A
Number

XTN.2 - Telecommunication Use ContactPointPhone                      Picklist                           N/A
Code                          .UsageType

ContactPointEmail                  Picklist                           N/A
.UsageType

XTN.3 - Telecommunication         ContactPointPhone                  Picklist                           N/A
Equipment Type                    .PhoneType

XTN.4 - Email Address             ContactPointEmail                  Email                              N/A
.EmailAddress

XTN.6 - Area/City Code            ContactPointPhone                  String                             Some systems may break down
.AreaCode                                                             the phone number into multiple
components, such as country
code, area code, local number,
extension, and so on. In such
cases, the full number may have
to be assembled.

XTN.8 - Extension                 ContactPointPhone                  String                             N/A
.ExtensionNumber




## LSC Business APIs

You can access LSC Business APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST
APIs.
To understand the architecture, authentication, rate limits, and how the requests and responses work, see Connect REST API Developer
Guide



## Resources

Use these resources of LSC Business APIs to enhance your Salesforce implementation or integrate with other
applications.
Request Bodies
This section lists the request bodies for LSC Business APIs. The query parameters for an endpoint are listed along with
each resource.
Response Bodies
A resource can return a response body in either JSON or XML format.


SEE ALSO:
Connect REST API Developer Guide: Introduction

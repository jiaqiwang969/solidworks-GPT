---
title:  管理自定义域名的电子邮件
caption: 电子邮件
---
 设置和管理自定义域名的电子邮件的指南（例如配置电子邮件转发或使用托管选项）
labels: [电子邮件,电子邮件转发]
---
## 配置电子邮件转发

如果您拥有在GoDaddy或Google Domains等注册商注册的域名，您可能希望使用该域名的电子邮件来发送和接收消息（例如info@mydomain.com）。使用自定义域名为您的电子邮件提供更专业的外观，而不是使用免费服务（例如mydomaininfo@gmail.com）。

大多数注册商提供使用自定义域名托管电子邮件的选项，但在大多数情况下，这些选项并不免费，价格根据使用情况、空间和支持安排的不同，从几美元到几十美元每月每封电子邮件不等。

然而，大多数注册商提供数十个或数百个电子邮件的免费转发服务。因此，您仍然可以使用您喜欢的电子邮件服务（包括免费服务，如Gmail或Outlook）来托管您的电子邮件，但使用转发和电子邮件别名来自定义您的电子邮件地址，以获得自定义域名。

下面的视频演示了如何使用Gmail和托管在GoDaddy上的域名设置电子邮件转发和别名。

{% youtube { id: rqOOnlTUuAw } %}

1. [设置GoDaddy电子邮件转发](/docs/codestack/hosting/email/godaddy-email-forwarding)。如视频所述，由GoDaddy转发的电子邮件来自*secureserver.net*（步骤1），这些电子邮件未加密，导致警告和漏洞。为了克服这个限制，跳过此步骤并转到步骤2，否则继续到步骤4。
2. [设置Google Domains电子邮件转发](/docs/codestack/hosting/email/googledomains-email-forwarding)
3. [在Gmail中设置电子邮件别名](/docs/codestack/hosting/email/setup-gmail-email-aliases)
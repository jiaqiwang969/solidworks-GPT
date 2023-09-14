---
title: 使用API为SOLIDWORKS开发C++、C#、VB.NET插件
caption: 插件
description: 说明如何在SOLIDWORKS中使用插件的示例和文章
---
插件是SOLIDWORKS的进程内扩展，可以在所有应用程序类型中提供最佳性能优势。插件是COM对象，必须在SOLIDWORKS API中实现[ISwAddin](https://help.solidworks.com/2012/english/api/swpublishedapi/solidworks.interop.swpublished~solidworks.interop.swpublished.iswaddin.html)接口。

插件可以使用任何兼容COM的语言进行开发：C++、C#、VB.NET、VB6、Managed C++。

插件可以在SOLIDWORKS菜单的Tools->Add-Ins对话框中找到，并可以选择性地启用或禁用。

大多数SOLIDWORKS合作伙伴产品以及SOLIDWORKS标准版、专业版和高级版中的一些产品都是作为插件应用程序开发的，而不是内置应用程序。

插件可以监视SOLIDWORKS应用程序和文档的完整生命周期。插件可以访问所有可用的SOLIDWORKS API，而宏和独立应用程序则有一些限制，因为其中一些API可能不可用。
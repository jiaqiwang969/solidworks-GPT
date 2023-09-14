---
title: 使用 SOLIDWORKS Document Manager API 处理装配文档
caption: 装配
description: 使用 Document Manager API 处理装配的示例集合
---
与常规的 SOLIDWORKS API 不同，Document Manager 并没有为装配文档提供特定的接口，而是应该由 [ISwDMDocument](https://help.solidworks.com/2016/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument.html) 和 [ISwDMConfiguration2](https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMConfiguration2.html) 接口进行管理。

这些接口中的一些方法仅适用于装配文档，例如 [ISwDMConfiguration2::GetComponents](https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmconfiguration2~getcomponents.html) 或 [ISwDMDocument8::GetComponentCount](https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmdocument8~getcomponentcount.html)。

建议使用 [ISwDMDocument::FullName](https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument~FullName.html) SOLIDWORKS Document Manager API 获取完整路径，并将其扩展名与 .sldasm 进行匹配，以验证文档是否为装配。

本节包含使用 Document Manager 处理装配文档的示例和宏。
---
title: 使用SOLIDWORKS API管理模型中的OLE对象
caption: OLE对象
description: 这是一个包含宏和示例的集合，演示了如何使用SOLIDWORKS API处理不同的嵌入式OLE对象（设计表、附件等）
sidebar_position: 2
labels: [ole, embeding]
---
对象链接和嵌入（OLE）是一种微软技术，允许将第三方应用程序对象插入到文档中。在SOLIDWORKS中，OLE对象用于表示设计表、附件以及直接拖放到文档中的任何文件。

这些对象通常可以直接从宿主环境中操作。例如，嵌入的Excel文件可以在不退出SOLIDWORKS窗口的情况下进行修改。

OLE对象通常与SOLIDWORKS文件一起保存，并且可以通过调整大小、删除或直接在图形区域中使用来进行操作。

SOLIDWORKS API通过[ISwOLEObject](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISwOLEObject.html)接口提供对OLE对象的访问。可以使用[IModelDocExtension](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension.html)接口的API方法枚举、创建和删除对象。

本节包含了使用SOLIDWORKS API在文档中操作OLE对象的宏和示例。
---
title: 通过API管理SOLIDWORKS文档
caption: 文档
description: 使用SOLIDWORKS API关闭、打开、遍历文档的示例
labels: [documents]
---
SOLIDWORKS文档在SOLIDWORKS API中以[IModelDoc2](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html)接口表示。

SOLIDWORKS允许同时打开和保持活动多个文档。此外，文档可能包含嵌入的文档，例如装配体通常包含其他装配体或作为组件链接的零件，绘图引用底层文档以加载绘图视图，零件也可以包含嵌入的零件。

请注意，文档可以是不可见的（例如在装配体中加载），但仍加载到内存中，并且可以从API方法中遍历和访问。

本节包含使用SOLIDWORKS API管理文档（枚举、关闭、激活、打开、识别类型）的代码示例和宏。
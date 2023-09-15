---
title: 使用SOLIDWORKS API自动化装配组件
caption: 组件
description: 用于在SOLIDWORKS装配中处理组件的文章和代码示例集合
labels: [装配, 组件]
sidebar_position: 1
---
SOLIDWORKS装配中的组件是装配中模型文档（[IModelDoc2](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html)）的实例。

可以通过SOLIDWORKS API中的[IComponent2](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IComponent2.html)接口来自动化处理组件。

对组件的主要操作包括但不限于：

* 变换
* 配合
* 上下文编辑
* BOM组成

可以通过[IComponent2::GetModelDoc2](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getmodeldoc2.html) SOLIDWORKS API方法获取组件的底层文档指针。对于被抑制或轻量化的组件，此方法返回null。请参考[获取轻量化组件的模型文档](/docs/codestack/solidworks-api/document/assembly/components/lightweight-get-model-doc/)以获取演示如何检索所有类型组件的指针的代码示例。

请浏览本节以获取自动化装配和组件的代码示例和宏。
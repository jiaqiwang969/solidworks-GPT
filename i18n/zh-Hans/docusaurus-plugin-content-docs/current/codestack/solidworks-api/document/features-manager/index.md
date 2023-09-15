---
title:  使用SOLIDWORKS API自动化特征管理树
caption: 特征管理器
---
 通过SOLIDWORKS API自动化特征创建的指南集合
sidebar_position: 4
image: feature-manager-api.png
---
![通过API自动化创建特征](feature-manager-api.png)

SOLIDWORKS API可以通过[IFeatureManager](https://help.solidworks.com/2013/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager.html)接口创建特征并自动化特征管理树，该接口可以通过[IModelDoc2::FeatureManager](https://help.solidworks.com/2013/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~featuremanager.html)属性访问。

每个单独的特征可以使用不同的方法创建。请参考SOLIDWORKS API帮助文档中的方法列表。或者，您可以在创建特征时记录宏以捕获所需的方法。

还可以通过实现自定义[宏特征](https://help.solidworks.com/2013/english/api/sldworksapiprogguide/macro_features/overview_of_macro_features.htm)来扩展标准SOLIDWORKS特征的范围。这将具有与任何标准特征相同的外观和感觉，并允许：

* 修改或添加实体
* 添加依赖特征并根据需要重新生成几何图形
* 添加尺寸
* 存储自定义参数

特征由[IFeature](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html) SOLIDWORKS API接口表示。特征有两个扩展对象：

* 通过[IFeature::GetSpecificFeature2](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetSpecificFeature2.html)访问的特定特征表示此特征的特定方法和属性的集合（例如，[ISketch](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketch_members.html)是2D和3D草图的特定特征）。
* 通过[IFeature::GetDefinition](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~getdefinition.html)访问的特征定义表示特征参数（即由用户通过属性管理器页面控制的参数）。修改特征参数必须通过[IFeature::ModifyDefinition](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~modifydefinition.html)方法应用。

请参考[识别特征](identify-feature)示例，了解一个辅助方法，可用于查找特征定义和特定类型的接口。
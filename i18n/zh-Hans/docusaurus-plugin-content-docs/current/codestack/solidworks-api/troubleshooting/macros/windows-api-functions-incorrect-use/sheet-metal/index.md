---
title: 使用SOLIDWORKS API自动化处理钣金零件
caption: 钣金
description: 使用SOLIDWORKS API来操作钣金特征
sidebar_position: 10
labels: [钣金, 弯曲, 折叠]
---
SOLIDWORKS API提供了许多方法和接口，用于操作零件文档中的钣金特征：[IBaseFlangeFeatureData](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData.html)，[IBendsFeatureData](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibendsfeaturedata_members.html)，[ISketchedBendFeatureData](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchedbendfeaturedata.html)等等。

通过调用相应的钣金特征上的[IFeature::GetDefinition](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetDefinition.html) SOLIDWORKS API，可以检索所有特定的特征数据。

浏览本节以查找有关在SOLIDWORKS中自动化和增强钣金功能的有用宏和代码示例。
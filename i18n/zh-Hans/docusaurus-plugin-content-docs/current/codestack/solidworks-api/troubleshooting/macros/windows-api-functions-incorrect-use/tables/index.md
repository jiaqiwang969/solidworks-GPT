---
title: 使用SOLIDWORKS API自动化表格（BOM、通用、修订等）
caption: 表格
description: 本文介绍使用SOLIDWORKS API处理表格（物料清单、通用、焊接构件清单、孔表）的函数。
sidebar_position: 8
---
通过SOLIDWORKS API可以访问所有SOLIDWORKS支持的表格类型，包括但不限于：

* 物料清单（Bill Of Material）
* 通用表格（General）
* 焊接构件清单（Weldment Cut List）
* 孔表（Holes Table）

等等。

所有表格都继承了[ITableAnnotation](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html) SOLIDWORKS API接口。该接口提供了与表格进行交互的方法，例如更改单元格、更改格式、添加/删除行等。

对于通用表格注释，还有特定的表格注释。例如，[IBomTableAnnotation](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomTableAnnotation.html)是物料清单（BOM）表格的特定表格注释。可以通过直接赋值指针将通用表格注释转换为特定表格注释。

表格也存在于特征管理器树中，这意味着它还提供了[IFeature](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html)接口所公开的方法。每个特定的表格注释都提供了访问特定表格特征的属性。例如，[IBomTableAnnotation::BomFeature](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibomtableannotation~bomfeature.html)将返回特定的物料清单（BOM）特征。要获取指向[IFeature](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html)的指针，需要对所有特定表格特征调用::GetFeature方法。
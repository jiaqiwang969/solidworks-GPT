---
title:  使用SOLIDWORKS API管理切割清单体
caption: 切割清单
---
 使用SOLIDWORKS API自动化切割清单体（焊接和钣金）
sidebar_position: 11
labels: [切割清单, 焊接, 钣金]
---
切割清单体是由SOLIDWORKS中的钣金和焊接体生成的。尽管这些体仍然通过[SOLIDWORKS API界面的IBody2](https://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2.html)进行管理，但与常规体相比，它们提供了额外的功能：

* 切割清单体按几何形状分组在切割清单文件夹中
* 切割清单文件夹（一组体）可以具有自定义属性和自动生成的属性（例如长度、厚度等）

可以通过调用切割清单文件夹项的[IFeature::CustomPropertyManager](https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~CustomPropertyManager.html)属性来自动化自定义属性。

切割清单是SOLIDWORKS API自动化中最常见的元素之一。请浏览本节中的示例，了解通过编程方式访问切割清单数据的宏和代码片段。
---
title:  使用SOLIDWORKS API操作模型视图
caption: 模型视图
---
 使用SOLIDWORKS API处理3D模型视图的文章和代码示例集合
sidebar_position: 3
---
模型视图是用户可见的SOLIDWORKS模型的3D快照。SOLIDWORKS API提供了[IModelView](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html)接口，用于执行视图的操作和数据提取。

可以对模型视图进行变换（缩放、旋转、移动）以改变模型的方向。

可以在文档中呈现多个视图，以表示模型的各种状态。例如，运动研究选项卡会创建新的视图来渲染与运动相关的用户界面元素。

本节包含使用SOLIDWORKS API操作模型视图的示例和宏。
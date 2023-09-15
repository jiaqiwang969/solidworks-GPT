---
title: 使用SOLIDWORKS API处理草图
caption: 草图
description: 使用SOLIDWORKS API处理2D和3D草图（添加和读取线段、变换、创建特征）
sidebar_position: 6
labels: [sketch,draw]
---
草图是SOLIDWORKS零件、装配和绘图中的二维或三维布局。在大多数情况下，草图用作生成三维元素（挤压、切割、放样等）的轮廓。

草图是一个特征，可以通过[SOLIDWORKS API中的ISketch接口](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketch.html)进行管理。

草图可以包含草图线段和草图点，以及注释（尺寸、注释等）。

2D草图使用二维坐标系（X，Y）来定位其元素。该坐标系并不总是与全局坐标系匹配。这意味着在草图中找到的元素的坐标是相对于二维坐标系的，并且如果需要，需要将其转换到模型空间。

本节包含使用SOLIDWORKS API处理草图、添加和删除线段和点、创建新草图、计算变换的各种宏和代码示例。
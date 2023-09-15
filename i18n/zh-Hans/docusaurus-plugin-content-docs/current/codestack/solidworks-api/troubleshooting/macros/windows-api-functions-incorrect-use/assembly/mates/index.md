---
title:  使用SOLIDWORKS API自动化装配中的配合关系
caption: 配合关系
---
 配合关系的组合和代码示例集合
image: assembly-mating.png
labels: [装配, 配合关系]
sidebar_position: 1
---
![通过API配合装配组件](assembly-mating.png){ width=200 }

可以通过[SOLIDWORKS API的IAssemblyDoc::AddMate3](https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddMate3.html)方法（或此方法的更新版本）以编程方式配合装配组件。

需要为不同的配合类型使用不同的标记来标记所选对象。请参考SOLIDWORKS API帮助文档以获取特定配合关系的标记值，或使用SOLIDWORKS宏记录器来捕获正确的标记。
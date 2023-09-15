---
title:  使用SOLIDWORKS API自动化装配中的配合关系
caption: 配合关系
---
 有关在装配中配合组件的文章和代码示例的集合
image: assembly-mating.png
labels: [装配, 配合]
sidebar_position: 1
---
![通过API配合装配组件](assembly-mating.png){ width=200 }

可以使用[SOLIDWORKS API的IAssemblyDoc::AddMate3](https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddMate3.html)方法（或此方法的更新版本）以编程方式配合装配组件。

需要为不同的配合类型使用不同的标记来标记所选对象。请参考SOLIDWORKS API帮助文档以获取特定配合的标记值，或使用SOLIDWORKS宏记录器来捕获正确的标记。
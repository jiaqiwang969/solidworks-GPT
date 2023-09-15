---
title:  使用SOLIDWORKS API自动化运动研究
caption: 运动研究
---
 与SOLIDWORKS运动研究API相关的文章和示例集合
image: motion-study.svg
sidebar_position: 0
---
![SOLIDWORKS运动研究API](motion-study.svg){ width=250 }

SOLIDWORKS运动研究API在单独的[SwMotionStudy](https://help.solidworks.com/2018/english/api/swmotionstudyapi/SolidWorks.Interop.swmotionstudy~SolidWorks.Interop.swmotionstudy_namespace.html)库中提供了特定的接口。如果需要使用[早期绑定](/docs/codestack/visual-basic/variables/declaration#early-binding-and-late-binding)，则需要明确添加对该库的引用。

基本接口[IMotionStudyManager](https://help.solidworks.com/2018/english/api/swmotionstudyapi/SolidWorks.Interop.swmotionstudy~SolidWorks.Interop.swmotionstudy.IMotionStudyManager.html)可以通过[SOLIDWORKS API方法IModelDocExtension::GetMotionStudyManager](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetMotionStudyManager.html)进行访问。

本节包含了使用API自动化SOLIDWORKS中的运动研究的宏和代码示例。
---
title:  SOLIDWORKS宏特征的生命周期
caption: 生命周期
---
 解释SOLIDWORKS宏特征的行为和生命周期
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
宏特征驻留在模型中，并与文档一起保存。宏特征可以在其生命周期中处理各种事件。

* 重建。重写[OnRebuild](https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_OnRebuild.htm)方法来处理此事件。
* 编辑。重写[OnEditDefinition](https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_OnEditDefinition.htm)方法来处理此事件。
* 更新状态。重写[OnUpdateState](https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_OnUpdateState.htm)方法来处理此事件。

宏特征是一个单例服务。不要在宏特征类中创建任何类级别的变量。如果需要跟踪特定宏特征的生命周期，请使用[特征处理器](feature-handler)。
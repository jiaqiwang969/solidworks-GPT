---
title: 在SwEx.MacroFeature框架中处理SOLIDWORKS宏特征状态更新
caption: 状态
description: 在环境变化（选择、重建、抑制等）时更新宏特征的状态
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
每当特征的状态发生变化时，都会调用此处理程序。它应该用于为宏特征提供额外的安全性。

``` cs
protected override swMacroFeatureSecurityOptions_e OnUpdateState(ISldWorks app, IModelDoc2 model, IFeature feature)
{
    //禁止编辑或抑制特征
    return swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityCannotBeDeleted 
                | swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityCannotBeSuppressed;
}
```
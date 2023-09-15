---
title: 在SOLIDWORKS宏特征中存储参数
caption: 参数
description: 使用SwEx.MacroFeature框架在SOLIDWORKS宏特征中存储参数结构
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
参数是宏特征所需的任何附加元数据。目前只支持参数的基本类型（例如字符串、布尔值、双精度浮点数、整数等）。

``` cs
public class MacroFeatureParams
{
    public string Parameter1 { get; set; }
    public int Parameter2 { get; set; }
}

//此宏特征有两个参数（Parameter1和Parameter2）
[ComVisible(true)]
public class MyMacroFeature : MacroFeatureEx<MacroFeatureParams>
{
}
```
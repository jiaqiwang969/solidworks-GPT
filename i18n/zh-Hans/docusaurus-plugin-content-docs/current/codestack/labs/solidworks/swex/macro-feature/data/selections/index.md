---
title:  管理SOLIDWORKS宏特征的选择
caption: 选择
---
 使用SwEx.MacroFeature框架管理SOLIDWORKS宏特征的选择
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
~~~ cs
public class MacroFeatureParams
{
    //任何实体（例如面、边、特征等）的选择参数
    [ParameterSelection]
    public object AnyEntity { get; set; }

    //体的选择参数
    [ParameterSelection]
    public IBody2 Body { get; set; }

    //面数组的选择参数
    [ParameterSelection]
    public List<IFace2> Faces { get; set; }
~~~

参数属性可以使用直接的SOLIDWORKS类型指定，也可以使用object类型指定（如果类型未知）。还支持选择列表。

如果任何选择发生更改，[OnRebuild](https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_OnRebuild.htm)处理程序将被调用。
---
title:  在SOLIDWORKS宏特征中管理编辑体
caption: 编辑体
---
 使用SwEx.MacroFeature框架在SOLIDWORKS宏特征中管理编辑体
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
编辑体是宏特征将要获取的输入体。例如，当使用合并体选项创建凸出特征时，它所基于的实体体将成为新凸出特征的一个体。可以通过在树中选择该特征来验证这一点，这将同时选择该体。在这种情况下，原始体被作为编辑体传递给凸出特征。

~~~ cs
public class MacroFeatureParams
{
    [ParameterEditBody]
    public IBody2 InputBody { get; set; }
}
~~~

如果需要多个输入体，则可以在不同的属性中指定

~~~ cs
public class MacroFeatureParams
{
    [ParameterEditBody]
    public IBody2 EditBody1 { get; set; }

    [ParameterEditBody]
    public IBody2 EditBody2 { get; set; }
}
~~~

或者作为列表

~~~ cs
public class MacroFeatureParams
{
    [ParameterEditBody]
    public List<IBody2> EditBodies { get; set; }
}
~~~
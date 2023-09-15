---
title:  在 SOLIDWORKS 宏特征中存储数据（参数、实体、选择集）
caption: 数据
---
 使用 SwEx.MacroFeature 框架在 SOLIDWORKS 宏特征中存储参数、元数据、尺寸和选择集
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
宏特征可以存储额外的元数据和实体。这些数据包括：

* 参数
* 选择集
* 编辑实体
* 尺寸

所需的数据可以在宏特征数据模型中定义。特殊参数（如选择集、编辑实体或尺寸）应该使用适当的 [属性](https://docs.codestack.net/swex/macro-feature/html/N_CodeStack_SwEx_MacroFeature_Attributes.htm) 进行修饰，所有其他属性将被视为参数。

数据模型既用作宏特征的输入，也用作输出。可以通过 [GetParameters](https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_1_GetParameters.htm) 方法访问参数，并将其传递给 [OnRebuild](https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_1_OnRebuild.htm) 处理程序。可以通过调用 [SetParameters](https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_1_SetParameters.htm) 方法来修改参数。

~~~ cs
public class MacroFeatureParams
{
    // 文本元数据
    public string TextParameter { get; set; }
    
    // 布尔元数据
    public bool ToggleParameter { get; set; }

    // 任何依赖选择集
    [ParameterSelection]
    public IFace2 FaceSelectionParameter { get; set; }

    // 编辑实体 - 宏特征正在修改的基础实体
    [ParameterEditBody]
    public IBody2 InputBody { get; set; }

    // 宏特征尺寸。尺寸的值将与属性同步
    [ParameterDimension(swDimensionType_e.swLinearDimension)]
    public double LinearDimension { get; set; }
}

[ComVisible(true)]
public class MyMacroFeature : MacroFeatureEx<MacroFeatureParams>
{
}
~~~
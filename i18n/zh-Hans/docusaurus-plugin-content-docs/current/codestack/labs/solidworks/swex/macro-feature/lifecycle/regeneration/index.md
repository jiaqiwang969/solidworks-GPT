---
title: 处理SOLIDWORKS宏特征的再生成方法
caption: 再生成
description: 使用SwEx.MacroFeature框架处理SOLIDWORKS宏特征的再生成事件，并返回实体或错误以驱动行为
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
当特征正在重新构建时（无论是调用重新生成还是父元素已更改），将调用此处理程序。

使用[MacroFeatureRebuildResult](https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_Base_MacroFeatureRebuildResult.htm)类生成所需的输出。

特征可以生成以下输出

~~~ cs
using CodeStack.SwEx.MacroFeature;
using CodeStack.SwEx.MacroFeature.Base;
using CodeStack.SwEx.MacroFeature.Data;
using SolidWorks.Interop.sldworks;

namespace CodeStack.SwEx
{
    //返回成功的再生成，不带实体
    public class RegenerationNoResultsMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            return MacroFeatureRebuildResult.FromStatus(true);
        }
    }

    //返回再生成错误
    public class RegenerationRebuildErrorMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            return MacroFeatureRebuildResult.FromStatus(false, "无法重新生成此特征");
        }
    }

    //返回实体，但不自动分配实体ID
    public class RegenerationBodyMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            //使用IModeler的扩展方法创建一个立方体实体
            IBody2 tempBody = app.IGetModeler().CreateBox(new Point(0, 0, 0), new Vector(1, 0, 0), 0.1, 0.1, 0.1);

            return MacroFeatureRebuildResult.FromBody(tempBody, feature.GetDefinition() as IMacroFeatureData, false); 
        }
    }

    //返回实体的模式，并自动分配实体ID
    public class RegenerationArrayOfBodiesMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            IBody2[] tempBodies = null; //TODO: 创建临时实体
            return MacroFeatureRebuildResult.FromBodies(tempBodies, feature.GetDefinition() as IMacroFeatureData, true);
        }
    }
}

~~~



如果特征需要创建新的实体，请使用[IModeler](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler.html)接口。只能从再生成方法返回临时实体。

使用[IModelerExtension](https://docs.codestack.net/swex/macro-feature/html/T_SolidWorks_Interop_sldworks_ModelerEx.htm)类中提供的扩展方法。
---
title:  处理SOLIDWORKS宏特征的生命周期
caption: 特征处理器
---
 使用SOLIDWORKS宏特征处理器来管理SwEx.MacroFeature框架中宏特征的生命周期
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
[MacroFeatureEx{TParams, THandler} 类](https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx_2.htm) 的宏特征重载允许定义每个特征将创建的处理器类。这提供了一种简单的方式来跟踪宏特征的生命周期（即创建时间和删除时间）。

~~~ cs
using CodeStack.SwEx.MacroFeature;
using CodeStack.SwEx.MacroFeature.Base;
using SolidWorks.Interop.sldworks;
using System.Runtime.InteropServices;

namespace CodeStack.SwEx
{
    public class LifecycleMacroFeatureParams
    {
    }

    public class LifecycleMacroFeatureHandler : IMacroFeatureHandler
    {
        public void Init(ISldWorks app, IModelDoc2 model, IFeature feat)
        {
            //特征被创建或加载
        }
        
        public void Unload(MacroFeatureUnloadReason_e reason)
        {
            switch (reason)
            {
                case MacroFeatureUnloadReason_e.Deleted:
                    //特征被删除
                    break;

                case MacroFeatureUnloadReason_e.ModelClosed:
                    //模型被关闭
                    break;
            }
        }
    }

    [ComVisible(true)]
    public class LifecycleMacroFeature : MacroFeatureEx<LifecycleMacroFeatureParams, LifecycleMacroFeatureHandler>
    {
        protected override MacroFeatureRebuildResult OnRebuild(LifecycleMacroFeatureHandler handler, LifecycleMacroFeatureParams parameters)
        {
            //TODO: 访问处理器以提取特征特定数据

            return MacroFeatureRebuildResult.FromStatus(true);
        }
    }
}

~~~

处理器类的实例将由框架创建和释放。当宏特征需要监视其所在文件的特定事件时，这种方法非常有用。
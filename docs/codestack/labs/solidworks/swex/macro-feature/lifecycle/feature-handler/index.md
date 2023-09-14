---
title: Handling the life cycle of SOLIDWORKS macro feature
caption: Feature Handler
description: Using SOLIDWORKS macro feature handler to manage the life cycle of the macro feature in SwEx.MacroFeature framework
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
[MacroFeatureEx{TParams, THandler} Class](https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx_2.htm) overload of macro feature allows defining the handler class which will be created for each feature. This provides a simple way to track the macro feature lifecycle (i.e. creation time and deletion time).

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
            //feature is created or loaded
        }
        
        public void Unload(MacroFeatureUnloadReason_e reason)
        {
            switch (reason)
            {
                case MacroFeatureUnloadReason_e.Deleted:
                    //feature is deleted
                    break;

                case MacroFeatureUnloadReason_e.ModelClosed:
                    //model is closed
                    break;
            }
        }
    }

    [ComVisible(true)]
    public class LifecycleMacroFeature : MacroFeatureEx<LifecycleMacroFeatureParams, LifecycleMacroFeatureHandler>
    {
        protected override MacroFeatureRebuildResult OnRebuild(LifecycleMacroFeatureHandler handler, LifecycleMacroFeatureParams parameters)
        {
            //TODO: access handler to extract feature specific data

            return MacroFeatureRebuildResult.FromStatus(true);
        }
    }
}

~~~



Instance of the handler class will be created and disposed by framework. This approach is useful when macro feature needs to monitor the events of a specific file it resides.
---
title: Handling Regeneration method of SOLIDWORKS macro feature
caption: Regeneration
description: Handling regeneration event of SOLIDWORKS macro feature and returning bodies or errors to drive the behavior using SwEx.MacroFeature framework
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
This handler called when feature is being rebuilt (either when regenerate is invoked or when the parent elements have been changed).

Use [MacroFeatureRebuildResult](https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_Base_MacroFeatureRebuildResult.htm) class to generate the required output.

Feature can generate the following output

~~~ cs
using CodeStack.SwEx.MacroFeature;
using CodeStack.SwEx.MacroFeature.Base;
using CodeStack.SwEx.MacroFeature.Data;
using SolidWorks.Interop.sldworks;

namespace CodeStack.SwEx
{
    //returns successful regeneration without bodies
    public class RegenerationNoResultsMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            return MacroFeatureRebuildResult.FromStatus(true);
        }
    }

    // returns regeneration error
    public class RegenerationRebuildErrorMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            return MacroFeatureRebuildResult.FromStatus(false, "Failed to regenerate this feature");
        }
    }

    //return body without automatically assigning ids
    public class RegenerationBodyMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            //use extension methods of IModeler to create a box body
            IBody2 tempBody = app.IGetModeler().CreateBox(new Point(0, 0, 0), new Vector(1, 0, 0), 0.1, 0.1, 0.1);

            return MacroFeatureRebuildResult.FromBody(tempBody, feature.GetDefinition() as IMacroFeatureData, false); 
        }
    }

    //return pattern of bodies and automatically assign entity ids
    public class RegenerationArrayOfBodiesMacroFeature : MacroFeatureEx
    {
        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
        {
            IBody2[] tempBodies = null; //TODO: create temp bodies
            return MacroFeatureRebuildResult.FromBodies(tempBodies, feature.GetDefinition() as IMacroFeatureData, true);
        }
    }
}

~~~



Use [IModeler](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler.html) interface if feature needs to create new bodies. Only temp bodies can be returned from the regeneration method.

Use extension methods available in the [IModelerExtension](https://docs.codestack.net/swex/macro-feature/html/T_SolidWorks_Interop_sldworks_ModelerEx.htm) class.
---
title: VSTA Macro which activates feature manager tab via SOLIDWORKS API
caption: Activate Feature Manager Tab
description: Example demonstrates how to activate standard tabs (feature manager tree, property manager, configuration manager, DimXpert manager, display manager) in the feature manager view using SOLIDWORKS API
image: feature-manager-tabs.png
labels: [feature manager, tab]
---
![Feature Manager Tabs](feature-manager-tabs.png)

This example demonstrates how to activate standard tabs (feature manager tree, property manager, configuration manager, DimXpert manager, display manager) in the feature manager view using SOLIDWORKS API.

* Specify the tab to activate using the *FeatMgrTab_e* enumeration
* Run the macro (VSTA3)
* Active tab is shown in the message box
* Specified tab is activated

**ModelDocExtension.cs**
~~~ cs
using System;
using System.Collections.Generic;
using System.Linq;

namespace SolidWorks.Interop.sldworks
{
    public enum FeatMgrTab_e
    {
        FeatureManagerTree,
        PropertyManager,
        ConfigurationManager,
        DimXpertManager,
        DisplayManager
    }

    public static class ModelDocExtension
    {
        private static Dictionary<int, FeatMgrTab_e> GetTabsMap(IModelViewManager mdlViewMgr)
        {
            return new Dictionary<int, FeatMgrTab_e>()
            {
                { mdlViewMgr.GetFeatureManagerTreeTabIndex(), FeatMgrTab_e.FeatureManagerTree },
                { mdlViewMgr.GetPropertyManagerTabIndex(), FeatMgrTab_e.PropertyManager },
                { mdlViewMgr.GetConfigurationManagerTabIndex(), FeatMgrTab_e.ConfigurationManager },
                { mdlViewMgr.GetDimXpertManagerTabIndex(), FeatMgrTab_e.DimXpertManager },
                { mdlViewMgr.GetDisplayManagerTabIndex(), FeatMgrTab_e.DisplayManager }
            };
        }

        public static void ActivateStandardFeatureManagerTab(this IModelDoc2 model, FeatMgrTab_e tab)
        {
            var mdlViewMgr = model.ModelViewManager;

            mdlViewMgr.ActiveFeatureManagerTabIndex = GetTabsMap(mdlViewMgr).First(x => x.Value == tab).Key;
        }

        public static FeatMgrTab_e GetActiveStandardFeatureManagerTab(this IModelDoc2 model)
        {
            var mdlViewMgr = model.ModelViewManager;

            FeatMgrTab_e tab;

            if (!GetTabsMap(mdlViewMgr).TryGetValue(mdlViewMgr.ActiveFeatureManagerTabIndex, out tab))
            {
                throw new NullReferenceException("Active tab is not a standard tab");
            }

            return tab;
        }
    }
}

~~~



**SolidWorksMacro.cs**
~~~ cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Forms;

using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;


namespace ActivateFeatMgrTab
{
    public partial class SolidWorksMacro
    {
        public void Main()
        {
            var model = swApp.IActiveDoc2;

            try
            {
                if (model != null)
                {
                    swApp.SendMsgToUser(string.Format("Active Feature Manager Tab: {0}", model.GetActiveStandardFeatureManagerTab()));

                    model.ActivateStandardFeatureManagerTab(FeatMgrTab_e.DisplayManager);
                }
                else
                {
                    throw new NullReferenceException("Model is not opened");
                }
            }
            catch(Exception ex)
            {
                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);
            }

            return;
        }

        public SldWorks swApp;

    }
}


~~~



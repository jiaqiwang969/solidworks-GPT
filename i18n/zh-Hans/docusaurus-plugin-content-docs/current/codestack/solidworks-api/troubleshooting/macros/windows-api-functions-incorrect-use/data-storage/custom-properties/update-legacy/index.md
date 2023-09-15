---
caption: Upgrade Legacy
title:  Upgrade legacy custom properties to a new architecture
---
 VBA macro which upgrade legacy SOLIDWORKS custom properties to a new architecture in SOLIDWORKS 2022
---
This macro upgrades the legacy custom properties to a [new architecture](https://help.solidworks.com/2022/english/solidworks/sldworks/c_custom_properties_architecture.htm) in SOLIDWORKS 2022.

To configure the macro, modify the constant parameters in the macro.

~~~ vb
Const UPDATE_ALL_COMPS As Boolean = True
Const REBUILD_ALL_CONFIGS As Boolean = True
~~~

**UPDATE_ALL_COMPS** sets to rebuild all components of the assembly or top level only
**REBUILD_ALL_CONFIGS** specifies if it is required to rebuild all configurations

~~~ vb
Const UPDATE_ALL_COMPS As Boolean = True
Const REBUILD_ALL_CONFIGS As Boolean = True

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    swModel.Extension.UpgradeLegacyCustomProperties UPDATE_ALL_COMPS
    
    If REBUILD_ALL_CONFIGS Then
        swModel.Extension.ForceRebuildAll
    End If
    
End Sub
~~~



---
title:  升级传统自定义属性
---
 VBA宏，将传统的SOLIDWORKS自定义属性升级到SOLIDWORKS 2022的新架构中
---

该宏将传统的自定义属性升级到[SOLIDWORKS 2022](https://help.solidworks.com/2022/english/solidworks/sldworks/c_custom_properties_architecture.htm)中的新架构。

要配置该宏，请修改宏中的常量参数。

```vb
Const UPDATE_ALL_COMPS As Boolean = True
Const REBUILD_ALL_CONFIGS As Boolean = True
```

**UPDATE_ALL_COMPS** 设置为重建装配体的所有组件或仅顶层组件
**REBUILD_ALL_CONFIGS** 指定是否需要重建所有配置

```vb
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
```

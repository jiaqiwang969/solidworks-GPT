---
标题：升级遗留自定义属性
描述：这个 VBA 宏用于在 SOLIDWORKS 2022 中将遗留的自定义属性升级到新的架构。

该宏将遗留的自定义属性升级到 SOLIDWORKS 2022 中的[新架构](https://help.solidworks.com/2022/english/solidworks/sldworks/c_custom_properties_architecture.htm)。

要配置该宏，请修改宏中的常量参数。

```vb
Const UPDATE_ALL_COMPS As Boolean = True
Const REBUILD_ALL_CONFIGS As Boolean = True
```

**UPDATE_ALL_COMPS** 设置为 True，以重建装配体的所有组件或仅顶层组件。
**REBUILD_ALL_CONFIGS** 指定是否需要重建所有配置。

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
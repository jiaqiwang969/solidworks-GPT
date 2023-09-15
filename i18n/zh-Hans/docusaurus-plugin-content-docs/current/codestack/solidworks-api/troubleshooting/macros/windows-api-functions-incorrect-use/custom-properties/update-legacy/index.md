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

### 示例

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

### 参数

- `UPDATE_ALL_COMPS`（布尔值）：设置为 `True`，以重新构建装配体的所有组件或仅顶层组件。
- `REBUILD_ALL_CONFIGS`（布尔值）：指定是否需要重新构建所有配置。

### 备注

- 此宏将传统的自定义属性升级到 SOLIDWORKS 2022 中的新架构。
- 请确保在运行宏之前保存所有文档。
- 请根据需要修改宏中的常量参数。
- 该宏仅适用于 SOLIDWORKS 2022 及更高版本。
- 有关更多信息，请参阅[SOLIDWORKS 2022 自定义属性架构](https://help.solidworks.com/2022/english/solidworks/sldworks/c_custom_properties_architecture.htm)文档。
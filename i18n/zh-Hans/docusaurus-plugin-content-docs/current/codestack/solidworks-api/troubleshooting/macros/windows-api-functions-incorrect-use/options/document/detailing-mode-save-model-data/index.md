---
caption: 切换绘图详细模式并保存
title: 使用绘图详细模式保存SOLIDWORKS绘图
description: 使用VBA宏在保存时切换绘图详细模式的开启和关闭
---

在处理大型绘图时，使用绘图详细模式可能会很有益。为了正确地利用绘图详细模式，需要将数据保存在文档本身中。

这个过程可能会降低保存性能。

启用或禁用绘图详细模式数据保存的切换选项由文档首选项驱动。

该宏允许打开或关闭设置并执行文档的保存。

```vb
Const ENABLE As Boolean = True 'True表示保存详细数据，False表示不保存详细数据
```

可以创建两个宏按钮（一个用于保存详细数据，一个用于保存不带详细数据的）。

```vb
Const ENABLE As Boolean = True

Const swCommands_Save As Long = 2

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then
            Dim saveModelDataOpt As Boolean
            Dim includeStandardView As Boolean
            
            saveModelDataOpt = swModel.Extension.GetUserPreferenceToggle(swUserPreferenceToggle_e.swDetailingModeSaveModelData, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
            includeStandardView = swModel.Extension.GetUserPreferenceToggle(swUserPreferenceToggle_e.swDetailingModeIncludeStandardViewsInViewPalette, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
            
            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeSaveModelData, swUserPreferenceOption_e.swDetailingNoOptionSpecified, ENABLE
            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeIncludeStandardViewsInViewPalette, swUserPreferenceOption_e.swDetailingNoOptionSpecified, ENABLE
            
            swApp.RunCommand swCommands_Save, ""
            
            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeSaveModelData, swUserPreferenceOption_e.swDetailingNoOptionSpecified, saveModelDataOpt
            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeIncludeStandardViewsInViewPalette, swUserPreferenceOption_e.swDetailingNoOptionSpecified, includeStandardView
        Else
            Err.Raise vbError, "", "仅支持绘图文档"
        End If
    Else
        Err.Raise vbError, "", "打开绘图文档"
    End If
    
End Sub
```
---
title: 使用SOLIDWORKS API更改材料中的应用外观选项
caption: 更改材料中的应用外观选项
description: 该示例演示了如何使用SOLIDWORKS API更改材料选项中的应用外观选项。
image: material-apply-appearance.png
labels: [part, solidworks api, material, appearance, example]
---

![编辑材料对话框中的应用外观选项](material-apply-appearance.png)

该示例演示了如何使用SOLIDWORKS API更改材料选项中的*应用外观*选项。

```vb
Dim swApp As SldWorks.SldWorks
Dim swPart As SldWorks.PartDoc

Sub main()

    Set swApp = Application.SldWorks
    
    Set swPart = swApp.ActiveDoc
    
    If Not swPart Is Nothing Then
        
        Dim swMatVisPrps As SldWorks.MaterialVisualPropertiesData
        Set swMatVisPrps = swPart.GetMaterialVisualProperties
        swMatVisPrps.ApplyAppearance = False
        
        swPart.SetMaterialVisualProperties swMatVisPrps, swInConfigurationOpts_e.swAllConfiguration, Empty
    Else
        MsgBox "请打开零件文档"
    End If
    
End Sub
```


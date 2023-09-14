---
layout: sw-tool
title: 将SOLIDWORKS文件特定的自定义属性复制到配置
caption: 将文件特定的自定义属性复制到活动配置的属性中
description: 该宏使用SOLIDWORKS API将所有文件特定的自定义属性复制到活动配置的属性中。
image: file-specific-custom-properties.png
labels: [配置, 复制, 自定义属性, 实用工具]
group: 自定义属性
redirect-from:
  - /2018/03/copy-file-specific-custom-properties-to.html
---

该宏使用SOLIDWORKS API将所有文件特定的自定义属性复制到活动配置的属性中。

![文件的自定义选项卡中的属性](file-specific-custom-properties.png){ width=640 }

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swCustPrpMgr As SldWorks.CustomPropertyManager
Dim swConfCustPrpMgr As SldWorks.CustomPropertyManager
 
Sub main()
 
    Set swApp = Application.SldWorks
 
    Set swModel = swApp.ActiveDoc

    If Not swModel Is Nothing Then
   
        Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")
       
        Dim vNames As Variant
        Dim vTypes As Variant
        Dim vValues As Variant
        swCustPrpMgr.GetAll vNames, vTypes, vValues
   
        Dim activeConfName As String
        activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name

        Set swConfCustPrpMgr = swModel.Extension.CustomPropertyManager(activeConfName)
 
        Dim i As Integer
   
        For i = 0 To UBound(vNames)
            swConfCustPrpMgr.Add2 vNames(i), vTypes(i), vValues(i)
            swConfCustPrpMgr.Set vNames(i), vValues(i)
        Next

    Else

        MsgBox "请打开零件或装配体"

    End If
   
End Sub
```


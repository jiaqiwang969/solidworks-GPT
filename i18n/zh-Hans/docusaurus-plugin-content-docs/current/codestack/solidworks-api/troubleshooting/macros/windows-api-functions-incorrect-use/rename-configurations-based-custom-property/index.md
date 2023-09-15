---
layout: sw-tool
title: SOLIDWORKS宏根据自定义属性重命名配置
caption: 根据自定义属性重命名配置
description: 该宏使用SOLIDWORKS API将装配体或零件的所有配置重命名为指定配置特定自定义属性的值。
image: sw-configuration-name.png
labels: [配置, 自定义属性, 重命名, solidworks api, 实用工具]
group: 自定义属性
redirect-from:
  - /2018/04/solidworks-api-model-rename-configurations-based-on-custom-prp.html
---

该宏使用SOLIDWORKS API将装配体或零件的所有配置重命名为指定配置特定自定义属性的值。

![配置属性管理器页面中的配置名称](sw-configuration-name.png){ width=200 }

* 运行宏并输入要从中读取值的自定义属性的名称
* 宏将遍历所有配置并根据相应的配置特定自定义属性的值对它们进行重命名
* 如果属性在配置中不存在或值为空，则不会重命名配置

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim prpName As String
        
        prpName = InputBox("指定要从中读取值的属性名称")
        
        If prpName <> "" Then
            
            Dim vConfNames As Variant
            Dim i As Integer
            
            vConfNames = swModel.GetConfigurationNames()
            
            For i = 0 To UBound(vConfNames)
                    
                Dim swConf As SldWorks.Configuration
                Set swConf = swModel.GetConfigurationByName(vConfNames(i))
                
                Dim prpVal As String
                
                If swConf.CustomPropertyManager.Get3(prpName, False, "", prpVal) Then
                    
                    If prpVal <> "" Then
                        swConf.Name = prpVal
                    End If
                    
                End If
                
            Next
            
        End If
        
    Else
        MsgBox "请打开模型"
    End If
    
End Sub
```


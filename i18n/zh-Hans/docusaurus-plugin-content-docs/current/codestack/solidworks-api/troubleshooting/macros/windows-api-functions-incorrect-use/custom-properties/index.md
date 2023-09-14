---
title: 使用SOLIDWORKS API管理自定义属性
caption: 自定义属性
description: 使用SOLIDWORKS API管理模型、配置和特定特征的自定义属性
labels: [自定义属性, 配置属性]
---
本节包含了使用SOLIDWORKS API利用自定义属性的宏和代码示例。

自定义属性是SOLIDWORKS中用于存储元数据的键值对集合。自定义属性可以与模型本身、其配置或切割列表特征（如焊接或钣金）相关联。

通过[SOLIDWORKS API接口](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomPropertyManager.html)管理自定义属性。

在许多情况下，当需要读取自定义属性的值（例如用于文件名、导出等）时，属性首先从引用的配置中读取，如果在文件属性中找不到，则使用文件属性。这类似于属性用于填充物料清单表的方式。

下面的代码演示了如何在代码中实现这种做法。

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    Debug.Print GetPropertyValue(swModel, "Part Number")
    Debug.Print GetPropertyValue(swModel, "Revision")
    
End Sub

Function GetPropertyValue(model As SldWorks.ModelDoc2, prpName As String) As String
    
    Dim prpVal As String
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    If TypeOf model Is SldWorks.PartDoc Or TypeOf model Is SldWorks.AssemblyDoc Then
        Set swCustPrpMgr = model.ConfigurationManager.ActiveConfiguration.CustomPropertyManager
        swCustPrpMgr.Get4 prpName, True, "", prpVal
    End If
    
    If prpVal = "" Then
        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")
        swCustPrpMgr.Get4 prpName, True, "", prpVal
    End If
    
    GetPropertyValue = prpVal
    
End Function
~~~
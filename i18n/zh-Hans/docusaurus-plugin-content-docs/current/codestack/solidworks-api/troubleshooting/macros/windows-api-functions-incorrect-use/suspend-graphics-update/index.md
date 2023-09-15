---
title:  使用SOLIDWORKS API暂停图形更新的宏
caption: 暂停图形更新
---
 该示例演示了如何在使用SOLIDWORKS API执行操作时禁止图形更新。
labels: [api, graphics, utility, suspend, performance]
---

该宏演示了如何在使用特征树和模型（包括打开新文档）进行操作时暂停图形更新，使用SOLIDWORKS API。

该宏将外部零件中的实体复制到活动零件文档的新创建的派生配置中。

通过 *SRC_PART* 常量设置源零件路径（要从中复制实体的零件）。

``` vb
Const SRC_PART As String = "C:\Sample.sldprt"
```

通过更改 *SUPPRESS_UPDATES* 常量尝试两个选项以查看差异。

``` vb
Const SUPPRESS_UPDATES As Boolean = True 'True表示禁止更新，False表示显示更新（默认行为）
```

该宏执行以下步骤：

* 打开具有要复制的实体的模型
* 将所有实体复制到内存中
* 关闭模型
* 在原始模型中创建新的派生配置
* 插入复制的实体
* 在除此配置之外的所有配置中禁止创建的特征
* 激活原始配置

如果将 *SUPPRESS_UPDATES* 选项设置为 true，则所有操作都将被隐藏，屏幕上只会显示模型的活动状态（即模型打开、特征插入等将不可见）。

``` vb
Const SUPPRESS_UPDATES As Boolean = True

Const SRC_PART As String = "C:\Sample.sldprt"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If TypeOf swModel Is SldWorks.PartDoc Then
        
        On Error GoTo End_

        If SUPPRESS_UPDATES Then
            SuppressUpdates swModel, True
        End If
        
        Dim activeConfName As String
        activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name
        
        Dim vBodies As Variant
        vBodies = GetBodies(SRC_PART)
        
        swModel.ConfigurationManager.AddConfiguration2 activeConfName & "_Merged", "", "", swConfigurationOptions2_e.swConfigOption_LinkToParent, activeConfName, "", True
        
        Dim i As Integer
        
        For i = 0 To UBound(vBodies)
            Dim swBody As SldWorks.Body2
            Set swBody = vBodies(i)
            Dim swFeat As SldWorks.Feature
            Set swFeat = swModel.CreateFeatureFromBody3(swBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify)
            swFeat.SetSuppression2 swFeatureSuppressionAction_e.swUnSuppressFeature, swInConfigurationOpts_e.swThisConfiguration, Empty
        Next
        
        swModel.ShowConfiguration2 activeConfName

End_: '恢复标志，否则所有文件都将以不可见状态打开
    
        If SUPPRESS_UPDATES Then
            SuppressUpdates swModel, False
        End If
        
    Else
        MsgBox "请打开零件文档"
    End If
    
End Sub

Sub SuppressUpdates(model As SldWorks.ModelDoc2, suppress As Boolean)
    
    Dim enable As Boolean
    enable = Not suppress
    
    Dim swView As SldWorks.ModelView
    Set swView = model.ActiveView
    
    swView.EnableGraphicsUpdate = enable
    
    model.FeatureManager.EnableFeatureTree = enable
    model.FeatureManager.EnableFeatureTreeWindow = enable
        
    swApp.DocumentVisible enable, swDocumentTypes_e.swDocPART
    swApp.DocumentVisible enable, swDocumentTypes_e.swDocASSEMBLY
    swApp.DocumentVisible enable, swDocumentTypes_e.swDocDRAWING
    
End Sub

Function GetBodies(path As String) As Variant
    
    Dim swPart As SldWorks.PartDoc
    Set swPart = swApp.OpenDoc6(path, swDocumentTypes_e.swDocPART, _
        swOpenDocOptions_e.swOpenDocOptions_Silent + swOpenDocOptions_e.swOpenDocOptions_ReadOnly, "", 0, 0)
    
    Dim vBodies As Variant
    vBodies = swPart.GetBodies2(swBodyType_e.swSolidBody, True)
    
    If Not IsEmpty(vBodies) Then
        Dim i As Integer
        For i = 0 To UBound(vBodies)
            Dim swBody As SldWorks.Body2
            Set swBody = vBodies(i)
            Set vBodies(i) = swBody.Copy
        Next
    End If
    
    swApp.CloseDoc swPart.GetTitle()
    
    GetBodies = vBodies
    
End Function
```
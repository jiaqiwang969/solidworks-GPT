---
caption: 将随机颜色应用于组件
title: 在SOLIDWORKS装配中应用随机颜色的宏
description: VBA宏，将随机颜色应用于SOLIDWORKS装配中的所有组件，并提供按自定义属性值分组的选项
---

这个VBA宏会在活动装配的所有组件上应用随机颜色。

修改宏的常量以更改颜色的级别（组件级别或模型级别）。

如果将颜色应用于各个配置（例如**ALL_CONFIGS** = **False**），文档必须与配置关联一个显示状态，否则颜色无法配置特定。

``` vb
Const COMP_LEVEL As Boolean = True 'True表示在装配级别应用颜色，False表示在模型级别应用颜色
Const PARTS_ONLY As Boolean = True 'True表示仅处理零件组件，False表示也将颜色应用于装配
Const ALL_CONFIGS As Boolean = True 'True表示将颜色应用于所有配置，False表示仅应用于引用的配置
```

``` vb
Const PRP_NAME As String = "Type" '按此自定义属性分组颜色，空字符串 "" 表示不分组组件

Sub InitColors(Optional dummy As Variant = Empty)

    ColorsMap.Add "Plate", RGB(255, 0, 0) '将所有自定义属性'Type'等于'Plate'的组件颜色设置为红色
    ColorsMap.Add "Beam", RGB(0, 255, 0) '将所有自定义属性'Type'等于'Beam'的组件颜色设置为绿色
    
End Sub
```

``` vb
Const COMP_LEVEL As Boolean = True
Const PARTS_ONLY As Boolean = True
Const ALL_CONFIGS As Boolean = True
Const PRP_NAME As String = ""

Dim swApp As SldWorks.SldWorks
Dim ColorsMap As Object

Sub InitColors(Optional dummy As Variant = Empty)

    ColorsMap.Add "Plate", RGB(255, 0, 0)
    ColorsMap.Add "Beam", RGB(0, 255, 0)
    
End Sub

Sub main()

try_:
    
    On Error GoTo catch_
    
    Set ColorsMap = CreateObject("Scripting.Dictionary")

    ColorsMap.CompareMode = vbTextCompare

    InitColors

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then
            
            Dim swAssy As SldWorks.AssemblyDoc
            
            Set swAssy = swModel
            
            swAssy.ResolveAllLightWeightComponents True
            
            Dim vComps As Variant
            vComps = swAssy.GetComponents(False)
            
            ColorizeComponents vComps
            
            swModel.GraphicsRedraw2
        Else
            Err.Raise vbError, "", "仅支持装配文档"
        End If
    Else
        Err.Raise vbError, "", "打开装配文档"
    End If
    
    GoTo finally_
    
catch_:
    MsgBox Err.Description, vbCritical
finally_:
    
End Sub

Sub ColorizeComponents(vComps As Variant)
    
    Dim i As Integer
    
    Dim processedDocs() As String
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
        
        Dim swRefModel As SldWorks.ModelDoc2
            
        Set swRefModel = swComp.GetModelDoc2()
        
        If Not swRefModel Is Nothing Then
        
            If Not PARTS_ONLY Or swRefModel.GetType() = swDocumentTypes_e.swDocPART Then
        
                Dim docKey As String
                docKey = LCase(swRefModel.GetPathName())
                
                If Not ALL_CONFIGS Then
                    docKey = docKey & ":" & LCase(swComp.ReferencedConfiguration)
                End If
                
                If COMP_LEVEL Or Not Contains(processedDocs, docKey) Then
                    
                    If (Not processedDocs) = -1 Then
                        ReDim processedDocs(0)
                    Else
                        ReDim Preserve processedDocs(UBound(processedDocs) + 1)
                    End If
                    
                    processedDocs(UBound(processedDocs)) = docKey
                    
                    Dim color As Long
                    color = RGB(Int(255 * Rnd), Int(255 * Rnd), Int(255 * Rnd))
                    
                    If PRP_NAME <> "" Then
                        
                        Dim prpVal As String
                                    
                        prpVal = GetModelPropertyValue(swRefModel, swComp.ReferencedConfiguration, PRP_NAME)
                        
                        If prpVal <> "" Then
                        
                            If ColorsMap.Exists(prpVal) Then
                                color = ColorsMap(prpVal)
                            Else
                                ColorsMap.Add prpVal, color
                            End If
                        
                        End If
                        
                    End If
                    
                    Dim RGBHex As String
            
                    RGBHex = Right("000000" & Hex(color), 6)
                    
                    Dim dMatPrps(8) As Double
                    
                    dMatPrps(0) = CInt("&H" & Mid(RGBHex, 5, 2)) / 255
                    dMatPrps(1) = CInt("&H" & Mid(RGBHex, 3, 2)) / 255
                    dMatPrps(2) = CInt("&H" & Mid(RGBHex, 1, 2)) / 255
                    dMatPrps(3) = 1
                    dMatPrps(4) = 1
                    dMatPrps(5) = 0.5
                    dMatPrps(6) = 0.3125
                    dMatPrps(7) = 0
                    dMatPrps(8) = 0
                                   
                    If COMP_LEVEL Then
                        swComp.SetMaterialPropertyValues2 dMatPrps, IIf(ALL_CONFIGS, swInConfigurationOpts_e.swAllConfiguration, swInConfigurationOpts_e.swThisConfiguration), Empty
                    Else
                        Dim sConfs(0)  As String
                        sConfs(0) = swComp.ReferencedConfiguration
                        swRefModel.Extension.SetMaterialPropertyValues dMatPrps, IIf(ALL_CONFIGS, swInConfigurationOpts_e.swAllConfiguration, swInConfigurationOpts_e.swSpecifyConfiguration), IIf(ALL_CONFIGS, Empty, sConfs)
                    End If
                
                End If
                
            End If
            
        End If
                
    Next
    
End Sub

Function GetModelPropertyValue(model As SldWorks.ModelDoc2, confName As String, prpName As String) As String
    
    Dim prpVal As String
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    prpVal = GetPropertyValue(swCustPrpMgr, prpName)
    
    If prpVal = "" Then
        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")
        prpVal = GetPropertyValue(swCustPrpMgr, prpName)
    End If
    
    GetModelPropertyValue = prpVal
    
End Function

Function GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String
    Dim resVal As String
    custPrpMgr.Get2 prpName, "", resVal
    GetPropertyValue = resVal
End Function

Function Contains(arr() As String, item As String) As Boolean
    
    If (Not arr) <> -1 Then
    
        Dim i As Integer
        
        For i = 0 To UBound(arr)
            If arr(i) = item Then
                Contains = True
                Exit Function
            End If
        Next
    
    End If
    
    Contains = False
    
End Function
```
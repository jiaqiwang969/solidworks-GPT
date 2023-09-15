---
caption: 为草图分配随机颜色
title: 将随机颜色分配给文档中的草图的宏
description: VBA宏将随机颜色分配给SOLIDWORKS零件或装配体中的所有草图，并提供跳过已分配的草图和未吸收的草图的选项
---

这个VBA宏将随机颜色分配给活动零件或装配体中的所有草图。

宏可以配置为跳过已分配颜色的草图，并仅选择未吸收的草图（例如，未在其他特征中使用的草图）。

~~~vb
Const SKIP_ASSIGNED As Boolean = False '处理所有草图（包括已分配颜色的草图）
Const UNABSORBED_ONLY As Boolean = False '处理所有草图（吸收和未吸收的）
~~~

颜色将在特征外观级别上分配。

~~~ vb
Const SKIP_ASSIGNED As Boolean = True
Const UNABSORBED_ONLY As Boolean = True

Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks

    Set swModel = swApp.ActiveDoc
    
    Dim vFeats As Variant
    vFeats = CollectAllSketchFeatures(swModel.FirstFeature)
    
    If Not IsEmpty(vFeats) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vFeats)
            
            Dim swFeat As SldWorks.Feature
            Set swFeat = vFeats(i)
            
            If Not SKIP_ASSIGNED Or Not HasAppearence(swFeat) Then
                
                If Not UNABSORBED_ONLY Or Not IsAbsorbed(swFeat) Then
                    
                    Dim dMatPrps(8) As Double
                    dMatPrps(0) = Rnd(): dMatPrps(1) = Rnd(): dMatPrps(2) = Rnd()
                    dMatPrps(3) = 1: dMatPrps(4) = 1: dMatPrps(5) = 0.5
                    dMatPrps(6) = 0.4: dMatPrps(7) = 0: dMatPrps(8) = 0
                    
                    Debug.Print "将颜色 " & dMatPrps(0) * 255 & ";" & dMatPrps(1) * 255 & ";" & dMatPrps(2) * 255 & " 分配给 " & swFeat.Name
                    
                    swFeat.SetMaterialPropertyValues2 dMatPrps, swInConfigurationOpts_e.swThisConfiguration, Empty
                    
                End If
                
            End If
            
        Next
        
    End If

End Sub

Function IsAbsorbed(feat As SldWorks.Feature) As Boolean
    
    Dim vFeatChildren As Variant
    vFeatChildren = feat.GetChildren()
    
    IsAbsorbed = Not IsEmpty(vFeatChildren)
    
End Function

Function HasAppearence(feat As SldWorks.Feature) As Boolean
    
    Dim vMatPrpVals As Variant
    vMatPrpVals = feat.GetMaterialPropertyValues2(swInConfigurationOpts_e.swThisConfiguration, Empty)
            
    HasAppearence = vMatPrpVals(0) <> -1 And vMatPrpVals(1) <> -1 And vMatPrpVals(2) <> -1
    
End Function

Function CollectAllSketchFeatures(firstFeat As SldWorks.Feature) As Variant
    
    Const SKETCH_FEAT_TYPE_NAME As String = "ProfileFeature"
    Const SKETCH_3D_FEAT_TYPE_NAME As String = "3DProfileFeature"

    Dim swFeats() As SldWorks.Feature

    Dim swFeat As SldWorks.Feature
    Set swFeat = firstFeat
    
    While Not swFeat Is Nothing
    
        If swFeat.GetTypeName2 = SKETCH_FEAT_TYPE_NAME Or _
            swFeat.GetTypeName2 = SKETCH_3D_FEAT_TYPE_NAME Then
            
            If (Not swFeats) = -1 Then
                ReDim swFeats(0)
            Else
                ReDim Preserve swFeats(UBound(swFeats) + 1)
            End If
            
            Set swFeats(UBound(swFeats)) = swFeat
            
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Wend
    
    If (Not swFeats) = -1 Then
        CollectAllSketchFeatures = Empty
    Else
        CollectAllSketchFeatures = swFeats
    End If
    
End Function
~~~



## 线颜色

这是一个将颜色分配为线颜色而不是特征外观的宏的替代版本。

此宏将为所有选定的草图或所有草图（如果没有选定的草图）分配随机颜色。**UNABSORBED_ONLY** 选项仅在没有选定的草图时考虑。

~~~ vb
Const UNUBSORBED_ONLY As Boolean = True

Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swPart As SldWorks.PartDoc

Sub main()

    Set swApp = Application.SldWorks

    Set swModel = swApp.ActiveDoc
        
    Set swPart = swModel
        
    Dim vFeats As Variant
    
    vFeats = CollectSelectedSketches(swModel)
    
    If IsEmpty(vFeats) Then
        vFeats = CollectAllSketchFeatures(swModel.FirstFeature)
    End If
    
    If Not IsEmpty(vFeats) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vFeats)
            
            Dim swFeat As SldWorks.Feature
            Set swFeat = vFeats(i)
                        
            If False <> swFeat.Select2(False, -1) Then
                swPart.SetLineColor RGB(CInt(255 * Rnd()), CInt(255 * Rnd()), CInt(255 * Rnd()))
            Else
                Err.Raise vbError, "", "无法选择 " & swFeat.Name
            End If
            
        Next
        
    End If
    
    swModel.ClearSelection2 True

End Sub

Function IsAbsorbed(feat As SldWorks.Feature) As Boolean
    
    Dim vFeatChildren As Variant
    vFeatChildren = feat.GetChildren()
    
    IsAbsorbed = Not IsEmpty(vFeatChildren)
    
End Function

Function CollectSelectedSketches(model As SldWorks.ModelDoc2) As Variant
    
    Dim swFeats() As SldWorks.Feature

    Dim swSelMgr As SldWorks.SelectionMgr
    
    Set swSelMgr = model.SelectionManager
    
    Dim i As Integer
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
        
        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelSKETCHES Then
            
            If (Not swFeats) = -1 Then
                ReDim swFeats(0)
            Else
                ReDim Preserve swFeats(UBound(swFeats) + 1)
            End If
            
            Set swFeats(UBound(swFeats)) = swSelMgr.GetSelectedObject6(i, -1)
            
        End If
        
    Next
    
    If (Not swFeats) = -1 Then
        CollectSelectedSketches = Empty
    Else
        CollectSelectedSketches = swFeats
    End If

End Function

Function CollectAllSketchFeatures(firstFeat As SldWorks.Feature) As Variant
    
    Const SKETCH_FEAT_TYPE_NAME As String = "ProfileFeature"
    Const SKETCH_3D_FEAT_TYPE_NAME As String = "3DProfileFeature"

    Dim swFeats() As SldWorks.Feature

    Dim swFeat As SldWorks.Feature
    Set swFeat = firstFeat
    
    While Not swFeat Is Nothing
    
        If swFeat.GetTypeName2 = SKETCH_FEAT_TYPE_NAME Or _
            swFeat.GetTypeName2 = SKETCH_3D_FEAT_TYPE_NAME Then
            
            If Not UNUBSORBED_ONLY Or Not IsAbsorbed(swFeat) Then
            
                If (Not swFeats) = -1 Then
                    ReDim swFeats(0)
                Else
                    ReDim Preserve swFeats(UBound(swFeats) + 1)
                End If
                
                Set swFeats(UBound(swFeats)) = swFeat
            
            End If
            
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Wend
    
    If (Not swFeats) = -1 Then
        CollectAllSketchFeatures = Empty
    Else
        CollectAllSketchFeatures = swFeats
    End If
    
End Function
~~~
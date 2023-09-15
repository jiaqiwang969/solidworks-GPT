---
caption: Assign Random Colors to Sketches
title: Macro to Assign Random Colors to Sketches in a Document
description: This VBA macro assigns random colors to all sketches in a SOLIDWORKS part or assembly, with options to skip sketches that already have assigned colors and to select only unabsorbed sketches.
---

This VBA macro assigns random colors to all sketches in the active part or assembly.

The macro can be configured to skip sketches that already have assigned colors and to select only unabsorbed sketches (i.e., sketches that are not used in other features).

```vb
Const SKIP_ASSIGNED As Boolean = False 'Process all sketches (including sketches with assigned colors)
Const UNABSORBED_ONLY As Boolean = False 'Process all sketches (absorbed and unabsorbed)
```

The colors are assigned at the feature appearance level.

``` vb
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
                    
                    Debug.Print "Assigning color " & dMatPrps(0) * 255 & ";" & dMatPrps(1) * 255 & ";" & dMatPrps(2) * 255 & " to " & swFeat.Name
                    
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
```



## Line Colors

Here is another version of the macro that assigns colors as line colors instead of feature appearances.

This macro assigns random colors to all selected sketches or, if no sketches are selected, to all sketches. The **UNABSORBED_ONLY** option is considered only when no sketches are selected.

``` vb
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
                Err.Raise vbError, "", "Failed to select " & swFeat.Name
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
```
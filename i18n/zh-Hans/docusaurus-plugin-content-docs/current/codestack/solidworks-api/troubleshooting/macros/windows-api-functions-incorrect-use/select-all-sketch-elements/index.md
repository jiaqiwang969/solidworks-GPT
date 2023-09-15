---
title: 使用SOLIDWORKS API选择所有草图元素
caption: 选择所有草图元素
description: 本示例演示了如何使用SOLIDWORKS API中的直接::Select方法选择活动草图中的所有草图线段和草图点。
image: select-all-sketch-elements.png
labels: [选择, 草图线段, 草图点]
---
![在活动草图中选择的草图元素](select-all-sketch-elements.png){ width=250 }

本示例演示了如何使用SOLIDWORKS API中的直接::Select方法选择活动草图中的所有草图线段和草图点。

``` vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSketch As SldWorks.sketch
        Set swSketch = swModel.SketchManager.ActiveSketch
        
        If Not swSketch Is Nothing Then
            
            swModel.ClearSelection2 True
            
            SelectAllSketchSegments swSketch
            
            SelectAllSketchPoints swSketch
            
        Else
            MsgBox "请打开草图"
        End If
        
    Else
        MsgBox "请打开零件或装配体"
    End If
    
End Sub

Sub SelectAllSketchSegments(sketch As SldWorks.sketch)
    
    Dim vSegs As Variant
        
    vSegs = sketch.GetSketchSegments
    
    Dim i As Integer
    
    For i = 0 To UBound(vSegs)
        Dim swSkSeg As SldWorks.SketchSegment
        Set swSkSeg = vSegs(i)
        swSkSeg.Select4 True, Nothing
    Next
    
End Sub

Sub SelectAllSketchPoints(sketch As SldWorks.sketch)
    
    Dim vPoints As Variant
        
    vPoints = sketch.GetSketchPoints2
    
    Dim i As Integer
    
    For i = 0 To UBound(vPoints)
        Dim swSkPt As SldWorks.SketchPoint
        Set swSkPt = vPoints(i)
        swSkPt.Select4 True, Nothing
    Next
    
End Sub
```
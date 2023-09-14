---
title: Get sketch lines of sheet metal sketched bend using SOLIDWORKS API
caption: Get Sketch Lines For Sheet Metal Sketched Bend Feature
description: Finds all straight lines (bends) of the sheet metal Sketched Bend feature and selects all segments
image: sheet-metal-sketched-bend.png
labels: [example, sheet metal, sketched bend, solidworks api]
redirect-from:
  - /2018/03/solidworks-api-sheet-metal-get-sketched-bends.html
---
Macro finds all straight lines (bends) of the sheet metal *Sketched Bend* feature and selects all segments using SOLIDWORKS API.

![Sketch of the sheet metal sketched bend feature](sheet-metal-sketched-bend.png){ width=400 }

There is no direct SOLIDWORKS API method of getting the bends, however bends are represented as sketch segments in the sketch owned by sheet metal feature. So in order to find bends it is required to find this sketch and parse its content.

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
        
    If Not swModel Is Nothing Then
    
        Set swSelMgr = swModel.SelectionManager
        
        Dim swFeat As SldWorks.Feature
        
        Set swFeat = swSelMgr.GetSelectedObject6(1, -1)
        
        If swFeat.GetTypeName2 = "SM3dBend" Then
        
            Dim swBendSketch As SldWorks.Sketch
            
            Set swBendSketch = FindBendSketch(swFeat)
            
            Dim vSegs As Variant
            vSegs = swBendSketch.GetSketchSegments()
            
            swModel.ClearSelection2 True
            
            Dim i As Integer
            
            For i = 0 To UBound(vSegs)
                
                Dim swSkSeg As SldWorks.SketchSegment
                Set swSkSeg = vSegs(i)
                
                If swSkSeg.GetType() = swSketchSegments_e.swSketchLINE Then
                    swSkSeg.Select4 True, Nothing
                End If
                
            Next
            
        Else
            MsgBox "Please select sketched bend feature"
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Function FindBendSketch(swFeat As SldWorks.Feature) As SldWorks.Sketch
    
    Dim swSubFeat As SldWorks.Feature
    
    Set swSubFeat = swFeat.GetFirstSubFeature
    
    Do While Not swSubFeat Is Nothing And swSubFeat.GetTypeName2() <> "ProfileFeature"
        
        Set swSubFeat = swSubFeat.GetNextSubFeature
        
    Loop
    
    If Not swSubFeat Is Nothing Then
    
        Set FindBendSketch = swSubFeat.GetSpecificFeature2
        
    Else
        MsgBox "Failed to find the skecth with bends"
        End
    End If
    
End Function


~~~



Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swFeat As SldWorks.Feature
        Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)
        
        Stop 'Activate assembly and select the component
        
        Dim swAssy As SldWorks.AssemblyDoc
        Set swAssy = swApp.ActiveDoc
        
        Dim swComp As SldWorks.Component2
        Set swComp = swAssy.SelectionManager.GetSelectedObjectsComponent4(1, -1)
        Dim swCompFeat As SldWorks.Feature
        Set swCompFeat = swComp.GetCorresponding(swFeat)
        
        Dim swCompFeatByName As SldWorks.Feature
        Set swCompFeatByName = swComp.FeatureByName(swFeat.Name)
        
        Debug.Print "Pointers are equal: " & (swCompFeat Is swCompFeatByName)
        
        MoveSketchPoints swCompFeat, swAssy
        
    Else
        MsgBox "Please open assembly document"
    End If
    
End Sub

Sub MoveSketchPoints(sketchFeat As SldWorks.Feature, editModel As SldWorks.ModelDoc2)
    
    Dim swSketch As SldWorks.Sketch
    Set swSketch = sketchFeat.GetSpecificFeature2
    
    Debug.Print "Sketch Feature Selected: " & sketchFeat.Select2(False, -1)
    
    editModel.SketchManager.Insert3DSketch True
    
    Dim vSkPts As Variant
    vSkPts = swSketch.GetSketchPoints2()
    
    Dim i As Integer
    
    For i = 0 To UBound(vSkPts)
        Dim swSkPt As SldWorks.SketchPoint
        Set swSkPt = vSkPts(i)
        swSkPt.X = swSkPt.X + 0.01
        swSkPt.Y = swSkPt.Y + 0.01
        swSkPt.Z = swSkPt.Z + 0.01
    Next
    
    editModel.SketchManager.Insert3DSketch True
    
End Sub
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    Dim swSkPt As SldWorks.SketchPoint
    Set swSkPt = swModel.SelectionManager.GetSelectedObject6(1, -1)
    
    Dim swSketch As SldWorks.Sketch
    Set swSketch = swSkPt.GetSketch
    
    'get the sketch to model transform (by inversing the model to sketch transform)
    Dim swTransform As SldWorks.MathTransform
    Set swTransform = swSketch.ModelToSketchTransform.Inverse
        
    Dim swMathUtils As SldWorks.MathUtility
    Set swMathUtils = swApp.GetMathUtility
    
    Dim dPt(2) As Double
    dPt(0) = swSkPt.X
    dPt(1) = swSkPt.Y
    dPt(2) = swSkPt.Z
    
    'create math point from the coordinate
    Dim swMathPt As SldWorks.MathPoint
    Set swMathPt = swMathUtils.CreatePoint(dPt)
    
    'multiple transform to move the point
    Set swMathPt = swMathPt.MultiplyTransform(swTransform)
    
    'read new coordinate values
    Dim vPt As Variant
    vPt = swMathPt.ArrayData
    
    Debug.Print vPt(0) & "; " & vPt(1) & "; " & vPt(2)
    
End Sub
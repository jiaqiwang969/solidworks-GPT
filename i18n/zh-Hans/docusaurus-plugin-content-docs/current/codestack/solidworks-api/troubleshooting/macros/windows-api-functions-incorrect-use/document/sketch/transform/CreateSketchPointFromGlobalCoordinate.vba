Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
        
    Dim swSketch As SldWorks.Sketch
    Set swSketch = swModel.SketchManager.ActiveSketch
    
    'get the model to sketch transform
    Dim swTransform As SldWorks.MathTransform
    Set swTransform = swSketch.ModelToSketchTransform
        
    Dim swMathUtils As SldWorks.MathUtility
    Set swMathUtils = swApp.GetMathUtility
    
    Dim dPt(2) As Double
    dPt(0) = 0.025
    dPt(1) = 0
    dPt(2) = 0.1
    
    'create math point from the coordinate
    Dim swMathPt As SldWorks.MathPoint
    Set swMathPt = swMathUtils.CreatePoint(dPt)
    
    'multiple transform to move the point
    Set swMathPt = swMathPt.MultiplyTransform(swTransform)
    
    'read new coordinate values
    Dim vPt As Variant
    vPt = swMathPt.ArrayData
    
    swModel.SketchManager.CreatePoint vPt(0), vPt(1), vPt(2)
    
End Sub
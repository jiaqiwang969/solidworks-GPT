Const PI As Double = 3.14159265359

Dim swApp As SldWorks.SldWorks
Dim swMathUtils As SldWorks.MathUtility
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr
Dim swComp As SldWorks.Component2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swMathUtils = swApp.GetMathUtility
    
    Set swModel = swApp.ActiveDoc
    
    Set swSelMgr = swModel.SelectionManager
    
    Set swComp = swSelMgr.GetSelectedObject6(1, -1)
    
    Dim swTransform As SldWorks.MathTransform
    Set swTransform = swComp.Transform2
    
    Debug.Print "Angle between X axes: " & Round(GetAngle(1, 0, 0, swTransform) * 180 / PI, 2) & " deg"
    Debug.Print "Angle between Y axes: " & Round(GetAngle(0, 1, 0, swTransform) * 180 / PI, 2) & " deg"
    Debug.Print "Angle between Z axes: " & Round(GetAngle(0, 0, 1, swTransform) * 180 / PI, 2) & " deg"
    
End Sub

Function GetAngle(x As Double, y As Double, z As Double, transform As SldWorks.MathTransform) As Variant
    
    Dim dVect(2) As Double
    dVect(0) = x: dVect(1) = y: dVect(2) = z
    
    Dim swMathVecOrig As SldWorks.MathVector
    Dim swMathVecTrans As SldWorks.MathVector
    
    Set swMathVecOrig = swMathUtils.CreateVector(dVect)
    
    Set swMathVecTrans = swMathVecOrig.MultiplyTransform(transform)
    
    'cos a= a*b/(|a|*|b|)
    GetAngle = ACos(swMathVecOrig.Dot(swMathVecTrans) / (swMathVecOrig.GetLength() * swMathVecTrans.GetLength()))
    
End Function

Function ACos(val As Double) As Double
    
    If val = 1 Then
        ACos = 0
    ElseIf val = -1 Then
        ACos = 4 * Atn(1)
    Else
        ACos = Atn(-val / Sqr(-val * val + 1)) + 2 * Atn(1)
    End If
    
End Function
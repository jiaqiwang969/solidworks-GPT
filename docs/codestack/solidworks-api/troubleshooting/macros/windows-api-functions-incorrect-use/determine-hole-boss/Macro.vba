Const PI As Double = 3.14159265359

Dim swApp As SldWorks.SldWorks
Dim swMathUtils As SldWorks.MathUtility

Sub main()

    Set swApp = Application.SldWorks
        
    Set swMathUtils = swApp.GetMathUtility
        
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swSelMgr As SldWorks.SelectionMgr
        
        Set swSelMgr = swModel.SelectionManager
        
        Set swSelMgr = swModel.SelectionManager

        Dim swFace As SldWorks.Face2
        Set swFace = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swFace Is Nothing Then
            
            If IsHole(swFace) Then
                MsgBox "Selected face is hole"
            Else
                MsgBox "Selected face is boss"
            End If
            
        Else
            MsgBox "Please select face"
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Function IsHole(face As SldWorks.Face2) As Boolean
    
    Dim swSurf As SldWorks.Surface
    Set swSurf = face.GetSurface
    
    If swSurf.IsCylinder() Then
    
        Dim uvBounds As Variant
        uvBounds = face.GetUVBounds
        
        Dim vEvalData As Variant
        vEvalData = swSurf.Evaluate((uvBounds(1) - uvBounds(0)) / 2, (uvBounds(3) - uvBounds(2)) / 2, 1, 1)
        
        Dim dPt(2) As Double
        dPt(0) = vEvalData(0): dPt(1) = vEvalData(1): dPt(2) = vEvalData(2)
        
        Dim sense As Integer
        If False = face.FaceInSurfaceSense() Then
            sense = -1
        Else
            sense = 1
        End If
        
        Dim dNormVec(2) As Double
        dNormVec(0) = vEvalData(UBound(vEvalData) - 2) * sense: dNormVec(1) = vEvalData(UBound(vEvalData) - 1) * sense: dNormVec(2) = vEvalData(UBound(vEvalData)) * sense
        
        Dim vCylParams As Variant
        vCylParams = swSurf.CylinderParams
        Dim dOrig(2) As Double
        dOrig(0) = vCylParams(0): dOrig(1) = vCylParams(1): dOrig(2) = vCylParams(2)
        
        Dim dDirVec(2) As Double
        dDirVec(0) = dPt(0) - dOrig(0): dDirVec(1) = dPt(1) - dOrig(1): dDirVec(2) = dPt(2) - dOrig(2)
        Dim swDirVec As MathVector
        
        Set swDirVec = swMathUtils.CreateVector(dDirVec)
        
        Dim swNormVec As SldWorks.MathVector
        Set swNormVec = swMathUtils.CreateVector(dNormVec)
        
        IsHole = GetAngle(swDirVec, swNormVec) < PI / 2
        
    Else
        Err.Raise vbError, , "Selected face is not cylindrical"
    End If
    
End Function

Function GetAngle(vec1 As MathVector, vec2 As MathVector) As Double
    
    'cos a= a*b/(|a|*|b|)
    GetAngle = ACos(vec1.Dot(vec2) / (vec1.GetLength() * vec2.GetLength()))
    
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
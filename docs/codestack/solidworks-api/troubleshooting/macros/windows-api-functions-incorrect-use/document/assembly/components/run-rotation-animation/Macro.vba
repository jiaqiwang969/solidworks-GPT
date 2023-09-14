Const PI As Double = 3.14159265359

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swSelMgr As SldWorks.SelectionMgr
        
        Set swSelMgr = swModel.SelectionManager
        
        Dim swComp As SldWorks.Component2
        Set swComp = swSelMgr.GetSelectedObjectsComponent4(1, -1)
        
        If Not swComp Is Nothing Then
            RunRotationAnimation swModel, swComp
        Else
            MsgBox "Please select component"
        End If
        
    Else
        MsgBox "Please open assembly"
    End If
    
End Sub

Sub RunRotationAnimation(assy As SldWorks.AssemblyDoc, comp As SldWorks.Component2, Optional speed As Double = 1)
    
    Dim swSelMgr As SldWorks.SelectionMgr
        
    Set swSelMgr = assy.SelectionManager
        
    Dim rotStep As Double
    rotStep = PI * 2 / 360 * speed
    
    Dim curAng As Double
    
    Dim swModelView As SldWorks.ModelView
    Set swModelView = assy.ActiveView
            
    assy.EnablePresentation = True
    
    While swSelMgr.GetSelectedObjectCount2(-1) <> 0
        For curAng = 0 To PI * 2 Step rotStep
            Dim animStep As MathTransform
            Set animStep = GetTransform(comp, curAng)
            comp.PresentationTransform = animStep
            swModelView.GraphicsRedraw Nothing
            DoEvents
        Next
    Wend
    
    assy.EnablePresentation = False
    
End Sub

Function GetTransform(comp As SldWorks.Component2, angle As Double) As MathTransform
    
    Dim swMathUtils As SldWorks.MathUtility
    
    Set swMathUtils = swApp.GetMathUtility
    
    Dim swOrigPt As SldWorks.MathPoint
    Dim dPt(2) As Double
    dPt(0) = 0: dPt(1) = 0: dPt(2) = 0
    
    Set swOrigPt = swMathUtils.CreatePoint(dPt)
    
    Set swOrigPt = swOrigPt.MultiplyTransform(comp.Transform2)
    
    Dim swAxisVec As SldWorks.MathVector
    Dim dVec(2) As Double
    dVec(0) = 0: dVec(1) = 1: dVec(2) = 0
    
    Set swAxisVec = swMathUtils.CreateVector(dVec)
    
    Set swAxisVec = swAxisVec.MultiplyTransform(comp.Transform2)
    
    Set GetTransform = swMathUtils.CreateTransformRotateAxis(swOrigPt, swAxisVec, angle)
    
End Function
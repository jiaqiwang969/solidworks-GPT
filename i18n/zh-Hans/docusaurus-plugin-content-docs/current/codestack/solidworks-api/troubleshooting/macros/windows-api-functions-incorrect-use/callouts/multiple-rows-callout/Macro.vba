Dim swApp As SldWorks.SldWorks
Dim swModel As ModelDoc2
Dim swSelMgr As SelectionMgr
Dim swMathUtilss As MathUtility

Sub main()

    Set swApp = Application.SldWorks
    
    Set swMathUtils = swApp.GetMathUtility
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Set swSelMgr = swModel.SelectionManager
        
        Dim swMathPt As MathPoint
        Dim dPt(2) As Double
    
        dPt(0) = 0#: dPt(1) = 0#: dPt(2) = 0#
    
        Set swMathPt = swMathUtils.CreatePoint(dPt)
    
        Dim swCallout As SldWorks.Callout
        Dim swCalloutHandler As CalloutHandler
        
        Set swCalloutHandler = New CalloutHandler
        
        Set swCallout = swSelMgr.CreateCallout2(2, swCalloutHandler)
        swCallout.TargetStyle = swCalloutTargetStyle_e.swCalloutTargetStyle_Triangle
             
        swCallout.Label2(0) = "Row 1"
        swCallout.Value(0) = "Value 1"
        swCallout.SetTargetPoint 0, 0.01, 0.01, 0.01
        swCallout.ValueInactive(0) = True
        
        swCallout.Label2(1) = "Row 1"
        swCallout.Value(1) = "Value 1"
        swCallout.SetTargetPoint 1, 0.02, 0.02, 0.02
        swCallout.ValueInactive(1) = False
        
        swCallout.SetLeader True, True
        swCallout.Position = swMathPt
                
        swCallout.Display True
        
        Stop
        
        swCallout.Display False
        Set swCallout = Nothing
        
    Else
        MsgBox "Please open the model"
    End If
        
End Sub
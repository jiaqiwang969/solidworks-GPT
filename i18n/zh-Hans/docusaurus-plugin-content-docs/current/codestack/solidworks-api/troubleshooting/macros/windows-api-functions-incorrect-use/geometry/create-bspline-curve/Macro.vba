Type DoubleRec
    dValue As Double
End Type
Type Int2Rec
    iLower As Long
    iUpper As Long
End Type


Dim swApp As SldWorks.SldWorks
Dim swModeler As SldWorks.Modeler

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    Set swModeler = swApp.GetModeler
    
    Dim dProps(1) As Double
    dProps(0) = PackToDouble(3, 4)
    dProps(1) = PackToDouble(4, 0)
    
    Dim dKnots(7) As Double
    dKnots(0) = 0: dKnots(1) = 0: dKnots(2) = 0: dKnots(3) = 0
    dKnots(4) = 1: dKnots(5) = 1: dKnots(6) = 1: dKnots(7) = 1
    
    Dim dCtrlPts(11) As Double
    dCtrlPts(0) = 0: dCtrlPts(1) = 0: dCtrlPts(2) = 0
    dCtrlPts(3) = -0.15: dCtrlPts(4) = 0: dCtrlPts(5) = 0.05
    dCtrlPts(6) = 0.25: dCtrlPts(7) = 0: dCtrlPts(8) = 0.2
    dCtrlPts(9) = -0.05: dCtrlPts(10) = 0: dCtrlPts(11) = 0.25
    
    Dim swCurve As SldWorks.Curve
    Set swCurve = swModeler.CreateBsplineCurve(dProps, dKnots, dCtrlPts)
    
    Dim swCurveBody As SldWorks.Body2
    Set swCurveBody = swCurve.CreateWireBody
    
    swCurveBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
    
    Stop
    
End Sub

Function PackToDouble(val1 As Long, val2 As Long) As Double
    
    Dim dr As DoubleRec
    Dim i2r As Int2Rec
    
    i2r.iLower = val1
    i2r.iUpper = val2
    LSet dr = i2r
    
    PackToDouble = dr.dValue
    
End Function
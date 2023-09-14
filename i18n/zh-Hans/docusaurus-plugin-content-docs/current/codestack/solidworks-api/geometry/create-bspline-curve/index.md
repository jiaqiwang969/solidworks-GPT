---
title: Create and display b-spline curve using SOLIDWORKS API
caption: Create B-Spline Curve
description: VBA example demonstrates how to create and preview b-spline curve from the sample data using SOLIDWORKS API
image: bspline-curve-preview.png
labels: [curve, bspline, modeler]
---
![Preview of b-spline curve](bspline-curve-preview.png){ width=250 }

This VBA example demonstrates the use of [IModeler::CreateBsplineCurve](https://help.solidworks.com/2012/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler~CreateBsplineCurve.html) method to create and preview b-spline curve using sample data.

Open part document and run the macro. Curve will be previewed and macro stops. Continue the macro to dispose the curve.

Follow the [Get B-Spline Curve Parameters](/docs/codestack/solidworks-api/geometry/get-bspline-parameters/) example for a guide of extracting the required data from the selected edge.

~~~ vb
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
~~~


---
title: 使用SOLIDWORKS API创建和显示B样条曲线
caption: 创建B样条曲线
description: 此VBA示例演示了如何使用SOLIDWORKS API从示例数据创建和预览B样条曲线。
image: bspline-curve-preview.png
labels: [curve, bspline, modeler]
---
![B样条曲线预览](bspline-curve-preview.png){ width=250 }

此VBA示例演示了使用示例数据和[IModeler::CreateBsplineCurve](https://help.solidworks.com/2012/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler~CreateBsplineCurve.html)方法创建和预览B样条曲线。

打开零件文档并运行宏。曲线将被预览并停止宏。继续运行宏以销毁曲线。

请参考[获取B样条曲线参数](/docs/codestack/solidworks-api/geometry/get-bspline-parameters/)示例，了解如何从所选边缘中提取所需数据的指南。

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
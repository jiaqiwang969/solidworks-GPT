---
title:  Get b-spline parameters from the selected edge using SOLIDWORKS API
caption: Get B-Spline Parameters
---
 Get parameters of b-spline curve (dimension, order, periodicity, control and knot points) from the edge selected in the graphics view using SOLIDWORKS API
image: selected-bspline-edge.png
labels: [bspline, parameters, modeler, edge]
---
![Selected b-spline edge](selected-bspline-edge.png){ width=250 }

This VBA example extracts the parameters (dimension, order, periodicity, control and knot points) from the selected edge of b-spline type (e.g. edge derived from the spline segment). The extracted data can be used in the [IModeler::CreateBsplineCurve](https://help.solidworks.com/2012/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler~CreateBsplineCurve.html) SOLIDWORKS API method to build the curve of the same geometry.

The data is output into the Immediate window of VBA editor in the following format:

~~~
Props:
 Dimension Val 
 Order Val
 Control Points Count Val
 Periodic Val
Knots:
 Val 1
 ...
 Val N
Control Points:
 Val 1
 ...
 Val N
~~~

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    Set swSelMgr = swModel.SelectionManager
    
    Dim swEdge As SldWorks.Edge
    
    Set swEdge = swSelMgr.GetSelectedObject6(1, -1)
    
    Dim swCurve As SldWorks.Curve
    
    Set swCurve = swEdge.GetCurve
    
    Dim swSplineData As SldWorks.SplineParamData
    Set swSplineData = swCurve.GetBCurveParams5(False, False, False, False)
    
    Dim i As Integer
    
    Debug.Print "Props:"
    Debug.Print swSplineData.Dimension
    Debug.Print swSplineData.Order
    Debug.Print swSplineData.ControlPointsCount
    Debug.Print swSplineData.Periodic
    
    Debug.Print "Knots:"
    Dim vKnotPts As Variant
    swSplineData.GetKnotPoints vKnotPts
    
    For i = 0 To UBound(vKnotPts)
        Debug.Print vKnotPts(i)
    Next
    
    Debug.Print "Control Points:"
    Dim vCtrlPts As Variant
    swSplineData.GetControlPoints vCtrlPts
    For i = 0 To UBound(vCtrlPts)
        Debug.Print vCtrlPts(i)
    Next
    
End Sub
~~~


---
title: Create temp cylindrical sheet body using SOLIDWORKS modeler API
caption: Create Temp Cylindrical Sheet Body
description: Example demonstrates how to create temp body of a cylindrical sheet
image: cylindrical-surface.png
labels: [topology, geometry, sheet, modeler, cylinder]
---
![Cylindrical sheet body](cylindrical-surface.png)

This example demonstrates how to create a sheet body from the cylindrical surface using SOLIDWORKS API.

Run the macro and temp body is displayed. Body can be rotated and selected but it is not presented in the feature tree. Continue the macro execution to destroy the body.

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swModeler As SldWorks.Modeler

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Set swModeler = swApp.GetModeler
        
        Const RADIUS As Double = 0.1
        Const HEIGHT As Double = 0.2
        
        Dim dCenter(2) As Double
        Dim dAxis(2) As Double
        Dim dRef(2) As Double
        
        Dim swSurf As SldWorks.Surface
        Dim swBody As SldWorks.Body2
        Dim swCurve(2) As SldWorks.Curve
        
        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0
        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1
        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0
        
        Set swSurf = swModeler.CreateCylindricalSurface2(dCenter, dAxis, dRef, RADIUS)
        
        Dim dPt(2) As Double
        dPt(0) = 0: dPt(1) = RADIUS: dPt(2) = 0
        Set swCurve(0) = swModeler.CreateArc(dCenter, dAxis, RADIUS, dPt, dPt)
               
        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = HEIGHT
        dPt(0) = 0: dPt(1) = RADIUS: dPt(2) = HEIGHT
        Set swCurve(2) = swModeler.CreateArc(dCenter, dAxis, RADIUS, dPt, dPt)
        
        Set swBody = swSurf.CreateTrimmedSheet4(swCurve, True)
        
        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable
        
        Stop 'continue to hide the body
        
        Set swBody = Nothing
        
    Else
        MsgBox "Please open the part document"
    End If
    
End Sub
~~~



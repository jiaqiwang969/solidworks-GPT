---
title: Creating a Temporary Sheet Body from a Toroidal Surface Using the SOLIDWORKS API
caption: Creating a Temporary Sheet Body
description: This example demonstrates how to create a sheet body from a toroidal surface using the SOLIDWORKS API.
image: toroidal-surface.png
labels: [Topology, Geometry, Body, Model, Cylinder]
---

![Toroidal Surface](toroidal-surface.png)

This example demonstrates how to create a sheet body from a toroidal surface using the SOLIDWORKS API.

The geometry is created using the [IModeler::CreateToroidalSurface](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createtoroidalsurface.html) method of the SOLIDWORKS API.

After running the macro, a temporary sheet body will be displayed. You can rotate and select the body, but it will not appear in the FeatureManager design tree. Continue running the macro to destroy the body.

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swModeler As SldWorks.Modeler

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Set swModeler = swApp.GetModeler
    
        Dim dCenter(2) As Double
        Dim dAxis(2) As Double
        Dim dRef(2) As Double
        
        Const MAJOR_RADIUS As Double = 0.1
        Const MINOR_RADIUS As Double = 0.05
        
        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0
        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1
        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0
        
        Dim swSurf As SldWorks.Surface
        Set swSurf = swModeler.CreateToroidalSurface(dCenter, dAxis, dRef, MAJOR_RADIUS, MINOR_RADIUS)
        
        Dim swBody As SldWorks.Body2
        Dim swCurve(0) As SldWorks.Curve
        Set swBody = swSurf.CreateTrimmedSheet(swCurve)
        
        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable
    
        Stop 'Continue to hide the body
        
        Set swBody = Nothing
        
    Else
        MsgBox "Please open a part document"
    End If
    
End Sub
```
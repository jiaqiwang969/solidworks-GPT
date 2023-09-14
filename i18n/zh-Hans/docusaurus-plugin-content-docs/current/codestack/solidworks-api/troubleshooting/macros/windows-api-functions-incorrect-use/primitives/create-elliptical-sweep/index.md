---
title: Create elliptical swept temp body using SOLIDWORKS modeler API
caption: Create Elliptical Swept Temp Body
description: Example demonstrates how to sweep the circular profile along elliptical path to create a temp body using SOLIDWORKS API and IModeler::CreateSweptBody method
image: elliptical-sweep.png
labels: [topology, geometry, sheet, modeler, sphere]
---
![Circular profile swept along elliptical path](elliptical-sweep.png){ width=250 }

This example demonstrates how to sweep the circular profile along elliptical path to create a temp body using SOLIDWORKS API.

The [IModeler::CreateSweptBody](https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModeler~CreateSweptBody.html) SOLIDWORKS API method requires profile and path to be preselected which means curves cannot be used for sweep operation.

However macro demonstrates how to create edges from the curves in the temp wire bodies.

Using the [Selecting Objects For API Only](/docs/codestack/solidworks-api/document/selection/api-only-selection/) technique allows to create sweep body without displaying any wire bodies and without any visible selection in the graphics area. All the user selections will be also preserved.

* Open part document
* Optionally select any object (this will not affect the sweep operation).
* Run the macro. Macro displays the temp body and all the user selected objects are preserved.
* Macro stops the execution
* Continue the macro to hide the preview

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
                
        Dim swSweptBody As SldWorks.Body2
                
        Dim swPath As SldWorks.Curve
        
        Set swPath = GetPath()
        
        Dim vPtOnPath As Variant
        
        vPtOnPath = swPath.GetClosestPointOn(0, 0, 0)
        
        Dim dCenter(2) As Double
        dCenter(0) = vPtOnPath(0): dCenter(1) = vPtOnPath(1): dCenter(2) = vPtOnPath(2)
        
        Dim swProfile As SldWorks.Curve
        Set swProfile = GetProfile(dCenter)
        
        Set swSweptBody = CreateSweptBody(swModel, swProfile, swPath)

        swSweptBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        
        Stop
        Set swSweptBody = Nothing
        
    Else
        MsgBox "Please open model"
    End If

End Sub

Function CreateSweptBody(model As SldWorks.ModelDoc2, profile As SldWorks.Curve, path As SldWorks.Curve) As SldWorks.Body2
    
    Dim swModeler As SldWorks.modeler
    Set swModeler = swApp.GetModeler
    
    Dim swProfileBody As SldWorks.Body2
    Set swProfileBody = profile.CreateWireBody
        
    Dim swPathBody As SldWorks.Body2
    Set swPathBody = path.CreateWireBody()
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = model.SelectionManager
    
    swSelMgr.SuspendSelectionList

    AddToCurrentSelectionSet swSelMgr, swProfileBody.GetEdges(), 1
    AddToCurrentSelectionSet swSelMgr, swPathBody.GetEdges(), 4
    
    Dim swSweptBody As SldWorks.Body2
    Set swSweptBody = swModeler.CreateSweptBody(model, True, False, swTwistControlType_e.swTwistControlFollowPath, True, False, swTangencyType_e.swTangencyNone, swTangencyType_e.swTangencyNone, False, 0, 0, swThinWallType_e.swThinWallMidPlane, 0, 0, False)
        
    Set CreateSweptBody = swSweptBody
    
    Set swProfileBody = Nothing
    Set swPathBody = Nothing
    
    swSelMgr.ResumeSelectionList
    
End Function

Sub AddToCurrentSelectionSet(selMgr As SldWorks.SelectionMgr, vObjects As Variant, selMark As Integer)
    
    Dim swSelData As SldWorks.SelectData
    
    Set swSelData = selMgr.CreateSelectData
    
    swSelData.Mark = selMark
    
    Dim i As Integer
    
    For i = 0 To UBound(vObjects)
        Dim obj As Object
        Set obj = vObjects(i)
        selMgr.AddSelectionListObject obj, swSelData
    Next
    
End Sub

Function GetProfile(center As Variant) As SldWorks.Curve

    Dim swModeler As SldWorks.modeler
    Set swModeler = swApp.GetModeler
    
    Dim dAxis(2) As Double
    dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1
    
    Const radius As Double = 0.01
    Dim dStartPt(2) As Double
    dStartPt(0) = radius + center(0): dStartPt(1) = center(1): dStartPt(2) = center(2)
    
    Dim swProfileCurve As SldWorks.Curve
    Set swProfileCurve = swModeler.CreateArc(center, dAxis, radius, dStartPt, dStartPt)
    
    Set GetProfile = swProfileCurve
    
End Function

Function GetPath() As SldWorks.Curve

    Dim swModeler As SldWorks.modeler
    Set swModeler = swApp.GetModeler

    Const majorRadius As Double = 0.2
    Const minorRadius As Double = 0.1
    
    Dim dCenter(2) As Double
    dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0
    
    Dim dMajorAxis(2) As Double
    dMajorAxis(0) = 0.5: dMajorAxis(1) = 0: dMajorAxis(2) = 1
    
    Dim dMinorAxis(2) As Double
    dMinorAxis(0) = 0.25: dMinorAxis(1) = 1: dMinorAxis(2) = 0
    
    Dim swPath As SldWorks.Curve
    
    Set swPath = swModeler.CreateEllipse(dCenter, majorRadius, minorRadius, dMajorAxis, dMinorAxis)

    Set GetPath = swPath

End Function
~~~



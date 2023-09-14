---
title: Macro slices body by sections using SOLIDWORKS API
caption: Slice Body By Sections
description: Example demonstrates how to slice body by sections and extract the section data from the slices using SOLIDWORKS API
image: sliced-sections.png
labels: [slice, projection, intersection, modeler, temp body]
---
![Section slices of the body](sliced-sections.png){ width=350 }

This example demonstrates how to slice the selected body and find the section properties of the resulting section slices using SOLIDWORKS API.

* Specify the number of required slices in the *SLICES_COUNT* constant
~~~ vb
Const SLICES_COUNT As Integer = 100
~~~
* Select solid body in Part document
* As the result:
    * Body is sliced in Y direction
    * Area of each slice is output to the immediate window in VBA editor
    * Previews of each slice is displayed in the graphics area
* Continue the macro to hide the preview

## Algorithm

### Identifying the starting point and the maximum length of the body

* Find 2 extreme points in positive and negative direction of the direction vector (Y vector in this example)
* Project those points onto the direction vector line (vector can be fixed at any point, in this example it is fixed at 0, 0, 0).
* Once projected calculate the distance between points - this will be equal to the maximum length of the body
* First extreme point is a starting point

### Identifying the maximum radius of the body
It is only required to find big enough radius to cover the body. This radius will be used to create a planar body for intersection purposes. In this example the maximum radius is equal to the diagonal of the bounding box which will ensure the planar section will cover the input body

### Calculate sections
* Calculate the step of section
* For each section move the starting point by the step. Sections at end points should be skipped as it won't produce any intersection results
* At each step create a temp section plane (disc) and intersect it with the solid body
    * Result of the intersection is the sheet body (or bodies) which is a section slice at this position
    * Store the pointer to the section in the collection
    * All the properties can be accessed from the resulting body (e.g. surface area)

### Preview the results
* Display each of the resulting bodies as a preview
* Stop the execution of the macro to validate the result
    * It might be required to hide or change the transparency of the original body to see the sections displayed
* Continue macro execution. This will clear the preview

~~~ vb
Const SLICES_COUNT As Integer = 100

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swBody As SldWorks.Body2
        Set swBody = swModel.SelectionManager.GetSelectedObject6(1, -1)
                        
        If Not swBody Is Nothing Then
            
            Dim startTime As Double
            startTime = Timer
            
            Dim swSliceBodies As Collection
            Set swSliceBodies = New Collection
            
            Dim maxRadius As Double
            maxRadius = GetMaxRadius(swBody)
            
            Dim i As Integer
            
            Dim dNorm(2) As Double
            Dim dRef(2) As Double
            
            dNorm(0) = 0: dNorm(1) = 1: dNorm(2) = 0
            dRef(0) = 1: dRef(1) = 0: dRef(2) = 0
            
            Dim vStartPt As Variant
            Dim length As Double
            vStartPt = GetStartPoint(swBody, dNorm, length)
            
            Dim step As Double
            step = length / (SLICES_COUNT + 1)
            
            For i = 1 To (SLICES_COUNT + 1) - 1
            
                Dim swCutPlane As SldWorks.Body2
                
                Dim vRoot As Variant
                vRoot = MovePoint(vStartPt, dNorm, step * i)
                                
                Set swCutPlane = CreatePlanarBody(vRoot, dNorm, dRef, maxRadius)
                
                Dim swTempBody As SldWorks.Body2
                Set swTempBody = swBody.Copy
        
                Dim bodyErr As Long
                Dim vRes As Variant
                vRes = swCutPlane.Operations2(swBodyOperationType_e.SWBODYINTERSECT, swTempBody, bodyErr)
                
                Dim j As Integer
                
                If Not IsEmpty(vRes) Then
                    For j = 0 To UBound(vRes)
                        Dim swResBody As SldWorks.Body2
                        Set swResBody = vRes(j)
                        Debug.Print "Area: " & swResBody.GetMassProperties(0)(4)
                        swSliceBodies.Add swResBody
                    Next
                Else
                    err.Raise vbError, , "Intersection failed"
                End If
                
            Next
            
            Debug.Print "Time: " & Round(Timer - startTime, 2)
            
            For i = 1 To swSliceBodies.Count
                swSliceBodies(i).Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
            Next
            
            Stop
            
            For i = swSliceBodies.Count To 1 Step -1
                swSliceBodies.Remove i
            Next
                    
        Else
            MsgBox "Please select body"
        End If
        
    Else
        MsgBox "Please open model"
    End If
    
End Sub

Function GetMaxRadius(body As SldWorks.Body2) As Double
    
    Dim vBox As Variant
    vBox = body.GetBodyBox()
    
    GetMaxRadius = Sqrt((vBox(3) - vBox(0)) ^ 2 + (vBox(4) - vBox(1)) ^ 2 + (vBox(5) - vBox(2)) ^ 2)
    
End Function

Function GetStartPoint(body As SldWorks.Body2, vDir As Variant, ByRef length As Double) As Variant
    
    Dim x As Double
    Dim y As Double
    Dim z As Double
    
    body.GetExtremePoint CDbl(-vDir(0)), CDbl(-vDir(1)), CDbl(-vDir(2)), x, y, z
    
    Dim dPt(2) As Double
    dPt(0) = x: dPt(1) = y: dPt(2) = z
    
    GetStartPoint = dPt
    
    body.GetExtremePoint CDbl(vDir(0)), CDbl(vDir(1)), CDbl(vDir(2)), x, y, z
    
    dPt(0) = x: dPt(1) = y: dPt(2) = z
    
    Dim dVecPt(2) As Double
    
    Dim vPt1 As Variant
    Dim vPt2 As Variant
        
    vPt1 = ProjectPointOnVector(GetStartPoint, vDir, dVecPt)
    vPt2 = ProjectPointOnVector(dPt, vDir, dVecPt)
    
    length = Sqrt((vPt1(0) - vPt2(0)) ^ 2 + (vPt1(1) - vPt2(1)) ^ 2 + (vPt1(2) - vPt2(2)) ^ 2)
    
End Function

Function ProjectPointOnVector(vPt As Variant, vVec As Variant, vPtOnVec As Variant) As Variant
    
    Dim swMathUtils As SldWorks.MathUtility
    Set swMathUtils = swApp.GetMathUtility
    
    Dim swPt As SldWorks.MathPoint
    Dim swVec As SldWorks.MathVector
    Dim swPtOnVec As SldWorks.MathPoint
    
    Set swPt = swMathUtils.CreatePoint(vPt)
    Set swVec = swMathUtils.CreateVector(vVec)
    Set swPtOnVec = swMathUtils.CreatePoint(vPtOnVec)
    
    Dim swVec2 As SldWorks.MathVector
    Set swVec2 = swPtOnVec.Subtract(swPt)
    
    Dim magn As Double
    Dim prod As Double
    Dim dist As Double
    
    prod = swVec.Dot(swVec2)
    magn = swVec.GetLength() ^ 2
    dist = prod / magn
        
    Dim swDestPt As SldWorks.MathPoint
    Set swDestPt = swPtOnVec.AddVector(swVec.Scale(dist))
    
    ProjectPointOnVector = swDestPt.ArrayData
    
End Function

Function CreatePlanarBody(vRoot As Variant, vNorm As Variant, vRef As Variant, radius As Double) As SldWorks.Body2
    
    Dim swModeler As SldWorks.Modeler
        
    Set swModeler = swApp.GetModeler
        
    Dim swSurf As SldWorks.Surface
            
    Set swSurf = swModeler.CreatePlanarSurface2(vRoot, vNorm, vRef)
    
    Dim swTrimCurve(0) As SldWorks.Curve
    
    Dim vArcPt As Variant
    vArcPt = MovePoint(vRoot, vRef, radius)
    
    Set swTrimCurve(0) = swModeler.CreateArc(vRoot, vNorm, radius, vArcPt, vArcPt)
    
    Set CreatePlanarBody = swSurf.CreateTrimmedSheet4(swTrimCurve, True)
    
End Function

Function MovePoint(vPt As Variant, vDir As Variant, dist As Double) As Variant
    
    Dim swMathUtils As SldWorks.MathUtility
    
    Set swMathUtils = swApp.GetMathUtility
    
    Dim swPt As SldWorks.MathPoint
    Dim swDir As SldWorks.MathVector
    
    Set swPt = swMathUtils.CreatePoint(vPt)
    Set swDir = swMathUtils.CreateVector(vDir)
    
    Set swDir = swDir.Normalise()
    Set swDir = swDir.Scale(dist)
    
    Set swPt = swPt.AddVector(swDir)
    
    MovePoint = swPt.ArrayData
    
End Function

~~~



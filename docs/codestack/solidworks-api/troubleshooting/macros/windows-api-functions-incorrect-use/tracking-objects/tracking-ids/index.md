---
title: Tracking IDs in SOLIDWORKS API to track entities across operations
caption: Tracking IDs
description: This example demonstrates the use of tracking ids on face while running the merge body operation
image: select-bodies-faces.png
labels: [tracking id, merge]
---
Tracking ids are used to map (track) entities across geometrical operations such as merge, subtract, copy, split, pattern while developing macros and applications using SOLIDWORKS API.

Tracking ids can be applied to faces, edges, loops, vertices and bodies.

Tracking ids are assigned temporarily until the model rebuilt.

Mainly the tracking ids are used for operations with temp bodies when it is required to track specific elements when the body get changed. Usually this is required in macro features.

Following example demonstrates the use of tracking ids from SOLIDWORKS API to track and map the user selected faces to the copied merged body.

* Download [Example File](tracking-ids-sample.SLDPRT) or use any other part document
* Select at least one face. It is recommended to select at least two faces from the different bodies which are overlapping each other. This would allow to demonstrate the benefit of tracking ids as body will be merged.
* Run the macro.

![Two faces of two solid bodies selected in the graphics view](select-bodies-faces.png){ width=300 }

Macro will perform the following steps

* Collect all selected faces
* Find all bodies from the selected faces
* Clear all existing tracking ids if any
* Make a copy of the bodies
* Merge all bodies into one
* Create new part document
* Create new body from the merged copy
* Find the faces which correspond to originally selected faces
* Select those corresponding faces in the merged body

![Copy of the single body created as the result of a merge operation with two faces selected](merged-body.png){ width=250 }

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim vFaces As Variant
        vFaces = GetAllSelectedFaces(swModel)
        
        If Not IsEmpty(vFaces) Then
            
            Dim trackingCookie As Long
            Dim vBodiesCopy As Variant
            
            vBodiesCopy = CopyBodiesAndTrackFaces(vFaces, trackingCookie)
            
            CreateMergedBodyAndSelectFaces trackingCookie, vBodiesCopy
        Else
            MsgBox "Please select at least one face"
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Function GetAllSelectedFaces(model As SldWorks.ModelDoc2) As Variant
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = model.SelectionManager
    
    Dim i As Integer
    
    Dim swFaces() As SldWorks.Face2
    
    Dim isArrInit As Boolean
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
        
        On Error Resume Next
        
        Dim swFace As SldWorks.Face2
        Set swFace = swSelMgr.GetSelectedObject6(i, -1)
        
        If Not swFace Is Nothing Then
            
            If Not isArrInit Then
                isArrInit = True
                ReDim swFaces(0)
            Else
                ReDim Preserve swFaces(UBound(swFaces) + 1)
            End If
            
            Set swFaces(i - 1) = swFace
            
        End If
    Next
    
    GetAllSelectedFaces = swFaces
    
End Function

Function CopyBodiesAndTrackFaces(vFaces As Variant, ByRef trackingCookie As Long) As Variant

    trackingCookie = swApp.RegisterTrackingDefinition("_MergeBodies_")

    Dim swFace As SldWorks.Face2
    
    Dim swBodies() As SldWorks.Body2
    ReDim swBodies(UBound(vFaces))
    
    Dim i As Integer
    
    'collect bodies and clear all tracking ids
    For i = 0 To UBound(vFaces)
        
        Set swFace = vFaces(i)
        Set swBodies(i) = swFace.GetBody()
        
        ClearAllFaceTrackingIds swBodies(i), trackingCookie
        
    Next
    
    'assign tracking ids for all faces
    For i = 0 To UBound(vFaces)
        
        Set swFace = vFaces(i)
        
        swFace.SetTrackingID trackingCookie, i
        
    Next
    
    'copy all bodies
    For i = 0 To UBound(swBodies)
        
        Set swBodies(i) = swBodies(i).Copy()
        
    Next
    
    CopyBodiesAndTrackFaces = swBodies
    
End Function

Sub CreateMergedBodyAndSelectFaces(trackingCookie As Long, vBodiesCopy As Variant)
    
    Dim partTemplate As String
    partTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)
    
    If partTemplate <> "" Then
        
        Dim swPart As SldWorks.PartDoc
        Set swPart = swApp.NewDocument(partTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0, 0)
        
        Dim swMergedBody As SldWorks.Body2
        
        Set swMergedBody = vBodiesCopy(0)
        
        Dim i As Integer
        
        For i = 1 To UBound(vBodiesCopy)
            
            Dim mergeErr As Long
            Dim vMergeRes As Variant
            
            vMergeRes = swMergedBody.Operations2(swBodyOperationType_e.SWBODYADD, vBodiesCopy(i), mergeErr)
            
            If UBound(vMergeRes) = 0 Then
                Set swMergedBody = vMergeRes(0)
            Else
                MsgBox "Selected bodies cannot be merged"
                End
            End If
            
        Next
        
        Dim swBodyFeat As SldWorks.Feature
        Set swBodyFeat = swPart.CreateFeatureFromBody3(swMergedBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify)
        
        Dim vFaces As Variant
        vFaces = swBodyFeat.GetFaces()
        
        swPart.ClearSelection2 True
        
        For i = 0 To UBound(vFaces)
            
            Dim swFace As SldWorks.Face2
            Set swFace = vFaces(i)
            
            Dim vIds As Variant
            swFace.GetTrackingIDs trackingCookie, vIds
            
            If Not IsEmpty(vIds) Then
                
                Dim j As Integer
                
                For j = 0 To UBound(vIds)
                    Debug.Print vIds(j)
                Next
                
                swFace.Select4 True, Nothing
            End If
        Next
        
    Else
        MsgBox "Default part template is not specified"
    End If
    
End Sub

Sub ClearAllFaceTrackingIds(swBody As SldWorks.Body2, trackingCookie As Long)
    
    Dim vBodyFaces As Variant
    vBodyFaces = swBody.GetFaces
    
    Dim i As Integer
    
    For i = 0 To UBound(vBodyFaces)
        Dim swBodyFace As SldWorks.Face2
        Set swBodyFace = vBodyFaces(i)
        swBodyFace.RemoveTrackingID trackingCookie
    Next
    
End Sub
~~~


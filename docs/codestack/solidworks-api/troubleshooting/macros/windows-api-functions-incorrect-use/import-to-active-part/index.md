---
layout: article
caption: Import To Active Part
title: Macro to import foreign file into active part using SOLIDWORKS API
description: VBA macro to import foreign file (parasolid, step, iges, etc.) directly into the active part document using SOLIDWORKS API
image: imported-file.png
---
![File imported to an active part document](imported-file.png)

This VBA macro demonstrates how to import foreign file with bodies (e.g. parasolid, step, iges, etc.) directly into the active part document.

Change the path to the import file in the **INPUT_FILE** constant

This macro only supports foreign files which are imported as part document.

~~~ vb
Const INPUT_FILE As String = "D:\Model.x_t"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
try_:
    
    On Error GoTo catch_
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    swApp.DocumentVisible False, swDocumentTypes_e.swDocPART

    Dim swImpPart As SldWorks.PartDoc
    
    Dim errs As Long
    Set swImpPart = swApp.LoadFile4(INPUT_FILE, "", Nothing, errs)
    
    Dim vBodies As Variant
    vBodies = swImpPart.GetBodies2(swBodyType_e.swAllBodies, True)
    
    Dim i As Integer
    
    For i = 0 To UBound(vBodies)
        
        Dim swBody As SldWorks.Body2
        Set swBody = vBodies(i)
        Set swBody = swBody.Copy
        
        Dim swBodyFeat As SldWorks.Feature
        Set swFeat = swModel.CreateFeatureFromBody3(swBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify)
        
        If swFeat Is Nothing Then
            Err.Raise vbError, "", "Failed to create feature from body"
        End If
        
    Next
    
    swApp.CloseDoc swImpPart.GetTitle
    
    GoTo finally_
    
catch_:
    Debug.Print "Error: " & Err.Number & ":" & Err.Source & ":" & Err.Description
    GoTo finally_
    
finally_:

    swApp.DocumentVisible True, swDocumentTypes_e.swDocPART
    
End Sub
~~~


Const ITERATIONS_COUNT As Integer = 1000

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If TypeOf swModel Is SldWorks.PartDoc Then
        
        Dim swPart As SldWorks.PartDoc
        Set swPart = swModel
        Dim vBodies As Variant
        vBodies = swPart.GetBodies2(swBodyType_e.swAllBodies, False)
            
        If Not IsEmpty(vBodies) Then
            PerformOperation vBodies
        Else
            MsgBox "There are no bodies in this part"
        End If
            
    Else
        MsgBox "Please open part document"
    End If
    
End Sub

Sub PerformOperation(bodies As Variant)
    
    Dim swPrgBar As SldWorks.UserProgressBar
    swApp.GetUserProgressBar swPrgBar
    
    swPrgBar.Start 0, GetProgressBarUpperBound(bodies), "Performing operations on faces"
    
    Dim i As Integer
    
    Dim pos As Long
    pos = 0
    
    For i = 0 To UBound(bodies)
        
        Dim swBody As SldWorks.Body2
        Set swBody = bodies(i)
        
        Dim vFaces As Variant
        vFaces = swBody.GetFaces()
        
        swPrgBar.UpdateTitle "Processing " & swBody.Name & " with " & UBound(vFaces) + 1 & " face(s)"
        
        Dim j As Integer
        
        For j = 0 To UBound(vFaces)
            
            Dim k As Integer
            
            For k = 0 To ITERATIONS_COUNT
                
                pos = pos + 1
                
                Dim swFace As SldWorks.Face2
                Set swFace = vFaces(j)
                
                Dim swSurf As SldWorks.Surface
                Set swSurf = swFace.GetSurface()
                    
                swSurf.EvaluateAtPoint 0, 0, 0
                swSurf.GetClosestPointOn 0, 0, 0
                
                If swUpdateProgressError_e.swUpdateProgressError_UserCancel = swPrgBar.UpdateProgress(pos) Then
                    If swApp.SendMsgToUser2("Cancel operation?", swMessageBoxIcon_e.swMbWarning, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes Then
                        swPrgBar.End
                    End If
                End If
                
            Next
        Next
        
    Next
    
End Sub

Function GetProgressBarUpperBound(bodies As Variant) As Long
    
    Dim totalFaceCount As Long
    
    Dim i As Integer
    
    For i = 0 To UBound(bodies)
        Dim swBody As SldWorks.Body2
        Set swBody = bodies(i)
        totalFaceCount = swBody.GetFaceCount()
    Next
    
    GetProgressBarUpperBound = totalFaceCount * ITERATIONS_COUNT
    
End Function
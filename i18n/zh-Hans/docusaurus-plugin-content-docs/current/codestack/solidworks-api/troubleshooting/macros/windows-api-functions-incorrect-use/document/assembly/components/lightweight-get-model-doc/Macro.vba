Dim swApp As SldWorks.SldWorks
Dim swAssy As SldWorks.AssemblyDoc

Sub main()

    On Error Resume Next
    
    Set swApp = Application.SldWorks
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        
        Dim swComp As SldWorks.Component2
        Set swComp = swAssy.SelectionManager.GetSelectedObject6(1, -1)
        
        If Not swComp Is Nothing Then
        
            Dim swRefModel As SldWorks.ModelDoc2
            Set swRefModel = GetModelDocFromComponent(swComp)
            
            Debug.Print swRefModel.GetTitle
            
        Else
            MsgBox "Please select the component"
        End If
        
    Else
        MsgBox "Please open assembly"
    End If
    
End Sub

Function GetModelDocFromComponent(comp As SldWorks.Component2) As SldWorks.ModelDoc2
    
    Dim swRefModel As SldWorks.ModelDoc2
    Set swRefModel = comp.GetModelDoc2
    
    If swRefModel Is Nothing Then 'component is lightweight or suppressed
        
        Dim path As String
        path = comp.GetPathName
        
        Dim docType As swDocumentTypes_e
        
        docType = GetDocumentTypeFromPath(path)
        
        On Error GoTo End_
        
        swApp.DocumentVisible False, docType
        
        Dim errs As Long
        Dim wrns As Long
        Set swRefModel = swApp.OpenDoc6(path, docType, swOpenDocOptions_e.swOpenDocOptions_Silent, "", errs, wrns)
        
End_: 'restore the flag otherwise all files will be opened invisible
    swApp.DocumentVisible True, docType
        
    End If
    
    Set GetModelDocFromComponent = swRefModel

End Function

Function GetDocumentTypeFromPath(path As String) As swDocumentTypes_e
    
    Dim ext As String
    ext = Right(path, Len(path) - InStrRev(path, "."))
    
    Select Case UCase(ext)
        
        Case "SLDPRT"
            GetDocumentTypeFromPath = swDocPART
            Exit Function
            
        Case "SLDASM"
            GetDocumentTypeFromPath = swDocASSEMBLY
            Exit Function
            
        Case "SLDDRW"
            GetDocumentTypeFromPath = swDocDRAWING
            Exit Function
            
    End Select
    
End Function
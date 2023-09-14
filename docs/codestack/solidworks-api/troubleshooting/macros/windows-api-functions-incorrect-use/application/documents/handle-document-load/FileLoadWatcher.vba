Dim WithEvents swApp As SldWorks.SldWorks

Private Sub Class_Initialize()
    Set swApp = Application.SldWorks
End Sub

Private Function swApp_DocumentLoadNotify2(ByVal docTitle As String, ByVal docPath As String) As Long
    
    Dim swModel As SldWorks.ModelDoc2
        
    If docPath <> "" Then
        Set swModel = swApp.GetOpenDocumentByName(docPath)
    Else
        Dim vDocs As Variant
        vDocs = swApp.GetDocuments
        
        Dim i As Integer
        
        For i = 0 To UBound(vDocs)
            Dim swDoc As SldWorks.ModelDoc2
            Set swDoc = vDocs(i)
            If swDoc.GetTitle() = docTitle Then
                Set swModel = swDoc
                Exit For
            End If
        Next
    End If
    
    OnModelLoad swModel
    
End Function

Sub OnModelLoad(model As SldWorks.ModelDoc2)
    HandlerModule.main model
End Sub
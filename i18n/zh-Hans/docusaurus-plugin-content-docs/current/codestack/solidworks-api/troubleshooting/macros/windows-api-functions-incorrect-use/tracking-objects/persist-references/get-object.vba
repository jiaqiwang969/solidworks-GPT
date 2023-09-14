Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim id As String
        id = InputBox("Enter persist id encoded in base64 format")
        
        If id <> "" Then
            
            Dim vId As Variant
            vId = Base64ToArray(id)
            
            Dim swObj As Object
            Dim err As Long
            
            Set swObj = swModel.Extension.GetObjectByPersistReference3(vId, err)
            
            If Not swObj Is Nothing Then
                Dim swSelObj(0) As Object
                Set swSelObj(0) = swObj
                swModel.Extension.MultiSelect2 swSelObj, False, Nothing
            Else
                MsgBox "Failed to get the object by persist reference. Error code " & err & " as defined in swPersistReferencedObjectStates_e"
            End If
            
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Private Function Base64ToArray(base64 As String) As Variant
    
    Dim xmlDoc As Object
    Dim xmlNode As Object
    
    Set xmlDoc = CreateObject("MSXML2.DOMDocument")
    Set xmlNode = xmlDoc.createElement("b64")
    
    xmlNode.DataType = "bin.base64"
    xmlNode.Text = base64
    
    Base64ToArray = xmlNode.nodeTypedValue
  
End Function
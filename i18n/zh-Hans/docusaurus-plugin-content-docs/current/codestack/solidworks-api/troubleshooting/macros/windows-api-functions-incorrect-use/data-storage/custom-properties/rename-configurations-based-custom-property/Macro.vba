Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim prpName As String
        
        prpName = InputBox("Specify the property name to read the value from")
        
        If prpName <> "" Then
            
            Dim vConfNames As Variant
            Dim i As Integer
            
            vConfNames = swModel.GetConfigurationNames()
            
            For i = 0 To UBound(vConfNames)
                    
                Dim swConf As SldWorks.Configuration
                Set swConf = swModel.GetConfigurationByName(vConfNames(i))
                
                Dim prpVal As String
                
                If swConf.CustomPropertyManager.Get3(prpName, False, "", prpVal) Then
                    
                    If prpVal <> "" Then
                        swConf.Name = prpVal
                    End If
                    
                End If
                
            Next
            
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub
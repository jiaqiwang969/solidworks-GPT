Dim WithEvents swApp As SldWorks.SldWorks

Private Sub Class_Initialize()
    Set swApp = Application.SldWorks
End Sub

Private Function swApp_CommandCloseNotify(ByVal Command As Long, ByVal reason As Long) As Long
    
    Const swCommands_Save As Long = 2
    Const swCommands_SaveAll As Long = 19
    Const swCommands_SaveAs As Long = 620
    
    If Command = swCommands_Save Or Command = swCommands_SaveAll Or Command = swCommands_SaveAs Then
        OnSaveDocument
    End If
    
End Function

Dim WithEvents FileCloseWatcher As FileWatcher

Private Sub FileCloseWatcher_ModelClosed(path As String)
    CheckFileLockState "Post Close", path
    End
End Sub

Private Sub FileCloseWatcher_ModelClosing(path As String)
    CheckFileLockState "Pre Close", path
End Sub

Private Sub UserForm_Initialize()
    
    Dim swApp As SldWorks.SldWorks
    
    Set swApp = Application.SldWorks

    Set FileCloseWatcher = New FileWatcher
    
    FileCloseWatcher.WatchModelClose swApp.ActiveDoc

End Sub

Sub CheckFileLockState(state As String, path As String)
    Debug.Print "State: " & state & ". Unlocked: " & IsFileUnlocked(path)
End Sub

Function IsFileUnlocked(filePath As String) As Boolean
    
    IsFileUnlocked = False
    
    Dim fileNmb As Integer
    
    fileNmb = FreeFile
    
    On Error Resume Next
    
    Open filePath For Input Lock Read Write As #fileNmb
    
    If Err.Number = 0 Then
        IsFileUnlocked = True
    End If
    
    Close fileNmb
    
End Function
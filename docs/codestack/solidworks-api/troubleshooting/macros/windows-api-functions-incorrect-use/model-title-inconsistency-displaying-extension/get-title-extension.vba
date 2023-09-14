Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks

    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Debug.Print GetTitleWithoutExtension(swModel)
        Debug.Print GetTitleWithExtension(swModel)
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Function GetTitleWithExtension(model As SldWorks.ModelDoc2) As String
    
    Dim title As String
    Dim ext As String
    
    Select Case model.GetType
        Case swDocumentTypes_e.swDocPART
            ext = ".sldprt"
        Case swDocumentTypes_e.swDocASSEMBLY
            ext = ".sldasm"
        Case swDocumentTypes_e.swDocDRAWING
            ext = ".slddrw"
    End Select
    
    If model.GetPathName() = "" Then
        title = model.GetTitle + ext 'extension is not shown for file which is not saved
    Else
        If IsExtensionShown() Then
            title = model.GetTitle
        Else
            title = model.GetTitle + ext
        End If
    End If
    
    If model.GetType() = swDocumentTypes_e.swDocDRAWING Then
        title = model.GetTitle() 'drawing extension never included into the title
        title = Left(title, InStrRev(title, "-") - 2) + ext 'removing the sheet name from the drawing title
    End If
    
    GetTitleWithExtension = title
    
End Function

Function GetTitleWithoutExtension(model As SldWorks.ModelDoc2) As String
    
    Const EXT_PATTERN = ".sldxxx"
    
    Dim title As String
    
    If model.GetPathName() = "" Then
        title = model.GetTitle 'extension is not shown for file which is not saved
    Else
        If IsExtensionShown() Then
            title = model.GetTitle
            title = Left(title, Len(title) - Len(EXT_PATTERN))
        Else
            title = model.GetTitle
        End If
    End If
    
    If model.GetType() = swDocumentTypes_e.swDocDRAWING Then
        title = Left(title, InStrRev(title, "-") - 2)
    End If
    
    GetTitleWithoutExtension = title
    
End Function

Function IsExtensionShown() As Boolean

    Const REG_KEY As String = "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\HideFileExt"
    Const UNCHECKED As Integer = 0
    
    Dim wshShell As Object
    Set wshShell = CreateObject("WScript.Shell")
    
    IsExtensionShown = wshShell.RegRead(REG_KEY) = UNCHECKED

End Function
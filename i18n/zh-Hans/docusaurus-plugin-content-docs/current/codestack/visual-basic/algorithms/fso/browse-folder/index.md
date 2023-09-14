---
title: Browse for folder in VBA macro
caption: Browse For Folder
description: Code snippet to select the folder path in VBA macro
---
The following code snippet demonstrates how to browse for the folder path within VBA macro. The same function can also be used within VBScript.

~~~ vb
Sub main()

    Debug.Print BrowseForFolder("Browse for folder")
        
End Sub

Function BrowseForFolder(Optional title As String = "Select Folder") As String
    
    Dim shellApp As Object
    
    Set shellApp = CreateObject("Shell.Application")
    
    Dim folder As Object
    Set folder = shellApp.BrowseForFolder(0, title, 0)
    
    If Not folder Is Nothing Then
        BrowseForFolder = folder.Self.Path
    End If
    
End Function
~~~


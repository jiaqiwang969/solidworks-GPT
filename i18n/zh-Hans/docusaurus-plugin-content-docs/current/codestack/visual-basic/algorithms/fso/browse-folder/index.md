---
title:  在VBA宏中浏览文件夹
caption: 浏览文件夹
---
 用于在VBA宏中选择文件夹路径的代码片段
---
以下代码片段演示了如何在VBA宏中浏览文件夹路径。同样的函数也可以在VBScript中使用。

```vb
Sub main()

    Debug.Print BrowseForFolder("浏览文件夹")
        
End Sub

Function BrowseForFolder(Optional title As String = "选择文件夹") As String
    
    Dim shellApp As Object
    
    Set shellApp = CreateObject("Shell.Application")
    
    Dim folder As Object
    Set folder = shellApp.BrowseForFolder(0, title, 0)
    
    If Not folder Is Nothing Then
        BrowseForFolder = folder.Self.Path
    End If
    
End Function
```

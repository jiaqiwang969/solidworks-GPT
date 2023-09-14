---
title: 使用 Visual Basic 6 (VBA) 从文件夹获取文件路径
caption: 从文件夹获取文件
description: 使用 Visual Basic 6 (VBA) 编写的函数，用于获取指定文件夹中所有文件的列表，并提供遍历子目录和指定文件扩展名的选项。
labels: [文件,扩展名,遍历,递归]
---

这个 Visual Basic 6 (VBA) 函数可以在指定文件夹中查找文件的路径，并提供遍历子目录和指定文件扩展名的选项：

```vb
vFiles = GetFiles("D:\MyFolder") '获取 D 盘中 MyFolder 文件夹及其所有子文件夹中的所有文件
vFiles = GetFiles("D:\MyFolder", False) '仅获取 D 盘中 MyFolder 文件夹中的顶层文件
vFiles = GetFiles("D:\MyFolder", True, "txt") '获取 D 盘中 MyFolder 文件夹中所有 .txt 格式的文件
```

```vb
Function GetFiles(path As String, Optional includeSubFolders As Boolean = True, Optional ext As String = "") As Variant

    Dim paths() As String
    Dim isInit As Boolean
    
    isInit = False
    
    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    Dim folder As Object
    Set folder = fso.GetFolder(path)
    
    CollectFilesFromFolder folder, includeSubFolders, ext, paths, isInit
    
    If isInit Then
        GetFiles = paths
    Else
        GetFiles = Empty
    End If
    
End Function

Sub CollectFilesFromFolder(folder As Object, includeSubFolders As Boolean, ext As String, ByRef paths() As String, ByRef isInit As Boolean)
    
    For Each file In folder.files
        Dim fileExt As String
        fileExt = Right(file.path, Len(file.path) - InStrRev(file.path, "."))
        If LCase(fileExt) = LCase(ext) Then
            If Not isInit Then
                ReDim paths(0)
                isInit = True
            Else
                ReDim Preserve paths(UBound(paths) + 1)
            End If
            paths(UBound(paths)) = file.path
        End If
    Next
    
    If includeSubFolders Then
        Dim subFolder As Object
        For Each subFolder In folder.SubFolders
            CollectFilesFromFolder subFolder, includeSubFolders, ext, paths, isInit
        Next
    End If
    
End Sub
```
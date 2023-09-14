---
title: Get files paths from folder using Visual Basic 6 (VBA)
caption: Get Files From Folder
description: Function to get the list of all files in the folder with an option to traverse sub directories and specify the file extension using Visual Basic 6 (VBA)
labels: [files,extension,traverse,recursive]
---
This function is Visual Basic 6 (VBA) allows to find the paths of files in the specified folder with an option to traverse sub directores and specifying the extension of files to return:

~~~ vb
vFiles = GetFiles("D:\MyFolder") 'get all files from the MyFolder directory in the D drive and all the sub folders
vFiles = GetFiles("D:\MyFolder", False) 'get only top level files from the MyFolder directory in the D drive
vFiles = GetFiles("D:\MyFolder", True, "txt") 'get all files in .txt format from the MyFolder directory in the D drive
~~~

~~~ vb
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
~~~


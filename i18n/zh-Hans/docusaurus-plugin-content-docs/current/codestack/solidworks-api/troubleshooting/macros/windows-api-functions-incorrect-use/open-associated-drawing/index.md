---
layout: sw-tool
title:  打开活动文档或选定组件的关联图纸
caption: 打开关联图纸
---
 VBA宏，用于打开组件的关联图纸，无论命名如何（可以选择以详图模式打开图纸）
image: open-associated-drawing.svg
labels: [图纸, 打开, 详图]
group: 图纸
---

这个VBA宏允许打开装配体中选定组件的关联图纸，或者如果没有选定任何内容，则打开活动文档。

与开箱即用的功能不同，此宏没有与组件同名并位于同一文件夹中的图纸的限制。该宏将在当前文件夹（活动文档的文件夹）的所有子文件夹中查找所有图纸，无论这些图纸是否以组件命名。

此宏有一个选项，可以以详图模式打开图纸。修改 **OPEN_DRAWING_DETAILING** 的值以更改行为。

```vb
Const OPEN_DRAWING_DETAILING As Boolean = True '以详图模式打开图纸
```

```vb
Const OPEN_DRAWING_DETAILING As Boolean = False
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
try_:
    On Error GoTo catch_
    
    If Not swModel Is Nothing Then
    
        If swModel.GetType() <> swDocumentTypes_e.swDocASSEMBLY And _
            swModel.GetType() <> swDocumentTypes_e.swDocPART Then
            Err.Raise vbError, "", "活动文档不是零件或装配体"
        End If
                
        Dim vDrawings As Variant
        
        vDrawings = FindDrawings(swModel)
                
        OpenDrawings vDrawings
        
        GoTo finally_
        
    Else
        Err.Raise vbError, "", "请打开装配体或图纸文档"
    End If

catch_:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally_:
 
End Sub

Sub OpenDrawings(vPaths As Variant)
    
    If Not IsEmpty(vPaths) Then
            
        Dim i As Integer
        
        For i = 0 To UBound(vPaths)
            
            Dim drwFilePath As String
            drwFilePath = vPaths(i)
        
            Dim swDocSpec As SldWorks.DocumentSpecification
            Set swDocSpec = swApp.GetOpenDocSpec(drwFilePath)
            
            If OPEN_DRAWING_DETAILING Then
                swDocSpec.DetailingMode = True
            End If
            
            Dim swDraw As SldWorks.ModelDoc2
            Set swDraw = swApp.OpenDoc7(swDocSpec)
            
            If swDraw Is Nothing Then
                Err.Raise vbError, "", "无法打开图纸。错误代码：" & swDocSpec.Error
            End If
            
        Next
        
    Else
        Err.Raise vbError, "", "未选择组件"
    End If
    
End Sub

Function FindDrawings(model As SldWorks.ModelDoc2) As Variant
    
    Dim drwFilePaths() As String
        
    Dim vDrws As Variant
    Dim i As Integer
    Dim j As Integer
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = model.SelectionManager
    
    Dim rootDir As String
    rootDir = Left(model.GetPathName(), InStrRev(model.GetPathName(), "\"))
    
    If swSelMgr.GetSelectedObjectCount2(-1) = 0 Then
        
        vDrws = FindAssociatedDrawings(rootDir, model.GetPathName())
        ReDim drwFilePaths(UBound(vDrws))
        
        For j = 0 To UBound(vDrws)
            drwFilePaths(j) = vDrws(j)
        Next
        
    Else
        
        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
        
            Dim path As String
            Dim confName As String
            
            Dim swComp As SldWorks.Component2
            Set swComp = swSelMgr.GetSelectedObjectsComponent4(i, -1)
            
            If Not swComp Is Nothing Then
                
                path = swComp.GetPathName()
                
                If model.IsOpenedViewOnly() Then
                    path = ResolveReferencePath(model.GetPathName(), path)
                End If
                
                vDrws = FindAssociatedDrawings(rootDir, path)
                        
                For j = 0 To UBound(vDrws)
                           
                    Dim drwFilePath As String
                    drwFilePath = vDrws(j)
                    
                    Dim unique As Boolean
                    unique = False
                                    
                    If (Not drwFilePaths) = -1 Then
                        ReDim drwFilePaths(0)
                        unique = True
                    Else
                        unique = Not ContainsFilePath(drwFilePaths, drwFilePath)
                        If True = unique Then
                            ReDim Preserve drwFilePaths(UBound(drwFilePaths) + 1)
                        End If
                    End If
                        
                    If True = unique Then
                        drwFilePaths(UBound(drwFilePaths)) = drwFilePath
                    End If
                
                Next
                
            End If
            
        Next
    
    End If
    
    If (Not drwFilePaths) <> -1 Then
        FindDrawings = drwFilePaths
    Else
        FindDrawings = Empty
    End If
    
End Function

Function FindAssociatedDrawings(rootDir As String, filePath As String) As Variant
    
    Dim paths() As String
    
    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    Dim folder As Object
    Set folder = fso.GetFolder(rootDir)
    
    CollectDrawingFilesFromFolder folder, filePath, paths
    
    If (Not paths) <> -1 Then
        FindAssociatedDrawings = paths
    Else
        Err.Raise vbError, "", "无法找到 " & filePath & " 的关联图纸"
    End If
    
End Function

Sub CollectDrawingFilesFromFolder(folder As Object, targetFilePath As String, ByRef paths() As String)
    
    For Each file In folder.files
        
        Dim fileExt As String
        fileExt = Right(file.path, Len(file.path) - InStrRev(file.path, "."))
        
        If LCase(fileExt) = LCase("slddrw") Then
            
            If IsReferencingDrawing(file.path, targetFilePath) Then
                If (Not paths) = -1 Then
                    ReDim paths(0)
                Else
                    ReDim Preserve paths(UBound(paths) + 1)
                End If
                paths(UBound(paths)) = file.path
            End If
        End If
    Next
    
    Dim subFolder As Object
    For Each subFolder In folder.SubFolders
        CollectDrawingFilesFromFolder subFolder, targetFilePath, paths
    Next
    
End Sub

Function IsReferencingDrawing(drwFilePath As String, destFilePath As String) As Boolean

    Dim vDepends As Variant
    vDepends = swApp.GetDocumentDependencies2(drwFilePath, False, True, False)
    
    Dim i As Integer
    
    If Not IsEmpty(vDepends) Then
        
        For i = 1 To UBound(vDepends) Step 2
            
            If LCase(CStr(vDepends(i))) = LCase(destFilePath) Then
                IsReferencingDrawing = True
                Exit Function
            End If
        Next
    End If

    IsReferencingDrawing = False
    
End Function

Function ContainsFilePath(vPaths As Variant, path As String) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vPaths)
        If LCase(path) = LCase(vPaths(i)) Then
            ContainsFilePath = True
            Exit Function
        End If
    Next
    
    ContainsFilePath = False
    
End Function

Function ResolveReferencePath(rootDocPath As String, refPath As String) As String
    
    Dim pathParts As Variant
    pathParts = Split(refPath, "\")
    
    Dim rootFolder As String
    rootFolder = rootDocPath
    rootFolder = Left(rootFolder, InStrRev(rootFolder, "\") - 1)

    Dim i As Integer
    
    Dim curRelPath As String
    
    For i = UBound(pathParts) To 1 Step -1
        
        curRelPath = pathParts(i) & IIf(curRelPath <> "", "\", "") & curRelPath
        Dim path As String
        path = rootFolder & "\" & curRelPath
        
        If Dir(path) <> "" Then
            ResolveReferencePath = path
            Exit Function
        End If
        
    Next
    
    ResolveReferencePath = refPath
    
End Function
```
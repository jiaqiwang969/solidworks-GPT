---
layout: sw-tool
title:  Open associated drawings of active document or selected components
caption: Open Associated Drawings
---
 VBA macro to open the drawings associated to the component in its own window regardless of naming (with an option to open the drawing in detailing mode)
image: open-associated-drawing.svg
labels: [drawing, open, detailing]
group: Drawing
---
This VBA macro allows to open the associated drawings of the selected components in the assembly or active document if nothing is selected.

Unlike out-of-the-box functionality this macro does not have a limitation related to the drawing to be named after the component and located in the same folder. This macro will find all drawings in all sub-folders of the current folder (folder of the active document) regardless if those are named after the component or not.

This macro has an option to open the drawing resolved or in the detailing mode. Modify the value oif **OPEN_DRAWING_DETAILING** to change the behavior.

~~~ vb
Const OPEN_DRAWING_DETAILING As Boolean = True 'opens drawings in detailing mode
~~~

~~~ vb
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
            Err.Raise vbError, "", "Active document is not a part or assembly"
        End If
                
        Dim vDrawings As Variant
        
        vDrawings = FindDrawings(swModel)
                
        OpenDrawings vDrawings
        
        GoTo finally_
        
    Else
        Err.Raise vbError, "", "Please open assembly or drawing document"
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
                Err.Raise vbError, "", "Failed to open drawing. Error code: " & swDocSpec.Error
            End If
            
        Next
        
    Else
        Err.Raise vbError, "", "No component selected"
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
        Err.Raise vbError, "", "Failed to find the associated drawings for " & filePath
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
~~~



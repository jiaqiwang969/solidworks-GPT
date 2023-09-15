---
title:  使用SOLIDWORKS文档管理器API获取文档的所有外部引用
caption: 获取所有外部引用
---
 该宏演示了如何使用SOLIDWORKS文档管理器API提取指定SOLIDWORKS文件（零件、装配体或图纸）的所有外部引用（包括嵌套引用、装配体组件和绘图视图）。
labels: [document manager, external references, components]
---

该宏演示了如何使用SOLIDWORKS文档管理器API提取指定SOLIDWORKS文件（零件、装配体或图纸）的所有外部引用（包括嵌套引用、装配体组件和绘图视图）。

修改宏并指定要收集引用的根文件的完整路径。

运行宏。所有引用都会输出到即时窗口。

该宏使用[SolidWorks.Interop.swdocumentmgr.ISwDMDocument21.GetAllExternalReferences5](https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument21~GetAllExternalReferences5.html) SOLIDWORKS文档管理器API来列出文件的所有依赖项。该方法递归调用，以收集SOLIDWORKS装配体的所有级别的引用。

```vb
Const FILE_PATH As String = "文件路径"

Const LIC_KEY As String = "您的许可证密钥"

Dim swDmApp As SwDocumentMgr.SwDMApplication4

Sub main()

    Dim swClassFact As SwDocumentMgr.SwDMClassFactory
    
    Set swClassFact = New SwDocumentMgr.SwDMClassFactory
    
    Set swDmApp = swClassFact.GetApplication(LIC_KEY)
    
    Dim filesColl As Collection
    Set filesColl = New Collection
    
    CollectExternalReferences FILE_PATH, filesColl
    
    Dim i As Integer
    
    Debug.Print "外部引用:"
    
    For i = 1 To filesColl.Count
        Debug.Print filesColl(i)
    Next
    
End Sub

Function CollectExternalReferences(filePath As String, coll As Collection)
    
    If Not Contains(coll, filePath) Then
        coll.Add filePath
    End If
    
    Dim swDmDoc As SwDocumentMgr.SwDMDocument19
    
    Dim searchOpts As SwDocumentMgr.SwDMSearchOption
    Set searchOpts = swDmApp.GetSearchOptionObject
    searchOpts.SearchFilters = SwDmSearchFilters.SwDmSearchExternalReference + SwDmSearchFilters.SwDmSearchRootAssemblyFolder + SwDmSearchFilters.SwDmSearchSubfolders + SwDmSearchFilters.SwDmSearchInContextReference
    
    Set swDmDoc = OpenDocument(filePath)
    
    If Not swDmDoc Is Nothing Then
        
        Dim vBrokenRefs As Variant
        Dim vVirtComps As Variant
        Dim vTimeStamps As Variant
        Dim vFilePaths As Variant
        
        vFilePaths = swDmDoc.GetAllExternalReferences4(searchOpts, vBrokenRefs, vVirtComps, vTimeStamps)
        
        If Not IsEmpty(vFilePaths) Then
            Dim i As Integer
            
            For i = 0 To UBound(vFilePaths)
                Dim childFilePath As String
                childFilePath = vFilePaths(i)
                CollectExternalReferences childFilePath, coll
            Next
            
        End If
        
    Else
        Debug.Print "无法打开文档: " & filePath
    End If
    
End Function

Function OpenDocument(filePath As String) As SwDocumentMgr.SwDMDocument19
    
    Dim err As SwDmDocumentOpenError
    
    Dim docType As SwDocumentMgr.SwDmDocumentType
    
    Dim ext As String
    ext = LCase(Right(filePath, 6))
    
    Select Case ext
        Case "sldprt"
            docType = swDmDocumentPart
        Case "sldasm"
            docType = swDmDocumentAssembly
        Case "slddrw"
            docType = swDmDocumentDrawing
    End Select
    
    Dim swDmDoc As SwDocumentMgr.SwDMDocument19
    
    Set swDmDoc = swDmApp.GetDocument(filePath, docType, True, err)
    
    Set OpenDocument = swDmDoc
    
End Function

Function Contains(coll As Collection, item As String) As Boolean
    
    Dim i As Integer
    
    For i = 1 To coll.Count
        If LCase(coll.item(i)) = LCase(item) Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function
```


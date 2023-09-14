---
title: 使用SOLIDWORKS文档管理器API替换组件或绘图视图中的引用
caption: 替换引用
description: 本示例演示了如何使用SOLIDWORKS文档管理器API在SOLIDWORKS文件（装配体或绘图）中替换引用（组件或绘图视图）。
labels: [document manager, references, replace, components, drawing views]
---

本示例演示了如何使用SOLIDWORKS文档管理器API在SOLIDWORKS文件（装配体或绘图）中替换引用（组件或绘图视图）。

* 指定父文件（例如装配体）的完整路径
* 指定要替换的文档的完整路径
* 指定新文档的完整路径

使用[SOLIDWORKS文档管理器API的ISwDMDocument::ReplaceReference](https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmdocument~replacereference.html)方法来替换旧的引用为新的引用。

```vb
Const FILE_PATH As String = "要替换引用的完整路径"
Const ORIGINAL_REFERENCE As String = "要替换的引用的完整路径"
Const NEW_REFERENCE As String = "新引用的完整路径"

Const LIC_KEY As String = "您的许可证密钥"

Dim swDmApp As SwDocumentMgr.SwDMApplication4

Sub main()

    Dim swClassFact As SwDocumentMgr.SwDMClassFactory
    
    Set swClassFact = New SwDocumentMgr.SwDMClassFactory
    
    Set swDmApp = swClassFact.GetApplication(LIC_KEY)
    
    Dim swDmDoc As SwDocumentMgr.SwDMDocument19

    Set swDmDoc = OpenDocument(FILE_PATH)
    
    Dim searchOpts As SwDocumentMgr.SwDMSearchOption
    Set searchOpts = swDmApp.GetSearchOptionObject
    searchOpts.SearchFilters = SwDmSearchFilters.SwDmSearchExternalReference + SwDmSearchFilters.SwDmSearchRootAssemblyFolder + SwDmSearchFilters.SwDmSearchSubfolders + SwDmSearchFilters.SwDmSearchInContextReference
    
    '必须调用此方法，否则替换将失败
    swDmDoc.GetAllExternalReferences4 searchOpts, Empty, Empty, Empty
            
    swDmDoc.ReplaceReference ORIGINAL_REFERENCE, NEW_REFERENCE
    
    swDmDoc.Save
    
End Sub

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
    
    Set swDmDoc = swDmApp.GetDocument(filePath, docType, False, err)
    
    Set OpenDocument = swDmDoc
    
End Function
```


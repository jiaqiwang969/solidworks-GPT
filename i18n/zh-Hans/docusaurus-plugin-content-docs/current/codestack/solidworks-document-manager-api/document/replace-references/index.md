---
title: Replace references in components or drawing views using SOLIDWORKS Document Manager API
caption: Replace References
description: Example demonstrates how to replace references (components or drawing views) in SOLIDWORKS files using Document Manager API
labels: [document manager, references, replace, components, drawing views]
---
This example demonstrates how to replace references (components or drawing views) in SOLIDWORKS files (assemblies or drawings) using Document Manager API.

* Specify the full path to the parent file (e.g. assembly)
* Specify the full path to the document to replace
* Specify the full path to the new document

[ISwDMDocument::ReplaceReference](https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmdocument~replacereference.html) SOLIDWORKS Document Manager API method is used to replace the old reference with new one.

~~~ vb
Const FILE_PATH As String = "Full path to replace reference in"
Const ORIGINAL_REFERENCE As String = "Full path to reference to be replaced"
Const NEW_REFERENCE As String = "Full path to the new reference"

Const LIC_KEY As String = "Your license key"

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
    
    'this method must be called otherwise replacement will fail
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


~~~


---
title: Get all external references of document using SOLIDWORKS Document Manager API
caption: Get All External References
description: Macro demonstrates how to extract all external references (including nested references) for specified SOLIDWORKS file using Document Manager API
labels: [document manager, external references, components]
---
This macro demonstrates how to extract all external references (including nested references, assembly components, drawing views) for specified SOLIDWORKS file (part, assembly or drawing) using SOLIDWORKS Document Manager API.

Modify the macro and specify the full path to the root file to collect references from.

Run the macro. All references are output to the immediate window.

Macro is using the [ISwDMDocument21::GetAllExternalReferences5](https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument21~GetAllExternalReferences5.html) SOLIDWORKS Document Manager API to list all the dependencies of the files. This method is called recursively to collect the references at all levels of SOLIDWORKS assembly.

~~~ vb
Const FILE_PATH As String = "FILE PATH"

Const LIC_KEY As String = "YOUR LICENSE KEY"

Dim swDmApp As SwDocumentMgr.SwDMApplication4

Sub main()

    Dim swClassFact As SwDocumentMgr.SwDMClassFactory
    
    Set swClassFact = New SwDocumentMgr.SwDMClassFactory
    
    Set swDmApp = swClassFact.GetApplication(LIC_KEY)
    
    Dim filesColl As Collection
    Set filesColl = New Collection
    
    CollectExternalReferences FILE_PATH, filesColl
    
    Dim i As Integer
    
    Debug.Print "External References:"
    
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
        Debug.Print "Failed to open document: " & filePath
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
~~~


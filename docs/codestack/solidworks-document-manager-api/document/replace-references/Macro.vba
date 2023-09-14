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


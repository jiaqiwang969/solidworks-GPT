---
title: Add invisible custom property to the model using SOLIDWORKS Document Manager API
caption: Add Invisible Custom Property
description: VBA macro to add invisible custom property to the model using SOLIDWORKS Document Manager API
labels: [invisible, custom property]
---
SOLIDWORKS models contain several invisible custom properties, such as $PRP:"SW-File Name", $PRP:"SW-Title". Those are read-only and cannot be modified from the user interface. It is however possible to add new custom property using Document Manager API. This property is not available in the custom property manager page and cannot be modified by the user or SOLIDWORKS API.

This VBA example shows how to add the invisible custom property for the specified model. Configure the macro as follows:

~~~ vb
Const FILE_PATH As String = "C:\SampleModel.SLDPRT" 'Full path to file to add invisible property to
Const PRP_NAME As String = "MyProperty" 'Property name to add
Const PRP_VAL As String = "MyValue" 'Property value to assign
~~~

~~~ vb
Const SW_DM_KEY As String = "Your license"

Const FILE_PATH As String = "C:\SampleModel.SLDPRT"
Const PRP_NAME As String = "MyProperty"
Const PRP_VAL As String = "MyValue"

Dim swDmClassFactory As SwDocumentMgr.swDmClassFactory
Dim swDmApp As SwDocumentMgr.SwDMApplication

Sub main()

    Set swDmClassFactory = CreateObject("SwDocumentMgr.SwDMClassFactory")
    
    If Not swDmClassFactory Is Nothing Then
        
        Set swDmApp = swDmClassFactory.GetApplication(SW_DM_KEY)
        Dim swDmDoc As SwDocumentMgr.SwDMDocument19
        Set swDmDoc = OpenDocument(FILE_PATH, False)
        
        swDmDoc.AddInvisibleCustomProperty PRP_NAME, SwDmCustomInfoType.swDmCustomInfoText, PRP_VAL
        swDmDoc.SetInvisibleCustomProperty PRP_NAME, PRP_VAL
        
        swDmDoc.Save
        swDmDoc.CloseDoc
        
    Else
        MsgBox "Document Manager SDK is not installed"
    End If
    
End Sub

Function OpenDocument(filePath As String, readOnly As Boolean) As SwDocumentMgr.SwDMDocument19
    
    Dim openErr As SwDmDocumentOpenError
    
    Dim docType As SwDocumentMgr.SwDmDocumentType
    
    Dim ext As String
    ext = LCase(Right(filePath, Len(".SLDXXX")))
    
    Select Case ext
        Case ".sldprt"
            docType = swDmDocumentPart
        Case ".sldasm"
            docType = swDmDocumentAssembly
        Case ".slddrw"
            docType = swDmDocumentDrawing
    End Select
    
    Dim swDmDoc As SwDocumentMgr.SwDMDocument19
    
    Set swDmDoc = swDmApp.GetDocument(filePath, docType, readOnly, openErr)
    
    If swDmDoc Is Nothing Then
        Err.Raise vbError, "", "Failed to open document: " & openErr
    End If
    
    Set OpenDocument = swDmDoc
    
End Function
~~~


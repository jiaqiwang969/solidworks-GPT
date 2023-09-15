---
title:  Bring Document to Foreground (Activate Document) Using SOLIDWORKS API
caption: Bring Document to Foreground (Activate Document)
---
 This example demonstrates how to use the [ISldWorks::ActivateDoc3](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html) method of the SOLIDWORKS API to bring a document selected by path to the foreground (activate it).
labels: [Activate Document, Assembly, Example, Foreground, Open Document]
redirect-from:
  - /2018/03/bring-document-foreground-activate.html
---
This example demonstrates how to use the [ISldWorks::ActivateDoc3](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html) method of the SOLIDWORKS API to bring a document selected by path to the foreground (activate it).

Documents can be opened in two states, visible or hidden. Hidden documents are typically models loaded into memory from components in an assembly or drawing. In this case, when the [ISldWorks::OpenDoc6](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html) method is called, the document is not automatically brought to the foreground. The same applies when closing a document that was loaded as a component: the document becomes invisible instead of closed.

* Run the macro with no files open - a file will be opened and closed
* Open an assembly and run the macro. In this case, the [ISldWorks::OpenDoc6](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html) API does not force the part to the foreground, so it needs to be activated manually.

[Download Sample Files](SimpleBox.zip)

~~~ vb
Const FILE_NAME As String = "SimpleBox.SLDPRT"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Dim path As String
    path = swApp.GetCurrentMacroPathFolder() & "\" & FILE_NAME
    
    Set swModel = swApp.GetOpenDocumentByName(path)
    
    Dim wasVisible As Boolean
    
    If Not swModel Is Nothing Then
        wasVisible = swModel.Visible
    End If
    
    Set swModel = swApp.OpenDoc6(path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0)
    
    If Not swModel Is Nothing Then
        swApp.ActivateDoc3 swModel.GetTitle(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, 0
    End If
    
    MsgBox "Was Visible: " & wasVisible
    
    If False = wasVisible Then
        swApp.CloseDoc swModel.GetTitle
    End If
    
End Sub


~~~
---
title: Bring document foreground (activate document) using SOLIDWORKS API
caption: Bring Document Foreground (Activate Document)
description: Example demonstrates how to bring the document selected by path to foreground (make active)
labels: [activate doc, assembly, example, foreground, open document]
redirect-from:
  - /2018/03/bring-document-foreground-activate.html
---
This example demonstrates how to bring the document selected by path to foreground (make active) using [ISldWorks::ActivateDoc3](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html) SOLIDWORKS API.

Document can be opened in 2 states (visible or hidden). Hidden document are usually models which are loaded into the memory from the components in the assembly or drawing. In this case when [ISldWorks::OpenDoc6](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html) method is called the document will not be brought foreground automatically. Similar scenario applies to closing the document which is loaded as a component: document will be made invisible rather than closed.

* Run the macro when no files are opened - file will be opened and closed
* Open assembly and run the macro. In this case [ISldWorks::OpenDoc6](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html) API doesn't force the part to be brought foreground, so it is required to force activate it.

[Download sample files](SimpleBox.zip)

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


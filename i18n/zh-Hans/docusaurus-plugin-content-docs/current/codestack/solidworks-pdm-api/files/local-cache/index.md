---
title: Cache file from PDM vault locally using SOLIDWORKS PDM API
caption: Cache File Locally
description: Example demonstrates how to get local copies of the file and all the dependencies using PDM Professional API to be used in desktop application
image: get-latest-version.png
labels: [local copies]
---
This example demonstrates how to get local copies of the file and all the dependencies to be used in desktop application. This macro is an equivalent of the following command:

![Get latest version command in PDM vault](get-latest-version.png){ width=350 }

PDM is a server based application and files are cached locally when they are accessed in PDM via Windows File Explorer. Files cache can be cleared or outdated. That means that desktop applications may fail when trying to access the file in PDM vault if it has not been cached locally. File Not Found error will occur (e.g. when using SOLIDWORKS API to open the file or using File System Object to traverse the folders structure or read any attributes).

To increase the performance this macro utilizes the [IEdmBatchGet](https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmbatchget.html) SOLIDWORKS PDM API interface which enables batch files processing.

To test this scenario

* Get the path to any SOLIDWORKS file in the vault
* Clear the cache of the vault: 

![Clear local cache command in PDM vault](clear-local-cache.png){ width=450 }

* Comment out the *GetLocalCopyFromVault* call in the *main* procedure of the following macro
* Run the macro. Notice that pointer to *swModel* is null and file open call failed
* Uncomment the *GetLocalCopyFromVault* and run macro again. Now the model is successfully opened as the file has been cached locally.

~~~ vb
Const FILE_PATH As String = "FULL PATH TO FILE"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    GetLocalCopyFromVault FILE_PATH, "VAULT NAME", "USER NAME", "PASSWORD"
    
    Dim swOpenDocSpec As SldWorks.DocumentSpecification
    Set swOpenDocSpec = swApp.GetOpenDocSpec(FILE_PATH)
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.OpenDoc7(swOpenDocSpec)

End Sub

Sub GetLocalCopyFromVault(path As String, vaultName As String, userName As String, password As String)
    
    Dim pdmVault As New EdmLib.EdmVault5
    pdmVault.Login userName, password, vaultName
    
    If pdmVault.IsLoggedIn Then
        GetLocalCopies pdmVault, Array(path)
    Else
        MsgBox "Failed to login to vault"
    End If
    
End Sub

Sub GetLocalCopies(vault As EdmLib.EdmVault5, vFilePaths As Variant)
    
    If Not IsEmpty(vFilePaths) Then
        
        Dim pdmBatchGetUtil As EdmLib.IEdmBatchGet
        Set pdmBatchGetUtil = vault.CreateUtility(EdmUtil_BatchGet)
        
        Dim i As Integer
        
        Dim pdmSelItems() As EdmLib.EdmSelItem
        ReDim pdmSelItems(UBound(vFilePaths))
        
        For i = 0 To UBound(vFilePaths)
            
            Dim filePath As String
            filePath = vFilePaths(i)
            
            Dim pdmFile As EdmLib.IEdmFile5
            Dim pdmFolder As EdmLib.IEdmFolder5
            
            Set pdmFile = vault.GetFileFromPath(filePath, pdmFolder)
            
            pdmSelItems(i).mlDocID = pdmFile.ID
            pdmSelItems(i).mlProjID = pdmFolder.ID
            
        Next
        
        pdmBatchGetUtil.AddSelection vault, pdmSelItems
        pdmBatchGetUtil.CreateTree 0, EdmLib.EdmGetCmdFlags.Egcf_RefreshFileListing
        pdmBatchGetUtil.GetFiles 0
        
    End If
    
End Sub
~~~



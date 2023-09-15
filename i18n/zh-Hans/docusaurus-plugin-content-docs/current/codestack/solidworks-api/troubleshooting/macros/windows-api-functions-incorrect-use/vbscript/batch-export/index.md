---
caption: Batch Export Models
title:  Batch export SOLIDWORKS models via vbScript
---
 Example of batch exporting SOLIDWORKS documents from the vbScript
---
This example of vbScript which demonstrates how to batch export SOLIDWORKS documents using vbScript

## Arguments

1. Path to folder with SOLIDWORKS models
1. Filter for the input files extension
1. Path to output folder
1. Extension of the output format

~~~
> "export-sw-models.vbs" "C:\Models" sldprt "C:\Output" step
~~~

~~~ vbs
Dim dirPath
dirPath = WScript.Arguments.Item(0)

Dim filter
filter = WScript.Arguments.Item(1)

Dim outDir
outDir = WScript.Arguments.Item(2)

Dim outExt
outExt = WScript.Arguments.Item(3)

Dim swApp
Set swApp = CreateObject("SldWorks.Application")
swApp.Visible = True

Dim fso
Set fso = CreateObject("Scripting.FileSystemObject")

Dim folder
Set folder = fso.GetFolder(dirPath)

dim file

For Each file in folder.Files
    If LCase(fso.GetExtensionName(file.Path)) = LCase(filter) Then
        Dim docSpec
        Set docSpec = swApp.GetOpenDocSpec(file.Path)
        docSpec.ReadOnly = True

        Dim swModel
        Set swModel = swApp.OpenDoc7(docSpec)

        If Not swModel is Nothing Then
            Dim outFilePath
            outFilePath = outDir & "\" & fso.GetBaseName(file) & "." & outExt
            swModel.SaveAs outFilePath
            swApp.CloseDoc swModel.GetTitle()
        End If
    End If
Next

swApp.ExitApp
~~~


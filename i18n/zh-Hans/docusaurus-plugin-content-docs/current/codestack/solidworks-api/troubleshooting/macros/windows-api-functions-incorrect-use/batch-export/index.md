---
caption: 批量导出模型
title:  通过vbScript批量导出SOLIDWORKS模型
---
 使用vbScript批量导出SOLIDWORKS文档的示例
---

这是一个使用vbScript批量导出SOLIDWORKS文档的示例。

## 参数

1. SOLIDWORKS模型所在文件夹的路径
2. 输入文件扩展名的过滤器
3. 输出文件夹的路径
4. 输出格式的扩展名

```shell
> "export-sw-models.vbs" "C:\Models" sldprt "C:\Output" step
```

```vbs
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
```


---
title: 使用Visual Basic（VBA）将文本内容写入文件
caption: 写入文本文件
description: 使用Visual Basic（VBA）将文本内容写入文件的函数，可以选择覆盖或追加内容。
labels: [写入,文本,输出]
---
此代码片段演示了如何使用Visual Basic（VBA）将文本写入指定的文件。该函数可以选择覆盖现有内容或追加内容。

以下代码片段将覆盖目标文本文件中的数据：

```vb
WriteText("C:\MyFolder\MyFile.txt", "文本数据", False)
```

而以下代码片段将追加数据：

```vb
WriteText("C:\MyFolder\MyFile.txt", "文本数据", True)
```

如果文件不存在，代码将自动创建新文件。

如果发生任何错误（例如无法访问文件进行写入），将引发异常。

```vb
Sub WriteText(filePath As String, content As String, append As Boolean)
    
    Dim fileNo As Integer
    fileNo = FreeFile
    
    If append Then
        Open filePath For Append As #fileNo
    Else
        Open filePath For Output As #fileNo
    End If
    
    Print #fileNo, content
    
    Close #fileNo
    
End Sub
```
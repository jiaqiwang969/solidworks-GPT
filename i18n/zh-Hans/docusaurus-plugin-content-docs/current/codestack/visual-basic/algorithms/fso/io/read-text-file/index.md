---
title: 使用Visual Basic（VBA）读取文本文件内容
caption: 读取文本文件
description: 使用Visual Basic（VBA）将文本文件的内容读取到变量中
labels: [read,input]
---

以下代码片段演示了如何从指定的文件中读取文本内容。

```vb
Dim content As String
content = ReadText("C:\MyFolder\MyFile.txt")
```

如果文件不存在或无法读取，代码将生成异常。

```vb
Function ReadText(filePath As String) As String
    
    Dim fileNo As Integer

    fileNo = FreeFile
    
    Dim content As String
    
    Dim isFirstLine As Integer
    isFirstLine = True
    
    Open filePath For Input As #fileNo
    
    Do While Not EOF(fileNo)
        
        Dim line As String
        
        Line Input #fileNo, line
        
        content = content & IIf(Not isFirstLine, vbLf, "") & line
        isFirstLine = False
        
    Loop
    
    Close #fileNo
    
    ReadText = content
    
End Function
```
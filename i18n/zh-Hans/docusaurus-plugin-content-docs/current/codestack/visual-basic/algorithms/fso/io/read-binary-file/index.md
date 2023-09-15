---
title:  使用Visual Basic（VBA）读取二进制文件内容
caption: 读取二进制文件
---
 使用Visual Basic（VBA）将二进制文件内容读取到字节数组中
labels: [读取,输入,二进制]
---

以下代码片段演示了如何在Visual Basic 6（VBA）中从指定文件中读取二进制内容到类型为*Byte()*的变量中。

```vb
Dim content As Byte()
content = ReadByteArrFromFile("C:\MyFolder\MyFile.dat")
```

如果文件不存在或无法读取，代码将生成异常。

```vb
Function ReadByteArrFromFile(filePath) As Byte()

    Dim buff() As Byte
    
    Dim fileNumb As Integer
    fileNumb = FreeFile
    
    Open filePath For Binary Access Read As fileNumb
    
    ReDim buff(0 To LOF(fileNumb) - 1)
    
    Get fileNumb, , buff
    
    Close fileNumb
    
    ReadByteArrFromFile = buff
    
End Function
```

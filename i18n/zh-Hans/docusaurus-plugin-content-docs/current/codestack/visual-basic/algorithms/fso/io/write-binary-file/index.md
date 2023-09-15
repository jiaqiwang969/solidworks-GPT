---
title: 使用Visual Basic（VBA）将二进制内容写入文件
caption: 写入二进制文件
description: 使用Visual Basic（VBA）将字节数组的二进制内容写入文件的函数
labels: [write,text,output]
---
这段代码演示了如何使用Visual Basic（VBA）将类型为*Byte()*的变量中的二进制数据写入指定的文件。

下面的代码段将覆盖目标二进制文件中的数据。

``` vb
Dim arr(5237) As Byte
arr(0) = 12: arr(1) = 1: arr(2) = 0
...
WriteByteArrToFile("C:\MyFolder\MyFile.dat")
```

如果文件不存在，代码将自动创建新文件。

如果出现任何错误（例如无法访问文件进行写入），将抛出异常。

``` vb
Function WriteByteArrToFile(filePath As String, buffer() As Byte)

    Dim fileNmb As Integer
    fileNmb = FreeFile
    
    Open filePath For Binary Access Write As #fileNmb
    Put #fileNmb, 1, buffer
    Close #fileNmb
    
End Function
```
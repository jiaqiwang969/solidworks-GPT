---
title: Reading the content of binary file using Visual Basic (VBA)
caption: Read Binary File
description: Reading the content of binary file into the byte array using Visual Basic (VBA)
labels: [read,input,binary]
---
The below code snippet demonstrates how to read the binary content into the variable of type *Byte()* from the specified file in Visual Basic 6 (VBA).

~~~ vb
Dim content As Byte()
content = ReadByteArrFromFile("C:\MyFolder\MyFile.dat")
~~~

Code will generate an exception if file doesn't exist or cannot be read.

~~~ vb
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
~~~


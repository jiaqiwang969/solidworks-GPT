---
title: Reading the content of text file using Visual Basic (VBA)
caption: Read Text File
description: Reading the content of text file into the variable using Visual Basic (VBA)
labels: [read,input]
---
The below code snippet demonstrates how to read the text content from the specified file.

~~~ vb
Dim content As String
content = ReadText("C:\MyFolder\MyFile.txt")
~~~

Code will generate an exception if file doesn't exist or cannot be read.

~~~ vb
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
~~~


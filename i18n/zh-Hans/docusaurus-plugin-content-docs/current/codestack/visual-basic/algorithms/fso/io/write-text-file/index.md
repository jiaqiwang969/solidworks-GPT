---
title: Write Text Content to a File Using Visual Basic (VBA)
caption: Write Text to File
description: This function demonstrates how to write text content to a file using Visual Basic (VBA), with the option to overwrite or append the content.
labels: [write, text, output]
---

This code snippet demonstrates how to write text to a specified file using Visual Basic (VBA). The function allows you to choose whether to overwrite existing content or append to it.

The following code snippet will overwrite the data in the target text file:

```vb
WriteText("C:\MyFolder\MyFile.txt", "Text data", False)
```

And the following code snippet will append the data:

```vb
WriteText("C:\MyFolder\MyFile.txt", "Text data", True)
```

If the file does not exist, the code will automatically create a new file.

If any errors occur, such as being unable to access the file for writing, an exception will be thrown.

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
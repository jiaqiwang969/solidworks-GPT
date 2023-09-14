---
title: Writing the text content into the file using Visual Basic (VBA)
caption: Write Text File
description: Function to write the text content into a file using Visual Basic (VBA) with an option to overwrite or append content.
labels: [write,text,output]
---
This code snippet demonstrates how to write text into the specified file using Visual Basic (VBA). Function has an option to overwrite existing content or append it.

The below snippet will overwrite the data in the destination text file

~~~ vb
WriteText("C:\MyFolder\MyFile.txt", "Text Data", False)
~~~

While this snippet will append the data

~~~ vb
WriteText("C:\MyFolder\MyFile.txt", "Text Data", True)
~~~

Code will automatically create new file if it doesn't exist.

Exception will be thrown in case of any error (for example file cannot be accessed for writing).

~~~ vb
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
~~~


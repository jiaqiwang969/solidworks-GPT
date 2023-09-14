---
title: Embed Array In Visual Basic 6 (VBA) code
caption: Embed Arrays
description: Workarounds for embedding data in array within the Visual Basic 6 (VBA) project
image: array-text-declaration.png
labels: [embed array,declare array]
---
In some cases it might be required to embed file or data directly into the Visual Basic 6 project or VBA macro. Resources are not supported in Visual Basic. The below functions demonstrate how to embed the binary array into the macro without the need to redistribute the data file.

## Writing the array declaration

This option allows to output the array declaration into a text format which can be copy-pasted to the macro as variable declaration

~~~vb
Dim buff(5) As Byte
buff(0) = 1: buff(1) = 2: buff(2) = 3
buff(3) = 4: buff(4) = 5: buff(5) = 6

WriteArrayDeclarationToFile buff, "D:\arr.txt", "arr", "Byte", 2
~~~

Just copy the content of the generated file and paste into the macro module to embed the data.

![Array declared as text](array-text-declaration.png)

~~~ vb
Sub WriteArrayDeclarationToFile(buffer As Variant, filePath As String, varName As String, typeName As String, Optional elemsPerRow As Integer = 10)
    
    Dim fileNo As Integer
    fileNo = FreeFile
    
    Open filePath For Output As #fileNo
    
    Print #fileNo, "Dim " & varName & "(" & UBound(buffer) & ") As " & typeName
    
    Dim i As Long
    
    For i = 0 To UBound(buffer) Step elemsPerRow
        
        Dim j As Long
        Dim last As Long
        
        If i + elemsPerRow > UBound(buffer) Then
            last = UBound(buffer)
        Else
            last = i + elemsPerRow - 1
        End If
        
        Dim line As String
        line = ""
        
        For j = i To last
            Dim val As String
            val = buffer(j)
            If LCase(typeName) = "string" Then
                val = """" & val & """"
            End If
            line = IIf(line <> "", line & ": ", "") + varName & "(" & j & ")=" & val
        Next
        
        Print #fileNo, line
        
    Next
    
    Close #fileNo
    
End Sub
~~~



This approach however has a limitation as the size of the file would be much bigger than the size of the array (e.g. array of size 500 KB would generate the file of about 10 MB). This results into the *'Out of memory'* error in Visual Basic

![Out of memory error in VBA](vba-out-of-memory-error.png)

## Writing the base64 encoded array

As the workaround array can be embedded as Base64 string. Follow the following article for the code example of [encoding the byte array into base64 string](/docs/codestack/visual-basic/algorithms/data/encoding/base64#encode)

~~~vb
Dim buff(100) As Byte
...
WriteByteArrayDeclarationToFileAsBase64 buff, "D:\arr1.txt"
~~~

This would result in the following file to be created:

![Base64 encoded array](array-base64-encoded.png){ width=350 }

Declare the string constant and paste the value from this file. [Decode](/docs/codestack/visual-basic/algorithms/data/encoding/base64#decode) this string to get the byte array.

This solution can also run into the limitation of the maximum symbols per line.

![Line length limitation in VBA](vba-line-length-limitation.png)

To overcome this use the 3rd parameter of *WriteByteArrayDeclarationToFileAsBase64* method which allows to set the maximum number of symbols and automatically split the line with line continuation symbol:

~~~vb
WriteByteArrayDeclarationToFileAsBase64 buff, "D:\arr1.txt", 100
~~~

The function provides the workaround for the limitation of maximum numbers of continuations which is equal to 24 (*'Too many line continuations'*) and splits the data in different functions.

![Too many line continuations error in VBA](too-many-line-continuations.png)

As the result the data is written to the file in the following format:

![Base64 encoded string split by functions](vba-array-split-by-functions.png){ width=350 }

To use this, copy the content into the module and call the *GetBase64Buffer* function from the code which will return the base 64 encoded array which can be [decoded](/docs/codestack/visual-basic/algorithms/data/encoding/base64#decode).

~~~ vb
Sub WriteByteArrayDeclarationToFileAsBase64(buffer As Variant, filePath As String, Optional lineMaxLength As Integer = -1)
    
    Const FUNC_NAME = "GetBufferPart"
    
    Dim fileNo As Integer
    fileNo = FreeFile
    
    Open filePath For Output As #fileNo
        
    Dim data As String
    data = ConvertToBase64String(buffer)
    data = Replace(data, vbLf, "")
    
    If lineMaxLength > 1 Then
            
        Const MAX_LINE_CONTINUATIONS As Integer = 24
        
        Dim curLineIndex As Integer
        Dim curCont As Integer
        curLineIndex = 0
        
        Dim i As Long
        
        Dim funcsCount As Integer
        funcsCount = Round((Len(data) - 1) / lineMaxLength / MAX_LINE_CONTINUATIONS) - 1
        
        Print #fileNo, "Function GetBase64Buffer() As String"
                
        For i = 0 To funcsCount
            Print #fileNo, "GetBase64Buffer = GetBase64Buffer & " & FUNC_NAME & i & "()"
        Next
        
        Print #fileNo, "End Function"
        
        Dim funcName As String
        
        For i = 1 To Len(data) Step lineMaxLength
            
            If curCont = MAX_LINE_CONTINUATIONS Then
                curCont = 0
                curLineIndex = curLineIndex + 1
            End If
            
            Dim length As Integer
        
            Dim isLast As Boolean
            isLast = False
            
            If i + lineMaxLength > Len(data) Then
                length = Len(data) - i + 1
                isLast = True
            Else
                length = lineMaxLength
            End If
            
            curCont = curCont + 1
            
            If curCont = 1 Then
                funcName = FUNC_NAME & curLineIndex
                Print #fileNo, "Function " & funcName & "() As String"
            End If
            
            isLast = isLast Or curCont >= MAX_LINE_CONTINUATIONS
            
            Dim lineConc As String
            lineConc = ""
            If Not isLast Then
                lineConc = " & _"
            End If
            
            Print #fileNo, IIf(curCont = 1, funcName & " = ", ""); """" & Mid(data, i, length) & """" & lineConc
            
            If isLast Then
                Print #fileNo, "End Function"
            End If
            
        Next
        
    Else
        Print #fileNo, data
    End If
    
    Close #fileNo
    
End Sub

Function ConvertToBase64String(vArr As Variant) As String
    
    Dim xmlDoc As Object
    Dim xmlNode As Object
    
    Set xmlDoc = CreateObject("MSXML2.DOMDocument")
    
    Set xmlNode = xmlDoc.createElement("b64")
    
    xmlNode.DataType = "bin.base64"
    xmlNode.nodeTypedValue = vArr
    
    ConvertToBase64String = xmlNode.Text
    
End Function
~~~



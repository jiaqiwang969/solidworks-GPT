---
title: Encoding and decoding data in Base64 string format in Visual Basic 6 (VBA)
caption: Base64 String
description: Encoding and decoding byte array into Base64 string format in Visual Basic 6 (VBA)
labels: [base64,encoding,decoding]
---
Base64 string allow to hold the byte array data in the string format

## Encode

~~~vb
Dim arr(5) As Byte
arr(0) = 1: arr(1) = 5: arr(2) = 2
arr(3) = 21: arr(4) = 101: arr(5) = 51

Dim base64Str As String
base64Str = ConvertToBase64String(arr) 'AQUCFWUz
~~~

~~~ vb
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



## Decode

~~~vb
Dim base64Str As String
base64Str = "AQUCFWUz"

dim vArr As Variant
vArr = Base64ToArray(base64Str) 'Byte array: 1, 5, 2, 21, 101, 51
~~~

~~~ vb
Private Function Base64ToArray(base64 As String) As Variant
    
    Dim xmlDoc As Object
    Dim xmlNode As Object
    
    Set xmlDoc = CreateObject("MSXML2.DOMDocument")
    Set xmlNode = xmlDoc.createElement("b64")
    
    xmlNode.DataType = "bin.base64"
    xmlNode.Text = base64
    
    Base64ToArray = xmlNode.nodeTypedValue
  
End Function
~~~


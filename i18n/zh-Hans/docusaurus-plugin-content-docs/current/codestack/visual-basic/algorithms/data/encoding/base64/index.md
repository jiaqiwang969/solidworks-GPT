---
title: 在Visual Basic 6 (VBA)中将数据编码和解码为Base64字符串格式
caption: Base64字符串
description: 在Visual Basic 6 (VBA)中将字节数组编码和解码为Base64字符串格式
labels: [base64,编码,解码]
---
Base64字符串允许以字符串格式保存字节数组数据。

## 编码

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



## 解码

~~~vb
Dim base64Str As String
base64Str = "AQUCFWUz"

dim vArr As Variant
vArr = Base64ToArray(base64Str) '字节数组: 1, 5, 2, 21, 101, 51
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
---
title: 使用SOLIDWORKS文档管理器API读取所有不可见的自定义属性
caption: 读取所有不可见的自定义属性
description: 使用SOLIDWORKS文档管理器API从指定模型中读取并输出所有不可见的自定义属性的VBA示例
labels: [不可见, 自定义属性]
---
SOLIDWORKS模型包含多个不可见的自定义属性，例如$PRP:"SW-File Name"，$PRP:"SW-Title"。这些属性是只读的，无法修改。

这个VBA宏使用SOLIDWORKS文档管理器API从指定的模型中读取并输出所有不可见的自定义属性。结果以以下格式输出到VBA编辑器的即时窗口中：

~~~
...
SW-Short Date: 12/09/2019 [文本]
SW-Long Date: Thursday, 12 September 2019 [文本]
SW-Configuration Name: A [文本]
...
SW-Created Date: Tuesday, 10 September 2019 10:46:55 AM [文本]
SW-Last Saved Date: Thursday, 12 September 2019 8:33:04 PM [文本]
SW-Last Saved By: artem.taturevych [文本]
...
MyProperty: MyValue [文本]
~~~

在*FILE_PATH*常量中指定要读取属性的文件。

~~~ vb
Const SW_DM_KEY As String = "您的许可证密钥"

Const FILE_PATH As String = "C:\SampleModel.SLDPRT"

Dim swDmClassFactory As SwDocumentMgr.swDmClassFactory
Dim swDmApp As SwDocumentMgr.SwDMApplication

Sub main()

    Set swDmClassFactory = CreateObject("SwDocumentMgr.SwDMClassFactory")
    
    If Not swDmClassFactory Is Nothing Then
        
        Set swDmApp = swDmClassFactory.GetApplication(SW_DM_KEY)
        Dim swDmDoc As SwDocumentMgr.SwDMDocument19
        Set swDmDoc = OpenDocument(FILE_PATH, True)
        
        Dim vPrpNames As Variant
        vPrpNames = swDmDoc.GetInvisibleCustomPropertyNames()
        
        If Not IsEmpty(vPrpNames) Then
            
            Dim i As Integer
            
            For i = 0 To UBound(vPrpNames)
            
                Dim prpName As String
                prpName = vPrpNames(i)
                
                Dim prpType As SwDmCustomInfoType
            
                Dim prpTypeName As String
                
                Dim prpVal As String
                prpVal = swDmDoc.GetInvisibleCustomProperty(prpName, prpType)
                
                Select Case prpType
                    Case SwDmCustomInfoType.swDmCustomInfoDate
                        prpTypeName = "日期"
                    Case SwDmCustomInfoType.swDmCustomInfoNumber
                        prpTypeName = "数字"
                    Case SwDmCustomInfoType.swDmCustomInfoText
                        prpTypeName = "文本"
                    Case SwDmCustomInfoType.swDmCustomInfoYesOrNo
                        prpTypeName = "是/否"
                    Case SwDmCustomInfoType.swDmCustomInfoUnknown
                        prpTypeName = "未知"
                End Select
            
                Debug.Print prpName & ": " & prpVal & " [" & prpTypeName & "]"
            Next
            
        End If
        
    Else
        MsgBox "未安装文档管理器SDK"
    End If
    
End Sub

Function OpenDocument(filePath As String, readOnly As Boolean) As SwDocumentMgr.SwDMDocument19
    
    Dim openErr As SwDmDocumentOpenError
    
    Dim docType As SwDocumentMgr.SwDmDocumentType
    
    Dim ext As String
    ext = LCase(Right(filePath, Len(".SLDXXX")))
    
    Select Case ext
        Case ".sldprt"
            docType = swDmDocumentPart
        Case ".sldasm"
            docType = swDmDocumentAssembly
        Case ".slddrw"
            docType = swDmDocumentDrawing
    End Select
    
    Dim swDmDoc As SwDocumentMgr.SwDMDocument19
    
    Set swDmDoc = swDmApp.GetDocument(filePath, docType, readOnly, openErr)
    
    If swDmDoc Is Nothing Then
        Err.Raise vbError, "", "打开文档失败: " & openErr
    End If
    
    Set OpenDocument = swDmDoc
    
End Function
~~~
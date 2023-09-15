---
layout: sw-tool
title: 使用SOLIDWORKS API将标题设置为零件编号
caption: 将标题设置为下一个零件编号
description: 使用SOLIDWORKS API从共享文件中自动递增的编号设置标题的VBA宏，用于新建文件
image: automatic-model-title.png
labels: [零件编号,标题]
group: 模型
---
![将模型标题设置为零件编号](automatic-model-title.png){ width=450 }

这个VBA宏使用SOLIDWORKS API自动递增零件编号，并将其设置为新创建文件的标题。

零件编号递增并存储在外部文本文件中，如果需要，可以在不同用户之间共享。

![文本文件中的当前零件编号值](part-number-storage-file.png){ width=350 }

该宏提供了几种格式化标题的选项，可以通过修改宏中常量的值来进行修改。

~~~ vb
Const NMB_SRC_FILE_PATH As String = "D:\prt.txt" '存储当前零件索引的路径
Const NMB_FORMAT As String = "000" '数字的填充，例如001、002，而不是1、2
Const BASE_NAME As String = "PRT-" '文件命名的基本前缀
~~~

请参考[在文档加载时运行宏](/docs/codestack/solidworks-api/application/documents/handle-document-load/)文章中的视频教程，了解如何自动运行此宏以对每个新创建的模型进行操作的指南。

~~~ vb
Const NMB_SRC_FILE_PATH As String = "D:\prt.txt"
Const NMB_FORMAT As String = "000"
Const BASE_NAME As String = "PRT-"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
        
    Dim swModel As SldWorks.ModelDoc2
        
    Set swModel = swApp.ActiveDoc
    
    Dim lastNumber As Integer
    
    lastNumber = ReadNumber(NMB_SRC_FILE_PATH)
    
    Dim thisNumber As Integer
    thisNumber = lastNumber + 1
    
    Dim name As String
    name = BASE_NAME & Format(thisNumber, NMB_FORMAT)
    
    If False = swModel.SetTitle2(name) Then
        Err.Raise vbError, "", "设置标题失败"
    End If
    
    StoreNumber NMB_SRC_FILE_PATH, thisNumber
    
End Sub

Function ReadNumber(filePath As String) As Integer
    
    Dim fileNo As Integer

    fileNo = FreeFile
    
    Dim number As String
    
    Open filePath For Input As #fileNo
        
    Line Input #fileNo, number
    
    Close #fileNo
    
    ReadNumber = CInt(number)
    
End Function

Sub StoreNumber(filePath As String, number As Integer)
    
    Dim fileNo As Integer
    fileNo = FreeFile
    
    Open filePath For Output As #fileNo
    
    Print #fileNo, CStr(number)
    
    Close #fileNo
    
End Sub
~~~
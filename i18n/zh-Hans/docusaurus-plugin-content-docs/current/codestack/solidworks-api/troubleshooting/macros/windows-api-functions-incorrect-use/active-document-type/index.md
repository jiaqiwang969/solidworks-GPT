---
title: 使用SOLIDWORKS API确定活动文档的类型
caption: 确定活动文档的类型
description: 该示例显示当前在SOLIDWORKS中活动文档的类型的消息框。无论文档是否保存，都可以使用[IModelDoc2::GetType](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~GetType.html) SOLIDWORKS API方法返回类型枚举，以识别文档为SOLIDWORKS零件、装配体或图纸。

labels: [装配体, 文档, 绘图, 示例, 零件, 类型]
redirect-from:
  - /2018/03/determine-type-of-active-document.html
---

该示例显示当前在SOLIDWORKS中活动文档的类型的消息框。无论文档是否保存，都可以使用[IModelDoc2::GetType](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~GetType.html) SOLIDWORKS API方法返回类型枚举，以识别文档为SOLIDWORKS零件、装配体或图纸。

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Select Case swModel.GetType
            
            Case swDocPART:
                MsgBox "活动文档是零件"
            
            Case swDocASSEMBLY:
                MsgBox "活动文档是装配体"
                
            Case swDocDRAWING:
                MsgBox "活动文档是图纸"
        End Select
        
    Else
        
        MsgBox "未打开文档"
        
    End If
    
End Sub
```

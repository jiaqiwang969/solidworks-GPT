---
title: 使用SOLIDWORKS API确定活动文档的类型
caption: 确定活动文档的类型
description: 该示例显示当前在SOLIDWORKS中活动文档的类型的消息框。
labels: [装配, 文档, 绘图, 示例, 零件, 类型]
redirect-from:
  - /2018/03/determine-type-of-active-document.html
---

该示例显示当前在SOLIDWORKS中活动文档的类型的消息框。无论文档是否已保存，此示例都可以工作。可以使用[SOLIDWORKS API方法IModelDoc2::GetType](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~GetType.html)返回类型枚举，以识别文档为SOLIDWORKS零件、装配或绘图。

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
                MsgBox "活动文档是装配"
                
            Case swDocDRAWING:
                MsgBox "活动文档是绘图"
        End Select
        
    Else
        
        MsgBox "未打开文档"
        
    End If
    
End Sub
```
---
title:  捕获 SOLIDWORKS API 通知中的新特征创建事件
caption: 捕获新特征创建事件
---
 该示例使用 SOLIDWORKS API 捕获活动零件文档的特征添加事件，并显示消息框。
labels: [事件, 示例, 特征管理器, 新特征, solidworks api]
redirect-from:
  - /2018/03/solidworks-api-features-manager-catch-adding-feat-event.html
---
该示例使用 SOLIDWORKS API 捕获活动零件文档的特征添加事件。

一旦捕获到新特征创建通知，宏将向用户显示消息框。

监听器在活动零件关闭时被解除。

*宏模块*

```vb
Dim swApp As SldWorks.SldWorks
Dim swEventListener As EventListener

Sub main()

    Set swApp = Application.SldWorks
    
    Set swEventListener = New EventListener
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    swEventListener.SetPart swPart
    
    While swApp.ActiveDoc Is swPart
        DoEvents
    Wend
    
End Sub
```

*EventListener 类*

```vb
Dim WithEvents swPart As SldWorks.PartDoc

Private Function swPart_AddItemNotify(ByVal EntityType As Long, ByVal itemName As String) As Long

    If EntityType = swNotifyEntityType_e.swNotifyFeature Then
        MsgBox itemName & " 特征已添加"
    End If
    
End Function

Sub SetPart(part As SldWorks.PartDoc)
    
    Set swPart = part
    
End Sub
```
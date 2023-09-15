---
title: 在SOLIDWORKS API中使用持久引用ID跟踪对象
caption: 持久引用ID
description: 本文介绍在SOLIDWORKS会话中使用持久引用ID来跟踪可选择的实体
image: persist-id-array.png
labels: [persistent, reference, tracking]
---

SOLIDWORKS API中提供的持久引用ID允许检索SOLIDWORKS中任何可选择对象的持久链接。持久引用的主要优点是其生命周期，因为引用在重建操作、SOLIDWORKS会话甚至SOLIDWORKS版本之间仍然有效。

持久引用ID是一个字节数组。该数组可能会因为相同引用而发生变化，因此无法通过比较两个数组来确定引用是否相同。使用[IModelDocExtension::IsSamePersistentID方法](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~issamepersistentid.html)来确定两个持久引用是否相同。

![在VBA编辑器的监视窗口中显示的持久引用的字节数组](persist-id-array.png){ width=350 }

即使对于相同的实体，数组可能会发生变化，但仍然可以通过[SOLIDWORKS API方法IModelDocExtension::GetPersistReference3](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~getpersistreference3.html)检索到实体的有效指针。

以下示例将任何选定实体的持久ID以base64字符串的格式输出到即时窗口中：

![将持久引用ID转换为base64字符串后在VBA编辑器的即时窗口中显示](immediate-window-persist-id.png)

使用此示例来读取实体的ID。

> 输出到即时窗口的ID可能包含换行符。应该从ID中删除换行符，并将其视为单行字符串。

```vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        Dim swObj As Object
        Set swObj = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swObj Is Nothing Then
            Dim vId As Variant
            vId = swModel.Extension.GetPersistReference3(swObj)
            Debug.Print ConvertToBase64String(vId)
        Else
            MsgBox "Please select object to get its persist id"
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
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
```



以下示例允许通过从持久ID中检索其指针来选择对象。

* 复制上一个宏中的ID
* 关闭示例模型
* 重新打开模型并运行示例。
* 将复制的ID输入到框中
* 重新选择前一个示例中选择的实体

```vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim id As String
        id = InputBox("Enter persist id encoded in base64 format")
        
        If id <> "" Then
            
            Dim vId As Variant
            vId = Base64ToArray(id)
            
            Dim swObj As Object
            Dim err As Long
            
            Set swObj = swModel.Extension.GetObjectByPersistReference3(vId, err)
            
            If Not swObj Is Nothing Then
                Dim swSelObj(0) As Object
                Set swSelObj(0) = swObj
                swModel.Extension.MultiSelect2 swSelObj, False, Nothing
            Else
                MsgBox "Failed to get the object by persist reference. Error code " & err & " as defined in swPersistReferencedObjectStates_e"
            End If
            
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Private Function Base64ToArray(base64 As String) As Variant
    
    Dim xmlDoc As Object
    Dim xmlNode As Object
    
    Set xmlDoc = CreateObject("MSXML2.DOMDocument")
    Set xmlNode = xmlDoc.createElement("b64")
    
    xmlNode.DataType = "bin.base64"
    xmlNode.Text = base64
    
    Base64ToArray = xmlNode.nodeTypedValue
  
End Function
```
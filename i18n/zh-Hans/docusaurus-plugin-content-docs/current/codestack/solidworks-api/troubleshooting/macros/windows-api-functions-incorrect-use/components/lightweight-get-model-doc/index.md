---
title: 使用SOLIDWORKS API从轻量级组件获取模型文档
caption: 从轻量级组件获取模型文档
description: 该示例演示了如何使用SOLIDWORKS API从组件中获取到IModelDoc2接口的指针（即使组件处于抑制或轻量级状态）
image: lightweight-component.png
labels: [装配体, 组件, 示例, 轻量级, 模型文档, 内存, solidworks api]
---

![装配体树中的轻量级组件](lightweight-component.png)

[IComponent2::GetModelDoc2](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IComponent2~GetModelDoc2.html) SOLIDWORKS API方法返回[IModelDoc2](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html)接口的指针。

需要使用该接口来检索模型特定信息（如自定义属性、特征树、注释等）。

对于以轻量级或抑制状态加载的组件，模型文档是不可用的（即指针为*NULL*）。

以下示例演示了如何使用SOLIDWORKS API从组件中获取到IModelDoc2接口的指针（即使组件处于抑制或轻量级状态）。通过将组件直接加载到内存中，无需解析组件或在其自己的窗口中打开文件即可实现该结果。

```vb
Dim swApp As SldWorks.SldWorks
Dim swAssy As SldWorks.AssemblyDoc

Sub main()

    On Error Resume Next
    
    Set swApp = Application.SldWorks
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        
        Dim swComp As SldWorks.Component2
        Set swComp = swAssy.SelectionManager.GetSelectedObject6(1, -1)
        
        If Not swComp Is Nothing Then
        
            Dim swRefModel As SldWorks.ModelDoc2
            Set swRefModel = GetModelDocFromComponent(swComp)
            
            Debug.Print swRefModel.GetTitle
            
        Else
            MsgBox "请选中组件"
        End If
        
    Else
        MsgBox "请打开装配体"
    End If
    
End Sub

Function GetModelDocFromComponent(comp As SldWorks.Component2) As SldWorks.ModelDoc2
    
    Dim swRefModel As SldWorks.ModelDoc2
    Set swRefModel = comp.GetModelDoc2
    
    If swRefModel Is Nothing Then '组件为轻量级或抑制状态
        
        Dim path As String
        path = comp.GetPathName
        
        Dim docType As swDocumentTypes_e
        
        docType = GetDocumentTypeFromPath(path)
        
        On Error GoTo End_
        
        swApp.DocumentVisible False, docType
        
        Dim errs As Long
        Dim wrns As Long
        Set swRefModel = swApp.OpenDoc6(path, docType, swOpenDocOptions_e.swOpenDocOptions_Silent, "", errs, wrns)
        
End_: '恢复标志，否则所有文件都将以不可见方式打开
    swApp.DocumentVisible True, docType
        
    End If
    
    Set GetModelDocFromComponent = swRefModel

End Function

Function GetDocumentTypeFromPath(path As String) As swDocumentTypes_e
    
    Dim ext As String
    ext = Right(path, Len(path) - InStrRev(path, "."))
    
    Select Case UCase(ext)
        
        Case "SLDPRT"
            GetDocumentTypeFromPath = swDocPART
            Exit Function
            
        Case "SLDASM"
            GetDocumentTypeFromPath = swDocASSEMBLY
            Exit Function
            
        Case "SLDDRW"
            GetDocumentTypeFromPath = swDocDRAWING
            Exit Function
            
    End Select
    
End Function
```


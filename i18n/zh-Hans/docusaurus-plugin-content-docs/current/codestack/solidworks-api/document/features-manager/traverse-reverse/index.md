---
caption: 遍历特征树（反向）
title:  反向遍历 SOLIDWORKS 特征管理器树
---
 VBA 宏以反向顺序遍历 SOLIDWORKS 文档的特征管理器树
---

这个 VBA 宏演示了如何以反向顺序遍历活动 SOLIDWORKS 文档的特征管理器树。

``` vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    Dim i As Integer
    
    i = 0
    
    Dim swFeat As SldWorks.Feature
    
    Do
        
        Set swFeat = swModel.FeatureByPositionReverse(i)
        i = i + 1
        
        If Not swFeat Is Nothing Then
            Debug.Print swFeat.Name
        End If
        
    Loop While Not swFeat Is Nothing
    
End Sub
```

---
caption: 遍历特征树（反向）
title: 在 SOLIDWORKS 特征管理器树中以反向顺序遍历
description: 一个 VBA 宏，用于在 SOLIDWORKS 文档中以反向顺序遍历特征管理器树
---

这个 VBA 宏演示了如何在活动的 SOLIDWORKS 文档中以反向顺序遍历特征管理器树。

~~~ vb
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
~~~
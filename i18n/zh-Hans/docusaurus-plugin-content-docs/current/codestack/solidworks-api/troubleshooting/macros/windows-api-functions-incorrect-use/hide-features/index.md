---
title: 隐藏SOLIDWORKS文件树中的所有选定特征的VBA宏
caption: 在树中隐藏特征
description: VBA宏，可隐藏特征并使其在SOLIDWORKS特征管理器树中不可见
image: hidden-features.png
labels: [特征,隐藏,不可见]
---

这个VBA宏允许在树中使选定的特征不可见。这些特征仍然可以在图形区域中完全可见和操作（例如平面），但在特征管理器树中不可见。

甚至可以使默认特征（例如平面）不可见。

![在特征管理器树中隐藏的草图、右侧和顶部平面](hidden-features.png)

要显示隐藏的特征，请使用[显示隐藏特征](/docs/codestack/solidworks-api/document/features-manager/reveal-hidden-features/)宏。

```vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        Dim i As Integer
        
        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
            Dim swFeat As SldWorks.Feature
            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)
            swFeat.SetUIState swUIStates_e.swIsHiddenInFeatureMgr, True
        Next
        
        swModel.EditRebuild3
    Else
        MsgBox "请打开模型"
    End If
    
End Sub
```

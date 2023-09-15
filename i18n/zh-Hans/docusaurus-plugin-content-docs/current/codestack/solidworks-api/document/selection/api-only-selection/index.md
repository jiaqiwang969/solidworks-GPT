---
title: 仅用于API选择SOLIDWORKS对象
caption: 仅用于API选择对象
description: 示例演示了如何仅为API目的选择对象（不包括图形选择），并保留当前用户选择。
image: extrude-direction-up-to-surface.png
labels: [选择, 拉伸]
---
![将挤压的草图弧线延伸到平面表面，沿着线的方向](extrude-direction-up-to-surface.png){ width=500 }

此示例演示了如何通过仅为API目的选择输入（不包括图形选择），并保留当前用户选择，在SOLIDWORKS零件中创建挤压特征。

运行宏的步骤：

* 下载示例文件并在SOLIDWORKS中打开[挤压选择示例](extrude-selection-example.SLDPRT)
* 选择任意对象（例如，前平面和右平面）
* 逐步调试宏。宏会在数据库中直接预先选择所需的挤压特征对象（对用户不可见）

结果是创建了指定方向的挤压特征，延伸到指定的表面，并保留了所有原始用户选择。

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr

Sub main()

    Set swApp = Application.SldWorks

    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
            
        Set swSelMgr = swModel.SelectionManager
        
        Dim swProfileSketch As SldWorks.Feature
        Set swProfileSketch = swModel.FeatureByName("Profile")
        
        Dim swBoundarySurface As SldWorks.Feature
        Set swBoundarySurface = swModel.FeatureByName("Boundary")
        
        Dim swDirectionSketch As SldWorks.Sketch
        Set swDirectionSketch = swModel.FeatureByName("Direction").GetSpecificFeature
        
        Dim swDirectionSeg As SldWorks.SketchSegment
        Set swDirectionSeg = swDirectionSketch.GetSketchSegments()(0)
        
        swSelMgr.SuspendSelectionList '保留当前选择
        
        '选择用于挤压特征的对象（这些选择在图形视图中不可见）
        AddToCurrentSelectionSet swProfileSketch, 0
        AddToCurrentSelectionSet swBoundarySurface, 1
        AddToCurrentSelectionSet swDirectionSeg, 16
        
        swModel.FeatureManager.FeatureExtrusion2 True, False, False, swEndConditions_e.swEndCondUpToSurface, 0, 0, 0, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False

        '恢复原始选择
        swSelMgr.ResumeSelectionList
        
    Else
        MsgBox "请打开示例模型"
    End If

End Sub

Sub AddToCurrentSelectionSet(obj As Object, selMark As Integer)
    
    Dim swSelData As SldWorks.SelectData
    
    Set swSelData = swSelMgr.CreateSelectData
    
    swSelData.Mark = selMark
    
    swSelMgr.AddSelectionListObject obj, swSelData
    
End Sub
~~~
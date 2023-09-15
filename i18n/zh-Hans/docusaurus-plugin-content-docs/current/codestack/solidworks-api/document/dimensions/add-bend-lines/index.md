---
title:  使用SOLIDWORKS API向弯曲线添加尺寸
caption: 向弯曲线添加尺寸
---
 该示例演示了如何使用SOLIDWORKS API向钣金展开图的绘图视图中的弯曲线添加尺寸。
image: sw-bend-lines.png
labels: [弯曲线, 尺寸, 示例, solidworks api]
redirect-from:
  - /2018/03/solidworks-api-dimensions-dimension-bend-lines.html
---
该示例演示了如何使用SOLIDWORKS API向钣金展开图的绘图视图中的弯曲线添加尺寸。

![钣金展开图中弯曲线之间的尺寸](sw-bend-lines.png){ width=400 height=150 }

需要使用具有分配视图的选择数据对象选择草图线，否则尺寸创建将失败。

使用[IModelDoc2::AddDimension2](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc~adddimension2.html) SOLIDWORKS API来添加尺寸。尺寸位于(0, 0, 0)坐标处。请参考[尺寸可见实体](/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/)示例中的代码片段以计算最佳尺寸位置。

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr
Dim swView As SldWorks.View

Sub main()

    Set swApp = Application.SldWorks

    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Set swSelMgr = swModel.SelectionManager
        
        Set swView = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swView Is Nothing Then
        
            Dim vBendLines As Variant
            vBendLines = swView.GetBendLines
            
            If UBound(vBendLines) >= 1 Then
            
                Dim swSelData As SldWorks.SelectData
                Set swSelData = swSelMgr.CreateSelectData
                swSelData.View = swView '必须设置
                
                swModel.ClearSelection2 True
                
                Dim i As Integer
                
                For i = 0 To 1
                    
                    Dim swSkSeg As SldWorks.SketchSegment
                                        
                    Set swSkSeg = vBendLines(i)
                    
                    swSkSeg.Select4 True, swSelData
                    
                Next
                
                swModel.AddDimension2 0, 0, 0
                
            Else
                MsgBox "绘图视图中应至少有2条弯曲线"
            End If
            
        Else
            MsgBox "请选择带有展开图的绘图视图"
        End If
    
    Else
        MsgBox "请打开绘图"
    End If
End Sub


~~~
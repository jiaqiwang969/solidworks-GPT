---
title:  使用SOLIDWORKS API获取钣金弯曲的草图线
caption: 获取钣金弯曲特征的草图线
---
 使用SOLIDWORKS API查找钣金弯曲特征的所有直线（弯曲）并选择所有线段
image: sheet-metal-sketched-bend.png
labels: [示例, 钣金, 弯曲, solidworks api]
redirect-from:
  - /2018/03/solidworks-api-sheet-metal-get-sketched-bends.html
---
使用SOLIDWORKS API，该宏可以查找钣金*Sketched Bend*特征的所有直线（弯曲）并选择所有线段。

![钣金弯曲特征的草图](sheet-metal-sketched-bend.png){ width=400 }

没有直接的SOLIDWORKS API方法可以获取弯曲，但是弯曲在由钣金特征拥有的草图中表示为草图线段。因此，为了找到弯曲，需要找到该草图并解析其内容。

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
        
    If Not swModel Is Nothing Then
    
        Set swSelMgr = swModel.SelectionManager
        
        Dim swFeat As SldWorks.Feature
        
        Set swFeat = swSelMgr.GetSelectedObject6(1, -1)
        
        If swFeat.GetTypeName2 = "SM3dBend" Then
        
            Dim swBendSketch As SldWorks.Sketch
            
            Set swBendSketch = FindBendSketch(swFeat)
            
            Dim vSegs As Variant
            vSegs = swBendSketch.GetSketchSegments()
            
            swModel.ClearSelection2 True
            
            Dim i As Integer
            
            For i = 0 To UBound(vSegs)
                
                Dim swSkSeg As SldWorks.SketchSegment
                Set swSkSeg = vSegs(i)
                
                If swSkSeg.GetType() = swSketchSegments_e.swSketchLINE Then
                    swSkSeg.Select4 True, Nothing
                End If
                
            Next
            
        Else
            MsgBox "请选择弯曲特征"
        End If
        
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Function FindBendSketch(swFeat As SldWorks.Feature) As SldWorks.Sketch
    
    Dim swSubFeat As SldWorks.Feature
    
    Set swSubFeat = swFeat.GetFirstSubFeature
    
    Do While Not swSubFeat Is Nothing And swSubFeat.GetTypeName2() <> "ProfileFeature"
        
        Set swSubFeat = swSubFeat.GetNextSubFeature
        
    Loop
    
    If Not swSubFeat Is Nothing Then
    
        Set FindBendSketch = swSubFeat.GetSpecificFeature2
        
    Else
        MsgBox "未找到具有弯曲的草图"
        End
    End If
    
End Function


~~~
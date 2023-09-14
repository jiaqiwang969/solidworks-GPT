---
title: 通过SOLIDWORKS API在选定边上创建草图点
caption: 在选定边上创建草图点
description: 该宏使用SOLIDWORKS API在3D草图中的选定边上创建指定数量的草图点。
image: sketch-points-edge.png
labels: [曲线, 评估, 几何, 宏, 点, SOLIDWORKS API, 样条线, 实用工具, VBA]
redirect-from:
  - /2018/03/this-macro-creates-specified-number-of.html
---

该宏使用SOLIDWORKS API在3D草图中的选定边上创建指定数量的草图点。

1. 打开SOLIDWORKS零件
2. *(可选)* 打开3D草图以在现有草图中插入点，否则将创建新的草图
3. 运行宏。输入要生成的点的数量

![选定的边以创建点](selected-edge.png){ width=320 height=239 }

结果将在3D草图中生成指定数量的草图点：

![在边上创建的草图点](sketch-points-edge.png){ width=320 height=204 }

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr

Sub main()

    On Error Resume Next

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    Set swSelMgr = swModel.SelectionManager
    
    Dim isSketchActive As Boolean
    
    isSketchActive = Not swModel.SketchManager.ActiveSketch Is Nothing
    
    If isSketchActive Then
        If Not swModel.SketchManager.ActiveSketch.Is3D Then
            MsgBox "只能将点插入到3D草图中"
            End
        End If
    End If
    
    Dim swEdge As SldWorks.Edge
    
    Set swEdge = swSelMgr.GetSelectedObject6(1, -1)
    
    If Not swEdge Is Nothing Then
        
        Dim swCurve As SldWorks.Curve
        
        Set swCurve = swEdge.GetCurve
        
        Dim vPts As Variant
        
        Dim pointsCount As Integer
        pointsCount = CInt(InputBox("指定点的数量"))
        
        If pointsCount <= 0 Then
            MsgBox "请指定大于1的有效整数"
            End
        End If
        
        vPts = SplitCurveByPoints(swCurve, pointsCount)
    
        swModel.ClearSelection2 True
    
        If Not isSketchActive Then '打开新的3D草图
            swModel.SketchManager.Insert3DSketch True
        End If
        
        Dim i As Integer
        
        For i = 0 To (UBound(vPts) + 1) / 3 - 1
        
            swModel.SketchManager.CreatePoint vPts(i * 3), vPts(i * 3 + 1), vPts(i * 3 + 2)
            
        Next
    
    If Not isSketchActive Then '只有在一开始没有打开草图时才关闭草图
        swModel.SketchManager.Insert3DSketch True
    End If
        
    Else
        MsgBox "请选择边"
    End If
            
End Sub

Function SplitCurveByPoints(swCurve As SldWorks.Curve, pointsNumber As Integer) As Variant
    
    Dim nStartParam As Double
    Dim nEndParam As Double
    Dim bIsClosed As Boolean
    Dim bIsPeriodic As Boolean
    
    Dim incr As Double
    Dim i As Integer
    Dim vParam As Variant
    
    Dim retVal() As Double
    
    ReDim retVal(pointsNumber * 3 - 1)
    
    swCurve.GetEndParams nStartParam, nEndParam, bIsClosed, bIsPeriodic
    
    incr = (nEndParam - nStartParam) / (pointsNumber - 1)
    
    For i = 0 To pointsNumber - 1
    
        vParam = swCurve.Evaluate(nStartParam + i * incr)
        
        retVal(i * 3) = vParam(0)
        retVal(i * 3 + 1) = vParam(1)
        retVal(i * 3 + 2) = vParam(2)
        
    Next
    
    SplitCurveByPoints = retVal
    
End Function

~~~



或者，可以根据曲线长度创建点。以下示例将通过计算曲线细分点的近似长度来创建点：

~~~ vb
Function SplitCurveByLength(swCurve As SldWorks.Curve, chordLength As Double) As Variant
    
    Dim nStartParam As Double
    Dim nEndParam As Double
    Dim bIsClosed As Boolean
    Dim bIsPeriodic As Boolean
        
    swCurve.GetEndParams nStartParam, nEndParam, bIsClosed, bIsPeriodic
    
    SplitCurveByLength = swCurve.GetTessPts(0.01, chordLength, swCurve.Evaluate2(nStartParam, 1), swCurve.Evaluate2(nEndParam, 1))
    
End Function
~~~



或者，可以根据总曲线长度计算距离来创建点：

~~~ vb
Function SplitCurveByChord(swCurve As SldWorks.Curve, chordLength As Double) As Variant
    
    Dim swCurveSpline As SldWorks.Curve
    Dim nStartParam As Double
    Dim nEndParam As Double
    Dim bIsClosed As Boolean
    Dim bIsPeriodic As Boolean
    
    Dim incr As Double
    Dim i As Integer
    Dim vParam As Variant
    
    Dim retVal() As Double
        
    swCurve.GetEndParams nStartParam, nEndParam, bIsClosed, bIsPeriodic
    
    Dim curveLength As Double
    curveLength = swCurve.GetLength3(nStartParam, nEndParam)
    
    ReDim retVal(CInt(curveLength / chordLength) * 3 - 1)
    
    incr = (nEndParam - nStartParam) / (curveLength / chordLength)
    
    For i = 0 To (UBound(retVal) + 1) / 3 - 1
    
        vParam = swCurve.Evaluate2(nStartParam + i * incr, 1)
        
        retVal(i * 3) = vParam(0)
        retVal(i * 3 + 1) = vParam(1)
        retVal(i * 3 + 2) = vParam(2)
        
    Next
    
    SplitCurveByChord = retVal
    
End Function
~~~
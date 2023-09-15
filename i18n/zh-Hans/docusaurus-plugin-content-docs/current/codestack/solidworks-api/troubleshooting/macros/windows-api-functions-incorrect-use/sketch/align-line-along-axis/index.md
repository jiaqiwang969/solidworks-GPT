## 说明

该示例演示了如何使用SOLIDWORKS API将活动草图中的所有草图线（添加草图关系）与所选选项之一（沿X、Y或Z轴）对齐。

此示例适用于2D和3D草图。

## 代码

```vb
Enum AlignmentDir_e
    AlongX = 1
    AlongY = 2
    AlongZ = 3
End Enum

Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSketch As SldWorks.Sketch
Dim swSketchRelMgr As SldWorks.SketchRelationManager

Sub main()

    On Error Resume Next
    
    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Set swSketch = swModel.SketchManager.ActiveSketch
        
        If Not swSketch Is Nothing Then
            
            Dim dir As AlignmentDir_e
            dir = InputBox("指定草图线的对齐类型：1 - 沿X轴，2 - 沿Y轴，3 - 沿Z轴")
            
            Set swSketchRelMgr = swSketch.RelationManager
            
            Dim vSegs As Variant
                        
            vSegs = swSketch.GetSketchSegments
         
            Dim swSkLines() As SldWorks.SketchSegment
            Dim isSkLinesArrInit As Boolean
            isSkLinesArrInit = False
            
            For i = 0 To UBound(vSegs)
                
                Dim swSkSeg As SldWorks.SketchSegment
                Set swSkSeg = vSegs(i)
                
                If swSkSeg.GetType() = swSketchSegments_e.swSketchLINE Then
                    
                    If Not isSkLinesArrInit Then
                        isSkLinesArrInit = True
                        ReDim swSkLines(0)
                    Else
                        ReDim Preserve swSkLines(UBound(swSkLines) + 1)
                    End If
                    
                    Set swSkLines(UBound(swSkLines)) = swSkSeg
                    
                End If
                
            Next
            
            Dim constType As swConstraintType_e
                
            Select Case dir
                Case AlignmentDir_e.AlongX
                    If swSketch.Is3D() Then
                        constType = swConstraintType_e.swConstraintType_ALONGX3D
                    Else
                        constType = swConstraintType_e.swConstraintType_HORIZONTAL
                    End If
                Case AlignmentDir_e.AlongY
                    If swSketch.Is3D Then
                        constType = swConstraintType_e.swConstraintType_ALONGY3D
                    Else
                        constType = swConstraintType_e.swConstraintType_VERTICAL
                    End If
                Case AlignmentDir_e.AlongZ
                    If swSketch.Is3D Then
                        constType = swConstraintType_e.swConstraintType_ALONGZ
                    Else
                        MsgBox "无效。Z轴不是2D草图的有效方向"
                        End
                    End If
            End Select
            
            swSketchRelMgr.AddRelation swSkLines, constType
        
        Else
            MsgBox "请打开草图"
        End If
    
    Else
        MsgBox "请打开文档"
    End If
    
End Sub
```

## 示例

使用上述代码，您可以将活动草图中的所有草图线与所选选项之一（沿X、Y或Z轴）对齐。

1. 打开SOLIDWORKS文档。
2. 打开草图。
3. 运行宏。
4. 在弹出的对话框中，输入对齐类型：1 - 沿X轴，2 - 沿Y轴，3 - 沿Z轴。
5. 单击“确定”。
6. 所有草图线将与所选选项对齐。

![草图线的关系](sw-sketch-line-relation.png){ width=320 height=229 }
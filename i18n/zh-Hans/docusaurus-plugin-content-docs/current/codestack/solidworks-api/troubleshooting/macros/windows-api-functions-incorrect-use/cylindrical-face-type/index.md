---
title: 使用SOLIDWORKS API获取圆柱面的类型
caption: 获取圆柱面的类型
description: 该宏基于循环类型使用SOLIDWORKS API识别所选简单圆柱面的类型（通过所有孔、盲孔或外孔）。
image: cylindrical-faces-types.png
labels: [geometry, face, hole, outer, inner]
---
![圆柱面的类型](cylindrical-faces-types.png){ width=250 }

该宏基于循环类型使用SOLIDWORKS API识别所选简单圆柱面的类型（通过所有孔、盲孔或外孔）。

该宏仅适用于邻接面为平面面且圆柱体的上下边界为封闭的圆形边缘的圆柱面。

### 算法

该宏遍历上下边界边缘的共边循环。如果存在至少一个内部循环，则表示所选面为孔洞，否则为外部凸台。如果两个边界循环都是内部循环，则表示孔洞为通过所有孔；如果一个边界循环是外部循环，而另一个是内部循环，则表示所选面为盲孔（即非通过所有孔）。

~~~ vb
Enum FaceType_e
    Outer
    BlindHole
    ThroughHole
    ContainsCutouts
End Enum

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swSelMgr As SldWorks.SelectionMgr
        
        Set swSelMgr = swModel.SelectionManager
        
        Set swSelMgr = swModel.SelectionManager
        
        Dim swFace As SldWorks.Face2
        Set swFace = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swFace Is Nothing Then
            
            Dim swSurf As SldWorks.Surface
            Set swSurf = swFace.GetSurface
            
            If swSurf.IsCylinder() Then
                Dim faceType As FaceType_e
                faceType = GetCylindricalFaceType(swFace)
                
                Select Case faceType
                    Case FaceType_e.BlindHole
                        MsgBox "所选面为盲孔"
                    Case FaceType_e.Outer
                        MsgBox "所选面为外部面"
                    Case FaceType_e.ThroughHole
                        MsgBox "所选面为通过所有孔"
                    Case FaceType_e.ContainsCutouts
                        MsgBox "所选面包含切割"
                End Select
                
            Else
                MsgBox "所选面不是圆柱面"
            End If
            
        Else
            MsgBox "请选择面"
        End If
        
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Function GetCylindricalFaceType(face As SldWorks.Face2) As FaceType_e

    Dim vEdges As Variant
        
    vEdges = face.GetEdges
    
    If UBound(vEdges) + 1 > 2 Then
        GetCylindricalFaceType = FaceType_e.ContainsCutouts
    ElseIf UBound(vEdges) + 1 = 2 Then
        
        Dim innerCount As Integer
        
        For i = 0 To UBound(vEdges)
            
            Dim swEdge As SldWorks.edge
            Set swEdge = vEdges(i)
            
            If HasInnerLoop(swEdge) Then
                innerCount = innerCount + 1
            End If
            
        Next
    
        If innerCount = 0 Then
            GetCylindricalFaceType = FaceType_e.Outer
        ElseIf innerCount = 1 Then
            GetCylindricalFaceType = FaceType_e.BlindHole
        ElseIf innerCount = 2 Then
            GetCylindricalFaceType = FaceType_e.ThroughHole
        End If
    End If
    
End Function

Function HasInnerLoop(edge As SldWorks.edge) As Boolean
    
    Dim vCoEdges As Variant
    vCoEdges = edge.GetCoEdges
    
    HasInnerLoop = False
    
    Dim i As Integer
    
    For i = 0 To UBound(vCoEdges)
    
        Dim swCoEdge As SldWorks.CoEdge
        Set swCoEdge = vCoEdges(i)
        
        Dim swLoop As SldWorks.Loop2
        Set swLoop = swCoEdge.GetLoop()
        
        If False = swLoop.IsOuter() Then
            HasInnerLoop = True
        End If
    Next
    
End Function
~~~
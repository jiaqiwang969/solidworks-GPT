---
title: 使用SOLIDWORKS API中的跟踪ID跟踪操作中的实体
caption: 跟踪ID
description: 本示例演示了在运行合并实体操作时在面上使用跟踪ID的用法
image: select-bodies-faces.png
labels: [tracking id, merge]
---

跟踪ID用于在使用SOLIDWORKS API开发宏和应用程序时，跟踪映射（跟踪）几何操作（如合并、相减、复制、拆分、模式）中的实体。

跟踪ID可以应用于面、边、环、顶点和实体。

跟踪ID在模型重建之前被临时分配。

主要在使用临时实体进行操作时使用跟踪ID，当需要跟踪体发生变化时，可以跟踪特定元素。通常在宏特征中需要这样做。

以下示例演示了如何使用SOLIDWORKS API中的跟踪ID来跟踪和映射用户选择的面到复制的合并体。

* 下载[示例文件](tracking-ids-sample.SLDPRT)或使用任何其他零件文档
* 选择至少一个面。建议从不同的体中选择至少两个重叠的面。这样可以演示跟踪ID的好处，因为体将被合并。
* 运行宏。

![在图形视图中选择了两个实体的两个面](select-bodies-faces.png){ width=300 }

宏将执行以下步骤：

* 收集所有选择的面
* 找到所有来自选择的面的体
* 清除所有现有的跟踪ID（如果有）
* 复制体
* 将所有体合并为一个
* 创建新的零件文档
* 从合并的副本创建新的体
* 找到与最初选择的面对应的面
* 在合并的体中选择这些对应的面

![通过合并操作创建的单个体的副本，其中选择了两个面](merged-body.png){ width=250 }

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim vFaces As Variant
        vFaces = GetAllSelectedFaces(swModel)
        
        If Not IsEmpty(vFaces) Then
            
            Dim trackingCookie As Long
            Dim vBodiesCopy As Variant
            
            vBodiesCopy = CopyBodiesAndTrackFaces(vFaces, trackingCookie)
            
            CreateMergedBodyAndSelectFaces trackingCookie, vBodiesCopy
        Else
            MsgBox "请至少选择一个面"
        End If
        
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Function GetAllSelectedFaces(model As SldWorks.ModelDoc2) As Variant
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = model.SelectionManager
    
    Dim i As Integer
    
    Dim swFaces() As SldWorks.Face2
    
    Dim isArrInit As Boolean
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
        
        On Error Resume Next
        
        Dim swFace As SldWorks.Face2
        Set swFace = swSelMgr.GetSelectedObject6(i, -1)
        
        If Not swFace Is Nothing Then
            
            If Not isArrInit Then
                isArrInit = True
                ReDim swFaces(0)
            Else
                ReDim Preserve swFaces(UBound(swFaces) + 1)
            End If
            
            Set swFaces(i - 1) = swFace
            
        End If
    Next
    
    GetAllSelectedFaces = swFaces
    
End Function

Function CopyBodiesAndTrackFaces(vFaces As Variant, ByRef trackingCookie As Long) As Variant

    trackingCookie = swApp.RegisterTrackingDefinition("_MergeBodies_")

    Dim swFace As SldWorks.Face2
    
    Dim swBodies() As SldWorks.Body2
    ReDim swBodies(UBound(vFaces))
    
    Dim i As Integer
    
    '收集体并清除所有跟踪ID
    For i = 0 To UBound(vFaces)
        
        Set swFace = vFaces(i)
        Set swBodies(i) = swFace.GetBody()
        
        ClearAllFaceTrackingIds swBodies(i), trackingCookie
        
    Next
    
    '为所有面分配跟踪ID
    For i = 0 To UBound(vFaces)
        
        Set swFace = vFaces(i)
        
        swFace.SetTrackingID trackingCookie, i
        
    Next
    
    '复制所有体
    For i = 0 To UBound(swBodies)
        
        Set swBodies(i) = swBodies(i).Copy()
        
    Next
    
    CopyBodiesAndTrackFaces = swBodies
    
End Function

Sub CreateMergedBodyAndSelectFaces(trackingCookie As Long, vBodiesCopy As Variant)
    
    Dim partTemplate As String
    partTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)
    
    If partTemplate <> "" Then
        
        Dim swPart As SldWorks.PartDoc
        Set swPart = swApp.NewDocument(partTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0, 0)
        
        Dim swMergedBody As SldWorks.Body2
        
        Set swMergedBody = vBodiesCopy(0)
        
        Dim i As Integer
        
        For i = 1 To UBound(vBodiesCopy)
            
            Dim mergeErr As Long
            Dim vMergeRes As Variant
            
            vMergeRes = swMergedBody.Operations2(swBodyOperationType_e.SWBODYADD, vBodiesCopy(i), mergeErr)
            
            If UBound(vMergeRes) = 0 Then
                Set swMergedBody = vMergeRes(0)
            Else
                MsgBox "无法合并所选体"
                End
            End If
            
        Next
        
        Dim swBodyFeat As SldWorks.Feature
        Set swBodyFeat = swPart.CreateFeatureFromBody3(swMergedBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify)
        
        Dim vFaces As Variant
        vFaces = swBodyFeat.GetFaces()
        
        swPart.ClearSelection2 True
        
        For i = 0 To UBound(vFaces)
            
            Dim swFace As SldWorks.Face2
            Set swFace = vFaces(i)
            
            Dim vIds As Variant
            swFace.GetTrackingIDs trackingCookie, vIds
            
            If Not IsEmpty(vIds) Then
                
                Dim j As Integer
                
                For j = 0 To UBound(vIds)
                    Debug.Print vIds(j)
                Next
                
                swFace.Select4 True, Nothing
            End If
        Next
        
    Else
        MsgBox "未指定默认零件模板"
    End If
    
End Sub

Sub ClearAllFaceTrackingIds(swBody As SldWorks.Body2, trackingCookie As Long)
    
    Dim vBodyFaces As Variant
    vBodyFaces = swBody.GetFaces
    
    Dim i As Integer
    
    For i = 0 To UBound(vBodyFaces)
        Dim swBodyFace As SldWorks.Face2
        Set swBodyFace = vBodyFaces(i)
        swBodyFace.RemoveTrackingID trackingCookie
    Next
    
End Sub
~~~
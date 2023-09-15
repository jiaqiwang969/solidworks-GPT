---
caption: 获取派生零件中对应的实体
title:  使用SOLIDWORKS API获取派生零件中的对应实体（面、边和顶点）
---
 VBA宏演示了如何使用SOLIDWORKS API在派生零件中查找输入零件的对应实体
---

[IPartDoc::InsertPart3](https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartDoc~InsertPart3.html) API允许将派生零件插入到另一个零件中。然而，与[组件](/docs/codestack/solidworks-api/document/assembly/context#converting-the-pointers)类似，找到输入零件的对应实体的API是不可用的。

这个VBA宏演示了一个性能高效的解决方法来解决这个限制。

## 运行宏

* 打开源零件（这是要插入到另一个零件中的零件）。此零件必须已保存在磁盘上。
* 选择一个或多个实体（面、边、顶点）。如果是多实体零件，则可以在不同的实体中进行选择。
* 运行宏。宏将索引输入并停止执行。
* 打开或创建需要插入源零件的新零件。
* 继续执行宏。
* 结果将插入派生零件，并选择所有对应的实体。

``` vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swSrcModel As SldWorks.ModelDoc2
    
    Set swSrcModel = swApp.ActiveDoc
    
    If swSrcModel.GetType() <> swDocumentTypes_e.swDocPART Then
        Err.Raise vbError, "", "仅支持零件"
    End If
    
    Dim trackDefId As Integer
    trackDefId = TrackSelectedEntities(swSrcModel)
    
    Stop
    
    Dim swTargModel As SldWorks.ModelDoc2
    Set swTargModel = swApp.ActiveDoc
    
    Dim swTargPart As SldWorks.PartDoc
    Set swTargPart = swTargModel
    
    Dim swDerPartFeat As SldWorks.Feature
    
    Set swDerPartFeat = swTargPart.InsertPart3(swSrcModel.GetPathName(), swInsertPartOptions_e.swInsertPartImportSolids, swSrcModel.ConfigurationManager.ActiveConfiguration.Name)
    
    Dim vTrackedEnts As Variant
    vTrackedEnts = GetTrackedEntitites(swTargModel, swDerPartFeat, trackDefId)
    
    If Not IsEmpty(vTrackedEnts) Then
        swTargModel.Extension.MultiSelect2 vTrackedEnts, False, Nothing
    Else
        Err.Raise vbError, "", "未找到跟踪的实体"
    End If
    
End Sub

Function TrackSelectedEntities(model As SldWorks.ModelDoc2) As Integer
    
    Dim trackDefId As Integer
    
    trackDefId = swApp.RegisterTrackingDefinition("_DerivedPartTrack_")
    
    Dim i As Integer
    
    For i = 1 To model.SelectionManager.GetSelectedObjectCount2(-1)
            
        Select Case model.SelectionManager.GetSelectedObjectType3(i, -1)
            Case swSelectType_e.swSelFACES
                Dim swFace As SldWorks.Face2
                Set swFace = model.SelectionManager.GetSelectedObject6(i, -1)
                If swFace.SetTrackingID(trackDefId, i) <> swTrackingIDError_e.swTrackingIDError_NoError Then
                    Err.Raise vbError, "", "跟踪面失败"
                End If
            Case swSelectType_e.swSelEDGES
                Dim swEdge As SldWorks.Edge
                Set swEdge = model.SelectionManager.GetSelectedObject6(i, -1)
                If swEdge.SetTrackingID(trackDefId, i) <> swTrackingIDError_e.swTrackingIDError_NoError Then
                    Err.Raise vbError, "", "跟踪边失败"
                End If
            Case swSelectType_e.swSelVERTICES
                Dim swVertex As SldWorks.Vertex
                Set swVertex = model.SelectionManager.GetSelectedObject6(i, -1)
                If swVertex.SetTrackingID(trackDefId, i) <> swTrackingIDError_e.swTrackingIDError_NoError Then
                    Err.Raise vbError, "", "跟踪顶点失败"
                End If
            Case Else
                Err.Raise vbError, "", "仅支持面、边和顶点"
        End Select
        
    Next
    
    TrackSelectedEntities = trackDefId
    
End Function

Function GetTrackedEntitites(model As SldWorks.ModelDoc2, derFeatPart As SldWorks.Feature, trackDefId As Integer) As Variant

    Dim isInit As Boolean
    isInit = False
    Dim swEnts() As SldWorks.Entity
    
    Dim searchTypes(2) As Integer
    searchTypes(0) = swTopoEntity_e.swTopoFace
    searchTypes(1) = swTopoEntity_e.swTopoEdge
    searchTypes(2) = swTopoEntity_e.swTopoVertex
    
    Dim vBodies As Variant
    vBodies = GetFeatureBodies(derFeatPart)
    
    Dim i As Integer
    
    For i = 0 To UBound(vBodies)
    
        Dim vTrackedEnts As Variant
        Dim swBody As SldWorks.Body2
        Set swBody = vBodies(i)
        
        vTrackedEnts = model.Extension.FindTrackedObjects(trackDefId, swBody, searchTypes, Empty)
        
        If Not IsEmpty(vTrackedEnts) Then
            If Not isInit Then
                isInit = True
                ReDim swEnts(UBound(vTrackedEnts))
            Else
                ReDim Preserve swEnts(UBound(swEnts) + UBound(vTrackedEnts) + 1)
            End If
            
            Dim j As Integer
            
            For j = 0 To UBound(vTrackedEnts)
                Dim swEnt As SldWorks.Entity
                Set swEnt = vTrackedEnts(j)
                Set swEnts(UBound(swEnts) - UBound(vTrackedEnts) + j) = swEnt
            Next
            
        End If
    
    Next

    If isInit Then
        GetTrackedEntitites = swEnts
    Else
        GetTrackedEntitites = Empty
    End If

End Function

Function GetFeatureBodies(feat As SldWorks.Feature) As Variant
    
    Dim isInit As Boolean
    isInit = False
    
    Dim swBodies() As SldWorks.Body2

    Dim i As Integer
    
    Dim vFaces As Variant
    
    vFaces = feat.GetFaces
    
    For i = 0 To UBound(vFaces)
                
        Dim swFace As SldWorks.Face2
    
        Set swFace = vFaces(i)
        
        Dim swBody As SldWorks.Body2
        
        Set swBody = swFace.GetBody
        
            If Not isInit Then
                ReDim swBodies(0)
                Set swBodies(0) = swBody
                isInit = True
            Else
                If Not Contains(swBodies, swBody) Then
                    ReDim Preserve swBodies(UBound(swBodies) + 1)
                    Set swBodies(UBound(swBodies)) = swBody
                End If
            End If
    
    Next

    If isInit Then
        GetFeatureBodies = swBodies
    Else
        GetFeatureBodies = Empty
    End If

End Function

Function Contains(vArr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vArr)
        If vArr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function
```


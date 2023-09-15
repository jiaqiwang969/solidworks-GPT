---
layout: sw-tool
title:  SOLIDWORKS宏以及删除所有子特征的特征文件夹
caption: 删除所有子特征的特征文件夹
---
 使用SOLIDWORKS API，宏允许一键删除所选文件夹中的所有特征
image: deleted-folder-features.svg
labels: [删除文件夹, 特征管理器, 文件夹, solidworks api, 实用工具]
group: 模型
redirect-from:
  - /2018/04/solidworks-api-feature-manager-delete-feature-folder-with-all-children.html
---

当删除SOLIDWORKS特征树中的顶级文件夹时，所有子特征都不会被删除，因此需要逐个选择它们以删除文件夹内容。

由于特征之间的关系，这并不总是可能一步完成：

![手动删除文件夹特征](delete-features-manually.gif){ width=400 }

下面的宏允许使用SOLIDWORKS API一键删除所选文件夹中的所有特征。还支持嵌套文件夹。

![删除包含所有子特征的文件夹](delete-folder-with-features.png){ width=400 }

宏可以选择是否显示带有即将删除的特征列表的确认对话框。

观看[视频演示](https://youtu.be/9uZCecGg25I?t=396)

~~~ vb
Const SHOW_CONFIRMATION_DIALOG As Boolean = True

Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        Dim swFolderFeat As SldWorks.Feature
        
        Set swFolderFeat = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swFolderFeat Is Nothing Then
            
            If swFolderFeat.GetTypeName2() = "FtrFolder" Then
                
                Dim vFeats As Variant
                vFeats = GetFeaturesInFolder(swFolderFeat)
                Dim i As Integer
                
                If Not IsEmpty(vFeats) Then
                    For i = 0 To UBound(vFeats)
                        Dim swFeat As SldWorks.Feature
                        Set swFeat = vFeats(i)
                        swFeat.Select2 True, -1
                    Next
                End If
                
                If SHOW_CONFIRMATION_DIALOG Then
                    
                    Dim featNames As String
                    
                    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
                        
                        On Error Resume Next
                        
                        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)
                        If Not swFeat Is Nothing Then
                            featNames = featNames & vbCrLf & swFeat.Name
                        End If
                        
                    Next
                
                    If swApp.SendMsgToUser2( _
                        "是否删除以下特征及其所有吸收的特征？" & vbCrLf & featNames, _
                        swMessageBoxIcon_e.swMbQuestion, _
                        swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitNo Then
                        End
                    End If
                End If
                
                swModel.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed
                
            Else
                MsgBox "所选特征不是文件夹"
            End If
            
        Else
            MsgBox "请选择文件夹特征"
        End If
        
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Function GetFeaturesInFolder(folderFeat As SldWorks.Feature) As Variant
    
    Const FOLDER_CLOSE_TAG As String = "___EndTag___"
    
    Dim swFeatsColl As Collection
    Set swFeatsColl = New Collection
        
    Dim swNextFeat As SldWorks.Feature
    
    Set swNextFeat = folderFeat.GetNextFeature
    
    Dim nestedFolderLevel As Integer
    nestedFolderLevel = 0
    
    While Not swNextFeat Is Nothing
        
        Dim isEndFolderTagFeat As Boolean
        isEndFolderTagFeat = False
        
        If swNextFeat.GetTypeName2() = "FtrFolder" Then
                        
            isEndFolderTagFeat = Right(swNextFeat.Name, Len(FOLDER_CLOSE_TAG)) = FOLDER_CLOSE_TAG
            
            If isEndFolderTagFeat Then
                If nestedFolderLevel = 0 Then
                    GetFeaturesInFolder = CollectionToArray(swFeatsColl)
                    Exit Function
                Else
                    nestedFolderLevel = nestedFolderLevel - 1
                End If
            Else
                nestedFolderLevel = nestedFolderLevel + 1
            End If
            
        End If
    
        If Not isEndFolderTagFeat Then
            If Not Contains(swFeatsColl, swNextFeat) Then
                swFeatsColl.Add swNextFeat
            End If
        
            CollectAllSubFeatures swNextFeat, swFeatsColl
        End If
        
        Set swNextFeat = swNextFeat.GetNextFeature
        
    Wend
        
End Function


Sub CollectAllSubFeatures(swFeat As SldWorks.Feature, coll As Collection)
    
    Dim swSubFeat As SldWorks.Feature
    Set swSubFeat = swFeat.GetFirstSubFeature
        
    While Not swSubFeat Is Nothing
        
        If Not Contains(coll, swSubFeat) Then
            coll.Add swNextFeat
        End If
        
        CollectAllSubFeatures swSubFeat, coll
        Set swSubFeat = swSubFeat.GetNextSubFeature
        
    Wend
    
End Sub

Function Contains(coll As Collection, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 1 To coll.Count
        If coll.item(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function

Function CollectionToArray(coll As Collection) As Variant
    
    If coll.Count() > 0 Then
        
        Dim arr() As Object
        
        ReDim arr(coll.Count() - 1)
        Dim i As Integer
        
        For i = 1 To coll.Count
            Set arr(i - 1) = coll(i)
        Next
        
        CollectionToArray = arr
        
    Else
        CollectionToArray = Empty
    End If
    
End Function
~~~
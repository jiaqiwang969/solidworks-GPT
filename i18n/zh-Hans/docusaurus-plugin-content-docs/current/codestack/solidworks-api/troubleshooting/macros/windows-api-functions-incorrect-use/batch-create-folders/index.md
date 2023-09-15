---
caption: 批量创建文件夹
title: 在活动的SOLIDWORKS文档中批量创建特征文件夹
description: VBA宏在活动的SOLIDWORKS零件或装配中创建指定数量的带有指定前缀名称的特征文件夹
---

这个VBA宏允许在活动的SOLIDWORKS装配或零件文档中批量创建特征文件夹。

宏将询问要创建的文件夹数量和文件夹前缀名称。

宏将创建指定数量的文件夹，前缀名称后跟索引。

> 如果下一个索引的文件夹已经存在，则使用下一个索引进行命名。

``` vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim foldersCount As Integer
        Dim folderNamePrefix As String
        
        foldersCount = CInt(InputBox("指定要创建的文件夹数量", "批量文件夹创建器", "5"))
        folderNamePrefix = InputBox("指定文件夹的前缀名称", "批量文件夹创建器", "MyFolder")
        
        Dim swAnchorFeat As SldWorks.Feature
        Set swAnchorFeat = swModel.Extension.GetLastFeatureAdded
        
        Dim swFeatMgr As SldWorks.FeatureManager
        Set swFeatMgr = swModel.FeatureManager
        
        Dim i As Integer
        
        Dim nextIndex As Integer
        nextIndex = 0
        
        For i = 1 To foldersCount
            
            swAnchorFeat.Select2 False, -1
            
            Dim swFolderFeat As SldWorks.Feature
            Set swFolderFeat = swFeatMgr.InsertFeatureTreeFolder2(swFeatureTreeFolderType_e.swFeatureTreeFolder_EmptyBefore)
            
            If swFolderFeat Is Nothing Then
                Err.Raise vbError, "", "无法创建文件夹，请确保模型中至少有一个特征"
            End If
            
            Dim folderName As String
            
            Do
                nextIndex = nextIndex + 1
                folderName = folderNamePrefix & nextIndex
            Loop While False <> swFeatMgr.IsNameUsed(swNameType_e.swFeatureName, folderName)
            
            swFolderFeat.Name = folderName
            
            swModel.Extension.ReorderFeature swFolderFeat.Name, "", swMoveLocation_e.swMoveToEnd
            
        Next
        
    Else
        Err.Raise vbError, "", "未打开模型"
    End If
    
End Sub
```


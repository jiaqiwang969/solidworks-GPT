---
layout: sw-tool
title:  删除SOLIDWORKS文件中的所有空特征文件夹的宏
caption: 删除空文件夹
---
 VBA宏删除SOLIDWORKS文件（零件或装配体）中的所有空特征文件夹
image: delete-folders.svg
labels: [特征, 空, 删除, 清理]
group: 模型
---
![删除特征管理器文件夹](delete-folders.svg){ width=300 }

这个VBA宏将从活动的零件或装配体中删除所有空的特征文件夹。

> 只包含空文件夹的特征文件夹也将被删除。

![从特征管理器树中删除的空文件夹](deleted-empty-folders.png)

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()
       
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    Dim swFeat As SldWorks.Feature
    
    Set swFeat = swModel.FirstFeature
    
    swModel.ClearSelection2 True
    
    While Not swFeat Is Nothing
        
        If IsFolder(swFeat) Then
            
            If Not FolderHasFeatures(swFeat.GetSpecificFeature2()) Then
                swFeat.Select2 True, -1
            End If
            
        End If
        
        Dim swSubFeat As SldWorks.Feature
        Set swSubFeat = swFeat.GetFirstSubFeature
        
        While Not swSubFeat Is Nothing
            
            If IsFolder(swSubFeat) Then
                
                If Not FolderHasFeatures(swSubFeat.GetSpecificFeature2()) Then
                    swSubFeat.Select2 True, -1
                End If
                
            End If
            
            Set swSubFeat = swSubFeat.GetNextSubFeature
        Wend
        
        Set swFeat = swFeat.GetNextFeature
        
    Wend
    
    swModel.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed
    
End Sub

Function IsFolder(feat As SldWorks.Feature) As Boolean
    Const END_FOLDER_TAG As String = "___EndTag___"
    IsFolder = feat.GetTypeName2() = "FtrFolder" And Right(feat.Name, Len(END_FOLDER_TAG)) <> END_FOLDER_TAG
End Function

Function FolderHasFeatures(folder As SldWorks.FeatureFolder) As Boolean
    
    If folder.GetFeatureCount() = 0 Then
        FolderHasFeatures = False
    Else
        
        Dim vFeats As Variant
        
        vFeats = folder.GetFeatures()
        Dim i As Integer
        
        For i = 0 To UBound(vFeats)
            
            Dim swFeat As SldWorks.Feature
            Set swFeat = vFeats(i)
            
            If IsFolder(swFeat) Then
                If FolderHasFeatures(swFeat.GetSpecificFeature2()) Then
                    FolderHasFeatures = True
                    Exit Function
                End If
            Else
                FolderHasFeatures = True
                Exit Function
            End If
            
        Next
        
        FolderHasFeatures = False
        
    End If
    
End Function
~~~
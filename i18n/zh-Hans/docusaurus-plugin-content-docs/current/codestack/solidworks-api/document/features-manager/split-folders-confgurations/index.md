---
caption: 将SOLIDWORKS文件的特征文件夹拆分为单独的配置
title:  将SOLIDWORKS文件的特征文件夹拆分为单独的配置
---
 VBA宏为活动的SOLIDWORKS零件或装配创建每个顶级特征文件夹的配置
---

这个VBA宏为活动的SOLIDWORKS零件或装配中的每个顶级特征文件夹创建配置。

如果模型中没有选择任何对象，则将处理所有文件夹特征，否则只处理选定的文件夹特征。

创建的配置将以特征文件夹的名称命名。

可以指定为每个特征文件夹创建派生配置还是顶级配置。

~~~ vb
Const CREATE_DERIVED_CONFS As Boolean = True 'True表示创建派生配置，False表示创建顶级配置
~~~

其他所有文件夹将在每个配置中被抑制。文件夹外的特征将不会被抑制。

~~~ vb
Const CREATE_DERIVED_CONFS As Boolean = True

Const FOLDER_END_TAG As String = "___EndTag___"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim vFeatFolders As Variant
        Dim vAllFeatFolders As Variant
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        vAllFeatFolders = GetAllFeatureFolders(swModel)
        
        If swSelMgr.GetSelectedObjectCount2(-1) = 0 Then
            vFeatFolders = vAllFeatFolders
        Else
            vFeatFolders = GetSelectedFeatureFolders(swModel)
        End If
        
        If Not IsEmpty(vFeatFolders) Then
            
            Dim activeConfName As String
            activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name
            
            Dim i As Integer
            
            For i = 0 To UBound(vFeatFolders)
                Dim swFeatFolder As SldWorks.Feature
                Set swFeatFolder = vFeatFolders(i)
                CreateConfigurationForFolder swModel, swFeatFolder, vAllFeatFolders, IIf(CREATE_DERIVED_CONFS, activeConfName, "")
            Next
            
        End If
                
    Else
        Err.Raise vbError, "", "没有活动文档"
    End If
    
End Sub

Function GetAllFeatureFolders(model As SldWorks.ModelDoc2) As Variant
    
    Dim swFeatFolders() As SldWorks.Feature
    
    Dim swFeat As SldWorks.Feature
    Set swFeat = model.FirstFeature
    
    While Not swFeat Is Nothing
        
        If swFeat.GetTypeName2() = "FtrFolder" And InStr(LCase(swFeat.Name), LCase(FOLDER_END_TAG)) = 0 Then

            If (Not swFeatFolders) = -1 Then
                ReDim swFeatFolders(0)
            Else
                ReDim Preserve swFeatFolders(UBound(swFeatFolders) + 1)
            End If
            
            Set swFeatFolders(UBound(swFeatFolders)) = swFeat
            
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Wend
    
    
    If (Not swFeatFolders) = -1 Then
        GetAllFeatureFolders = Empty
    Else
        GetAllFeatureFolders = swFeatFolders
    End If
        
End Function

Function GetSelectedFeatureFolders(model As SldWorks.ModelDoc2) As Variant
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = model.SelectionManager

    Dim swFeatFolders() As SldWorks.Feature
    
    Dim i As Integer
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
        
        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelFTRFOLDER Then
        
            Dim swFeat As SldWorks.Feature
            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)
            
            If (Not swFeatFolders) = -1 Then
                ReDim swFeatFolders(0)
            Else
                ReDim Preserve swFeatFolders(UBound(swFeatFolders) + 1)
            End If
            
            Set swFeatFolders(UBound(swFeatFolders)) = swFeat
        End If
    
    Next
        
    If (Not swFeatFolders) = -1 Then
        GetSelectedFeatureFolders = Empty
    Else
        GetSelectedFeatureFolders = swFeatFolders
    End If
    
End Function

Sub CreateConfigurationForFolder(model As SldWorks.ModelDoc2, folderFeat As SldWorks.Feature, allFeatFolders As Variant, parentConfName As String)
    
    Dim swFolderConf As SldWorks.Configuration
    Set swFolderConf = model.ConfigurationManager.AddConfiguration2(folderFeat.Name, "", "", swConfigurationOptions2_e.swConfigOption_DontActivate Or swConfigurationOptions2_e.swConfigOption_SuppressByDefault, parentConfName, "", False)
    
    If swFolderConf Is Nothing Then
        Err.Raise vbError, "", "无法为" & folderFeat.Name & "创建配置"
    End If
    
    Dim i As Integer
    
    For i = 0 To UBound(allFeatFolders)
        
        Dim swOtherFeatFolder As SldWorks.Feature
        Set swOtherFeatFolder = allFeatFolders(i)
        
        If swApp.IsSame(folderFeat, swOtherFeatFolder) <> swObjectEquality.swObjectSame Then
        
            Dim targetConf(0) As String
            targetConf(0) = swFolderConf.Name
            
            If False = swOtherFeatFolder.SetSuppression2(swFeatureSuppressionAction_e.swSuppressFeature, swInConfigurationOpts_e.swSpecifyConfiguration, targetConf) Then
                Err.Raise vbError, "", "无法在" & swFolderConf.Name & "中配置文件夹特征" & swOtherFeatFolder.Name & "的抑制"
            End If
            
        End If
        
    Next
    
End Sub
~~~
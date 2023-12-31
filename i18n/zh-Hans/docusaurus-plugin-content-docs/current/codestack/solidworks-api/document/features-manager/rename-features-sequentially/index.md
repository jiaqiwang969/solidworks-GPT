---
layout: sw-tool
title:  SOLIDWORKS宏按顺序逐个重命名所有特征
caption: 顺序重命名所有特征
---
 使用SOLIDWORKS API按顺序重命名活动模型中的所有特征，保留基本名称。
image: sequntial-features.svg
labels: [feature, rename]
group: Model
---
![按顺序重命名的特征](rename-features-sequentially.png)

此宏使用SOLIDWORKS API按顺序重命名活动模型中的所有特征，保留基本名称。

只有索引会被重命名，基本名称会保留。例如，*Sketch21*将在第一次出现时重命名为*Sketch1*。

## 注意事项

* 只有以数字结尾的特征会被重命名（例如，*Front Plane*不会被重命名为*Front Plane1*，*My1Feature*也不会被重命名）。
* 不区分大小写（大小写不敏感搜索）。
* 只有建模特征会被重命名（在原点特征之后创建的特征）。
* 在装配文档中，只有装配特征会被重命名（组件会被忽略）。
* 如果在装配中选择了组件，则会重命名这些组件的特征。

观看[演示视频](https://youtu.be/jsjN8zNRTuc?t=139)

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc

try_:
    
    On Error GoTo catch_
    
    If Not swModel Is Nothing Then
        
        swModel.FeatureManager.EnableFeatureTree = False
        swModel.FeatureManager.EnableFeatureTreeWindow = False
        
        Dim vComps As Variant
        
        vComps = GetSelectedComponents(swModel.SelectionManager)
        
        If Not IsEmpty(vComps) Then
            
            Dim i As Integer
            
            For i = 0 To UBound(vComps)
                
                Dim swComp As SldWorks.Component2
                Set swComp = vComps(i)
                ProcessFeatureTree swComp.FirstFeature, swComp
                
            Next
        
        Else
            ProcessFeatureTree swModel.FirstFeature, swModel
        End If
        
    Else
        Err.Raise vbError, "", "请打开模型"
    End If
    
    GoTo finally_
    
catch_:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally_:
    
    If Not swModel Is Nothing Then
        swModel.FeatureManager.EnableFeatureTree = True
        swModel.FeatureManager.EnableFeatureTreeWindow = True
    End If

End Sub

Sub ProcessFeatureTree(firstFeat As SldWorks.Feature, owner As Object)
    
    Dim passedOrigin As Boolean
    passedOrigin = False

    Dim featNamesTable As Object
    Dim processedFeats() As SldWorks.Feature
    
    Set featNamesTable = CreateObject("Scripting.Dictionary")
        
    featNamesTable.CompareMode = vbTextCompare 'case insensitive
    
    Dim swFeat As SldWorks.Feature
    Set swFeat = firstFeat
    
    While Not swFeat Is Nothing
        
        If passedOrigin Then
        
            If Not Contains(processedFeats, swFeat) Then
                
                If (Not processedFeats) = -1 Then
                    ReDim processedFeats(0)
                Else
                    ReDim Preserve processedFeats(UBound(processedFeats) + 1)
                End If
                
                Set processedFeats(UBound(processedFeats)) = swFeat
        
                RenameFeature swFeat, featNamesTable, owner
            End If
            
            Dim swSubFeat As SldWorks.Feature
            Set swSubFeat = swFeat.GetFirstSubFeature
            
            While Not swSubFeat Is Nothing
                
                If Not Contains(processedFeats, swSubFeat) Then
                    If (Not processedFeats) = -1 Then
                        ReDim processedFeats(0)
                    Else
                        ReDim Preserve processedFeats(UBound(processedFeats) + 1)
                    End If
                    
                    Set processedFeats(UBound(processedFeats)) = swSubFeat
                    RenameFeature swSubFeat, featNamesTable, owner
                End If
                
                Set swSubFeat = swSubFeat.GetNextSubFeature
                
            Wend
        
        End If
        
        If swFeat.GetTypeName2() = "OriginProfileFeature" Then
            passedOrigin = True
        End If
        
        Set swFeat = swFeat.GetNextFeature
    Wend
    
End Sub

Sub RenameFeature(feat As SldWorks.Feature, featNamesTable As Object, owner As Object)

    If feat.GetTypeName2() <> "Reference" Then
    
        Dim baseFeatName As String
        
        If TryGetBaseName(feat.name, baseFeatName) Then
            
            Dim nextIndex As Integer
                
            If featNamesTable.Exists(baseFeatName) Then
                nextIndex = featNamesTable.item(baseFeatName) + 1
                featNamesTable.item(baseFeatName) = nextIndex
            Else
                nextIndex = 1
                featNamesTable.Add baseFeatName, nextIndex
            End If
            
            Dim newName As String
            newName = baseFeatName & nextIndex
            
            If LCase(feat.name) <> LCase(newName) Then
            
                ResolveFeatureNameConflict owner, newName
            
                feat.name = newName
            
            End If
            
        End If
        
    End If

End Sub

Function TryGetBaseName(name As String, ByRef baseName As String)
    
    TryGetBaseName = False
    baseName = ""
    
    Dim regEx As Object
    Set regEx = CreateObject("VBScript.RegExp")
    
    regEx.Global = True
    regEx.IgnoreCase = True
    regEx.Pattern = "(.+?)(\d+)$"
    
    Dim regExMatches As Object
    Set regExMatches = regEx.Execute(name)
    
    If regExMatches.Count = 1 Then
        
        If regExMatches(0).SubMatches.Count = 2 Then
            
            baseName = regExMatches(0).SubMatches(0)
            TryGetBaseName = True
            
        End If
        
    End If
    
End Function

Sub ResolveFeatureNameConflict(owner As Object, name As String)
    
    Const INDEX_OFFSET As Integer = 100
    Dim index As Integer
    
    Dim swFeatMgr As SldWorks.FeatureManager
    
    Dim swFeat As SldWorks.Feature
        
    If TypeOf owner Is SldWorks.Component2 Then
        
        Dim swComp As SldWorks.Component2
        Set swComp = owner
        
        Dim swRefModel As SldWorks.ModelDoc2
        Set swRefModel = swComp.GetModelDoc2
        
        If Not swRefModel Is Nothing Then
            Set swFeatMgr = swRefModel.FeatureManager
            Set swFeat = swComp.FeatureByName(name)
        Else
            Err.Raise vbError, "", "未加载组件模型"
        End If
        
    ElseIf TypeOf owner Is SldWorks.ModelDoc2 Then
        
        Dim swModel As SldWorks.ModelDoc2
        Set swModel = owner
        Set swFeatMgr = swModel.FeatureManager
        Set swFeat = swModel.FeatureByName(name)
        
    Else
        Err.Raise vbError, "", "不支持的所有者"
    End If
    
    If Not swFeat Is Nothing Then
        
        Dim baseName As String
        
        If TryGetBaseName(name, baseName) Then
            
            Dim newName As String
            newName = baseName & (INDEX_OFFSET + index)
            
            While False <> swFeatMgr.IsNameUsed(swNameType_e.swFeatureName, newName)
                index = index + 1
                newName = baseName & (INDEX_OFFSET + index)
            Wend
            
            swFeat.name = newName
            
        Else
            Exit Sub
        End If
    
    End If
    
End Sub

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

Function GetSelectedComponents(selMgr As SldWorks.SelectionMgr) As Variant

    Dim isInit As Boolean
    isInit = False
    
    Dim swComps() As SldWorks.Component2

    Dim i As Integer
    
    For i = 1 To selMgr.GetSelectedObjectCount2(-1)
                
        Dim swComp As SldWorks.Component2
    
        Set swComp = selMgr.GetSelectedObjectsComponent4(i, -1)
        
        If Not swComp Is Nothing Then
            
            If Not isInit Then
                ReDim swComps(0)
                Set swComps(0) = swComp
                isInit = True
            Else
                If Not Contains(swComps, swComp) Then
                    ReDim Preserve swComps(UBound(swComps) + 1)
                    Set swComps(UBound(swComps)) = swComp
                End If
            End If
                        
        End If
    
    Next

    If isInit Then
        GetSelectedComponents = swComps
    Else
        GetSelectedComponents = Empty
    End If

End Function
~~~
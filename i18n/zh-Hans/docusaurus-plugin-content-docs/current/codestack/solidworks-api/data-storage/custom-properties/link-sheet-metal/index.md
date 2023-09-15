## 链接到钣金切割清单属性

将钣金切割清单属性链接到SOLIDWORKS零件自定义属性的宏

此VBA宏允许将钣金零件的指定切割清单自定义属性链接到SOLIDWORKS文件的自定义属性。

自定义属性将通过公式链接，并在钣金的几何形状发生更改时自动更新。

可以指定一个回退值，如果源零件不是钣金文档，则将其写入自定义属性。

为了自定义属性映射，请在**Init**函数中添加或删除映射值，如下所示。

在最后一个参数（**回退值**）中指定表达式时，需要用其他**"**（引号）转义**"**（引号）。例如，SOLIDWORKS质量的公式是**"SW-Mass"**，如果需要将其设置为回退值，则第三个参数应为**"""SW-Mass"""**，其中外部引号是表示[VBA字符串值](/docs/codestack/visual-basic/variables/standard-types#string)的引号

``` vb
Sub Init(Optional dummy As Variant = Empty)
    
    Set Map = New Collection
    
    Map.Add CreateMapValue("零件编号", "", "") '添加空的'零件编号'自定义属性
    Map.Add CreateMapValue("宽度", "包围盒宽度", "") '添加来自钣金的'包围盒宽度'的自定义属性'宽度'，如果不是钣金零件，则为空
    Map.Add CreateMapValue("材料", "", """SW-Material""") '添加自定义属性'材料'并将其设置为'SW-Material'公式，无论这是否是钣金零件
        
End Sub
```

### 注意事项和限制

- 仅支持单个切割清单文件（如果有多个切割清单，则会引发错误）
- 宏将在切割清单文件夹上设置**自动创建切割清单**和**自动更新**选项
- 仅支持零件文档
- 切割清单自定义属性通过表达式和切割清单名称进行链接。如果重命名切割清单，则属性将不会更新，需要重新运行宏。但是，如果切割清单保持原始名称，则所有属性将动态更新，无需重新运行宏。

``` vb
Dim swApp As SldWorks.SldWorks

Dim Map As Collection

Sub Init(Optional dummy As Variant = Empty)
    
    Set Map = New Collection
    
    Map.Add CreateMapValue("长度", "包围盒长度", """D1@Boss-Extrude1""")
    Map.Add CreateMapValue("质量", "质量", """SW-Mass""")
    Map.Add CreateMapValue("表面积", "", """SW-SurfaceArea""")
        
End Sub

Function CreateMapValue(targetPrpName As String, srcCutListPrpName As String, Optional fallbackValue As String = "") As Variant
    
    CreateMapValue = Array(targetPrpName, srcCutListPrpName, fallbackValue)
    
End Function

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.ModelDoc2
    
    Set swPart = swApp.ActiveDoc
    
    If swPart Is Nothing Then
        Err.Raise vbError, "", "打开零件文档"
    End If
    
    If swPart.GetType() <> swDocumentTypes_e.swDocPART Then
        Err.Raise vbError, "", "活动文档不是零件"
    End If
    
    Init
    
    Dim vCutLists As Variant
    vCutLists = GetCutLists(swPart)
    
    Dim swCutListCustomPrpMgr As SldWorks.CustomPropertyManager
    
    If Not IsEmpty(vCutLists) Then
        
        If UBound(vCutLists) > 0 Then
            Err.Raise vbError, "", "仅支持单个切割清单项"
        End If
        
        Dim swCutList As SldWorks.Feature
        
        Set swCutList = vCutLists(0)
        
        Dim swCutListFolder As SldWorks.BodyFolder
        Set swCutListFolder = swCutList.GetSpecificFeature2
        
        Dim swBody As SldWorks.Body2
        Set swBody = swCutListFolder.GetBodies()(0)
        
        If False <> swBody.IsSheetMetal() Then
            Set swCutListCustomPrpMgr = swCutList.CustomPropertyManager
        End If
        
    End If
    
    Dim swTargetCustPrpMgr As SldWorks.CustomPropertyManager
    Set swTargetCustPrpMgr = swPart.Extension.CustomPropertyManager("")
    
    Dim i As Integer
    
    For i = 1 To Map.Count
    
        Dim targetPrpName As String
        Dim srcCutListPrpName As String
        Dim fallbackValue As String
        
        targetPrpName = CStr(Map.item(i)(0))
        srcCutListPrpName = CStr(Map.item(i)(1))
        fallbackValue = CStr(Map.item(i)(2))
        
        CopyProperty swCutListCustomPrpMgr, swTargetCustPrpMgr, targetPrpName, srcCutListPrpName, fallbackValue
    Next
    
End Sub

Function GetCutLists(model As SldWorks.ModelDoc2) As Variant

    Dim swFeat As SldWorks.Feature
    
    Dim swCutLists() As SldWorks.Feature
    
    Set swFeat = model.FirstFeature
    
    While Not swFeat Is Nothing
        
        If swFeat.GetTypeName2 <> "HistoryFolder" Then
        
            ProcessFeature swFeat, swCutLists
            
            TraverseSubFeatures swFeat, swCutLists
        
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Wend
    
    If (Not swCutLists) = -1 Then
        GetCutLists = Empty
    Else
        GetCutLists = swCutLists
    End If
    
End Function

Sub TraverseSubFeatures(parentFeat As SldWorks.Feature, cutLists() As SldWorks.Feature)
    
    Dim swChildFeat As SldWorks.Feature
    Set swChildFeat = parentFeat.GetFirstSubFeature
    
    While Not swChildFeat Is Nothing
        ProcessFeature swChildFeat, cutLists
        Set swChildFeat = swChildFeat.GetNextSubFeature()
    Wend
    
End Sub

Sub ProcessFeature(feat As SldWorks.Feature, cutLists() As SldWorks.Feature)
    
    If feat.GetTypeName2() = "SolidBodyFolder" Then
        
        Dim swBodyFolder As SldWorks.BodyFolder
        Set swBodyFolder = feat.GetSpecificFeature2
        
        swBodyFolder.SetAutomaticCutList True
        swBodyFolder.SetAutomaticUpdate True
        swBodyFolder.UpdateCutList
        
    ElseIf feat.GetTypeName2() = "CutListFolder" Then
        
        If Not Contains(cutLists, feat) Then
            If (Not cutLists) = -1 Then
                ReDim cutLists(0)
            Else
                ReDim Preserve cutLists(UBound(cutLists) + 1)
            End If
            
            Set cutLists(UBound(cutLists)) = feat
        End If
        
    End If
    
End Sub

Function Contains(arr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(arr)
        If arr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function

Sub CopyProperty(srcPrpMgr As SldWorks.CustomPropertyManager, targPrpMgr As SldWorks.CustomPropertyManager, targetPrpName As String, srcCutListPrpName As String, fallbackValue As String)

    Dim prpVal As String
    
    If Not srcPrpMgr Is Nothing And srcCutListPrpName <> "" Then
    
        Dim prpResVal As String
                    
        srcPrpMgr.Get5 srcCutListPrpName, False, prpVal, prpResVal, False
    Else
        prpVal = fallbackValue
    End If
    
    targPrpMgr.Add2 targetPrpName, swCustomInfoType_e.swCustomInfoText, prpVal
    targPrpMgr.Set targetPrpName, prpVal
    
End Sub
```
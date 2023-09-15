---
layout: sw-tool
title: 用于给SOLIDWORKS钣金和焊接切割清单项上色的宏
caption: 上色切割清单
description: SOLIDWORKS VBA宏，根据自定义属性的值为每个切割清单项（钣金和焊接）分配唯一颜色
image: color-cut-list.svg
labels: [切割清单,钣金,焊接,上色]
group: 切割清单
---

这个VBA宏允许根据自定义属性的值为每个切割清单项（钣金或焊接）分配唯一的颜色。

这个宏最常见的用途是根据型材尺寸区分不同类型的焊接件。

宏将自动为特定的组分配随机颜色。也可以指定用于特定组的固定颜色。

## 配置

为了指定从中读取值并对切割清单项进行分组的自定义属性的名称，请更改**PRP_NAME**常量的值。

~~~ vb
Const PRP_NAME As String = "Description" '将Description的值更改为选择不同的自定义属性
~~~

为了指定颜色，需要修改**InitColors**方法中的值。

~~~ vb
Sub InitColors(Optional dummy As Variant = Empty)

    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)
    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)
    
End Sub
~~~

要向映射中添加新颜色，请添加以下行

~~~ vb
ColorsMap.Add "[属性值]", RGB([红色], [绿色], [蓝色])
~~~

例如，要将蓝色（RGB = 0, 0, 255）添加到焊接型材“50 X 50”，需要添加以下行

~~~ vb
ColorsMap.Add "50 X 50", RGB(0, 0, 255)
~~~

~~~ vb
Const PRP_NAME As String = "Description"

Dim swApp As SldWorks.SldWorks
Dim ColorsMap As Object

Sub main()

try_:
    
    On Error GoTo catch_
    
    Set ColorsMap = CreateObject("Scripting.Dictionary")

    ColorsMap.CompareMode = vbTextCompare

    InitColors

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        If swModel.GetType() = swDocumentTypes_e.swDocPART Then
            Dim vCutLists As Variant
            vCutLists = GetCutLists(swModel)
            ColorizeCutLists vCutLists
            swModel.GraphicsRedraw2
        Else
            Err.Raise vbError, "", "仅支持零件文档"
        End If
    Else
        Err.Raise vbError, "", "打开零件文档"
    End If
    
    GoTo finally_
    
catch_:
    MsgBox Err.Description, vbCritical
finally_:
    
End Sub

Sub InitColors(Optional dummy As Variant = Empty)

    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)
    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)
    
End Sub

Sub ColorizeCutLists(vCutLists As Variant)
    
    Dim i As Integer
    
    For i = 0 To UBound(vCutLists)
        
        Dim swCutList As SldWorks.Feature
        Set swCutList = vCutLists(i)
        
        Dim swBodyFolder As SldWorks.BodyFolder
        Set swBodyFolder = swCutList.GetSpecificFeature2
        
        If swBodyFolder.GetBodyCount() > 0 Then
            
            Dim swCustPrpsMgr As SldWorks.CustomPropertyManager
            Set swCustPrpsMgr = swCutList.CustomPropertyManager
            Dim prpVal As String
            swCustPrpsMgr.Get5 PRP_NAME, True, "", prpVal, False
            
            Dim color As Long
            
            If ColorsMap.Exists(prpVal) Then
                color = ColorsMap(prpVal)
            Else
                color = RGB(Int(255 * Rnd), Int(255 * Rnd), Int(255 * Rnd))
                ColorsMap.Add prpVal, color
            End If
            
            Dim j As Integer
            
            Dim vBodies As Variant
            vBodies = swBodyFolder.GetBodies
            
            For j = 0 To UBound(vBodies)
            
                Dim swBody As SldWorks.Body2
                Set swBody = vBodies(j)
                
                Dim RGBHex As String

                RGBHex = Right("000000" & Hex(color), 6)
                
                Dim dMatPrps(8) As Double
                
                dMatPrps(0) = CInt("&H" & Mid(RGBHex, 5, 2)) / 255
                dMatPrps(1) = CInt("&H" & Mid(RGBHex, 3, 2)) / 255
                dMatPrps(2) = CInt("&H" & Mid(RGBHex, 1, 2)) / 255
                dMatPrps(3) = 1
                dMatPrps(4) = 1
                dMatPrps(5) = 0.5
                dMatPrps(6) = 0.3125
                dMatPrps(7) = 0
                dMatPrps(8) = 0
                
                swBody.MaterialPropertyValues2 = dMatPrps
            Next
            
        End If
        
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
    
    GetCutLists = swCutLists
    
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

~~~
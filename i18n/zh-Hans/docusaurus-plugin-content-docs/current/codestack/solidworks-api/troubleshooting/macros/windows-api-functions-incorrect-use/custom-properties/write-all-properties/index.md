---
title: 使用SOLIDWORKS API将自定义属性写入文件、配置和切割清单
caption: 写入所有属性
description: 使用SOLIDWORKS API编写不同类型的属性（通用属性、配置特定属性和切割清单）的VBA宏示例
image: approved-date-custom-property.png
labels: [设置属性,添加属性,写入属性,日期]
---
![日期自定义属性](approved-date-custom-property.png){ width=550 }

此VBA宏示例演示了如何使用SOLIDWORKS API将自定义属性添加（创建新的或更改现有的）到各种自定义属性源中。这包括文件（通用）自定义属性、配置特定的自定义属性和切割清单项（焊接或钣金）自定义属性。

该宏添加了类型为“日期”的*ApprovedDate*自定义属性，并将其值设置为当前日期。

> 由于某些原因，当分配给切割清单项时，自定义属性字段类型会被忽略并默认为文本

~~~ vb
Const PRP_NAME As String = "ApprovedDate"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim curDate As Date
        curDate = Now
        
        Dim dateFormat As String
        dateFormat = Format(curDate, "YYYY-MM-dd")
        
        SetGeneralProperty swModel, PRP_NAME, dateFormat, swCustomInfoType_e.swCustomInfoDate
        SetConfigurationSpecificProperty swModel, PRP_NAME, dateFormat, swCustomInfoType_e.swCustomInfoDate
        SetCutListProperty swModel, PRP_NAME, dateFormat, swCustomInfoType_e.swCustomInfoDate
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Sub SetGeneralProperty(model As SldWorks.ModelDoc2, prpName As String, prpVal As String, prpType As swCustomInfoType_e)
    
    SetProperty model.Extension.CustomPropertyManager(""), prpName, prpVal, prpType
    
End Sub

Sub SetConfigurationSpecificProperty(model As SldWorks.ModelDoc2, prpName As String, prpVal As String, prpType As swCustomInfoType_e)
    
    Dim vNames As Variant
    vNames = model.GetConfigurationNames()
    
    Dim i As Integer
        
    For i = 0 To UBound(vNames)
        
        Dim confName As String
        confName = vNames(i)
        
        SetProperty model.Extension.CustomPropertyManager(confName), prpName, prpVal, prpType
        
    Next
    
End Sub

Sub SetCutListProperty(model As SldWorks.ModelDoc2, prpName As String, prpVal As String, prpType As swCustomInfoType_e)

    Dim vCutLists As Variant
    vCutLists = GetCutLists(model)
        
    If Not IsEmpty(vCutLists) Then
        Dim i As Integer
        
        For i = 0 To UBound(vCutLists)
            Dim swCutListFeat As SldWorks.Feature
            Set swCutListFeat = vCutLists(i)
            SetProperty swCutListFeat.CustomPropertyManager, prpName, prpVal
        Next
    End If

End Sub

Function GetCutLists(model As SldWorks.ModelDoc2) As Variant
    
    Dim swCutListFeats() As SldWorks.Feature
    Dim isInit As Boolean
    isInit = False
    
    Dim swFeat As SldWorks.Feature
    Dim swBodyFolder As SldWorks.BodyFolder
    
    Set swFeat = model.FirstFeature
    
    Do While Not swFeat Is Nothing
        
        If swFeat.GetTypeName2 = "CutListFolder" Then
            
            If Not isInit Then
                isInit = True
                ReDim swCutListFeats(0)
            Else
                ReDim Preserve swCutListFeats(UBound(swCutListFeats) + 1)
            End If
            
            Set swCutListFeats(UBound(swCutListFeats)) = swFeat
            
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Loop
    
    If isInit Then
        GetCutLists = swCutListFeats
    Else
        GetCutLists = Empty
    End If

End Function

Sub SetProperty(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String, prpVal As String, Optional prpType As swCustomInfoType_e = swCustomInfoType_e.swCustomInfoText)
    
    Dim res As Long
    res = custPrpMgr.Add3(prpName, prpType, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue)
    
    If res <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then
        Err.Raise vbError, "", "设置自定义属性失败。错误代码：" & res
    End If
    
End Sub
~~~
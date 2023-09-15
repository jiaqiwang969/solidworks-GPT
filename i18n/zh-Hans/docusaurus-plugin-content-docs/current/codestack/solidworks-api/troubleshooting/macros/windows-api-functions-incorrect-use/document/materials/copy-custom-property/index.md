---
layout: sw-tool
title: 从材料复制SOLIDWORKS自定义属性到模型的宏
caption: 从材料复制自定义属性到模型
description: 该宏演示了如何使用SOLIDWORKS API和XML解析器将指定的自定义属性从材料数据库复制到模型的自定义属性。
image: copy-material-custom-property.svg
labels: [材料, XML, 自定义属性]
group: 材料
---
![材料中的自定义属性](material-custom-property.png){ width=450 }

该宏演示了如何使用SOLIDWORKS API和XML解析器将指定的自定义属性从材料数据库复制到模型的自定义属性。

使用*MSXML2.DOMDocument*对象来读取材料数据库的XML并选择所需的材料节点。

* 通过*PRP_NAME*变量指定要复制的自定义属性名称

~~~ vb
Const PRP_NAME As String = "MyProperty"
~~~

* 运行宏。宏将查找活动零件的材料并从材料数据库文件中读取属性值
* 宏将创建/更新文件的通用自定义属性为与材料的自定义属性相应的值

~~~ vb
Const PRP_NAME As String = "MyProperty"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    If Not swPart Is Nothing Then
        
        Dim materialName As String
        Dim materialDb As String
        materialDb = GetMaterialDatabase(swPart, materialName)
        
        If materialDb <> "" Then
            Dim prpVal As String
            prpVal = GetMaterialCustomProperty(materialName, materialDb, PRP_NAME)
            SetCustomProperty swPart, PRP_NAME, prpVal
        Else
            MsgBox "未找到材料数据库"
        End If
        
    Else
        MsgBox "请打开零件"
    End If
    
End Sub

Function GetMaterialDatabase(part As SldWorks.PartDoc, ByRef materialName As String) As String
    
    Dim materialDbName As String
    materialName = part.GetMaterialPropertyName2("", materialDbName)

    Dim vDbs As Variant
    vDbs = swApp.GetMaterialDatabases()
    
    If Not IsEmpty(vDbs) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vDbs)
            Dim dbFilePath As String
            dbFilePath = vDbs(i)
            
            Dim dbFileName As String
            dbFileName = Right(dbFilePath, Len(dbFilePath) - InStrRev(dbFilePath, "\"))
                        
            If LCase(dbFileName) = LCase(materialDbName & ".sldmat") Then
                GetMaterialDatabase = dbFilePath
                Exit Function
            End If
            
        Next
        
    End If
    
    GetMaterialDatabase = ""
    
End Function

Function GetMaterialCustomProperty(materialName As String, materialDb As String, prpName As String) As String
    
    Dim xmlDoc As Object
    
    Set xmlDoc = CreateObject("MSXML2.DOMDocument")
    xmlDoc.Load materialDb
    
    Dim matNode As Object
    Set matNode = xmlDoc.SelectSingleNode("//classification/material[@name='" & materialName & "']/custom/prop[@name='" & prpName & "']")
    
    If Not matNode Is Nothing Then
        GetMaterialCustomProperty = matNode.Attributes.GetNamedItem("value").Text
    Else
        Err.Raise vbError, , "在数据库" & materialDb & "中未找到材料" & materialName & "的自定义属性" & prpName
    End If
    
End Function

Sub SetCustomProperty(model As SldWorks.ModelDoc2, prpName As String, prpVal As String)
    
    Dim swPrpMgr As SldWorks.CustomPropertyManager
    Set swPrpMgr = model.Extension.CustomPropertyManager("")
    swPrpMgr.Add3 prpName, swCustomInfoType_e.swCustomInfoText, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue
    swPrpMgr.Set2 prpName, prpVal
    
End Sub
~~~
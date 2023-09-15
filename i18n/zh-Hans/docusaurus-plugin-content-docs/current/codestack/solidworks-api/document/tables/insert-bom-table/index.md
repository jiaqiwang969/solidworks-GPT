---
caption: 插入BOM表格
title: 插入SOLIDWORKS Bill Of Materials表格并附加到锚点的宏
description: SOLIDWORKS VBA宏，用于将Bill Of Materials（BOM）表格插入到活动或所有具有指定参数的工作表，并将其附加到锚点
image: bom-table-anchor.png
---
![附加到锚点的BOM表格](bom-table-anchor.png){ width=600 }

此VBA宏将Bill Of Materials（BOM）表格插入到活动SOLIDWORKS图纸的所有或活动工作表中。工作表的第一个视图用作源视图。

BOM表格附加到BOM锚点。

修改宏中的常量以配置BOM表格选项。

~~~ vb
Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopLeft '锚点类型：swBOMConfigurationAnchor_BottomLeft、swBOMConfigurationAnchor_BottomRight、swBOMConfigurationAnchor_TopLeft、swBOMConfigurationAnchor_TopRight
Const BOM_TYPE As Integer = swBomType_e.swBomType_PartsOnly 'BOM类型：swBomType_Indented、swBomType_PartsOnly、swBomType_TopLevelOnly
Const TABLE_TEMPLATE As String = "" 'BOM模板的完整路径*.sldbomtbt，或者为空字符串以使用默认模板
Const INDENTED_NUMBERING_TYPE As Integer = swNumberingType_e.swNumberingType_Flat '编号类型（如果BOM_TYPE为swBomType_Indented）：swIndentedBOMNotSet、swNumberingType_Detailed、swNumberingType_Flat、swNumberingType_None
Const DETAILED_CUT_LIST As Boolean = False '详细切割清单（如果BOM_TYPE为swBomType_Indented）
Const FOLLOW_ASSEMBLY_ORDER As Boolean = True 'true以启用“按装配顺序”选项

Const ALL_SHEETS As Boolean = True 'True表示处理所有工作表，False表示仅处理活动工作表
~~~

~~~ vb
Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopLeft
Const BOM_TYPE As Integer = swBomType_e.swBomType_PartsOnly
Const TABLE_TEMPLATE As String = ""
Const INDENTED_NUMBERING_TYPE As Integer = swNumberingType_e.swNumberingType_Flat
Const DETAILED_CUT_LIST As Boolean = False
Const FOLLOW_ASSEMBLY_ORDER As Boolean = True

Const ALL_SHEETS As Boolean = True

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
    
    Set swDraw = swApp.ActiveDoc
    
    If ALL_SHEETS Then
    
        Dim vSheetNames As Variant
        vSheetNames = swDraw.GetSheetNames
        
        Dim activeSheetName As String
        activeSheetName = swDraw.GetCurrentSheet().GetName
        
        Dim i As Integer
        
        For i = 0 To UBound(vSheetNames)
            Dim swSheet As SldWorks.sheet
            Set swSheet = swDraw.sheet(CStr(vSheetNames(i)))
            InsertBomTable swDraw, swSheet
        Next
        
        swDraw.ActivateSheet activeSheetName
        
    Else
        InsertBomTable swDraw, swDraw.GetCurrentSheet
    End If
    
End Sub

Sub InsertBomTable(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet)
    
    If False = draw.ActivateSheet(sheet.GetName()) Then
        Err.Raise vbError, "", "激活工作表" & sheet.GetName & "失败"
    End If
    
    Dim vViews As Variant
    vViews = sheet.GetViews
    
    Dim swView As SldWorks.View
    
    Set swView = vViews(0)
    
    Dim swBomTableAnn As SldWorks.BomTableAnnotation
    
    Set swBomTableAnn = swView.InsertBomTable4(True, 0, 0, ANCHOR_TYPE, BOM_TYPE, "", TABLE_TEMPLATE, False, INDENTED_NUMBERING_TYPE, DETAILED_CUT_LIST)
        
    If Not swBomTableAnn Is Nothing Then
        swBomTableAnn.BomFeature.FollowAssemblyOrder2 = FOLLOW_ASSEMBLY_ORDER
    Else
        Err.Raise vbError, "", "在" & swView.Name & "中插入BOM表格失败"
    End If
    
End Sub
~~~
---
layout: sw-tool
title:  将SOLIDWORKS装配中的组件数量写入自定义属性
caption: 将组件数量写入自定义属性
---
 这是一个VBA宏，用于计算SOLIDWORKS装配中每个组件的总数量，并将其写入自定义属性中。
image: bom-quantity.svg
labels: [数量,组件]
group: 装配
---
这个VBA宏可以计算SOLIDWORKS装配中每个组件的总数量，并将其写入自定义属性中。

这个宏可以与[从零件或装配组件导出平展图案](/docs/codestack/solidworks-api/document/sheet-metal/export-all-flat-patterns/)和[导出到多种格式](/docs/codestack/solidworks-api/import-export/export-multi-formats/)宏一起使用。

## 配置

可以通过更改宏开头的常量参数来配置宏，如下所示：

~~~ vb
Const PRP_NAME As String = "Qty" '要写入数量的自定义属性的名称
Const MERGE_CONFIGURATIONS As Boolean = False '将所有配置视为单个项目时为True
Const INCLUDE_BOM_EXCLUDED As Boolean = False '基于特征管理器树而不是BOM写入数量时为True
~~~

## 注意事项

* 宏将考虑用户通过自定义属性（UNIT_OF_MEASURE）设置的数量
* 宏将考虑子组件的配置BOM选项（显示、提升或隐藏）
* 如果**MERGE_CONFIGURATIONS**设置为false，则宏将数量属性写入配置；否则，宏将数量属性写入文档属性
* 如果当前范围中不存在数量（例如，组件在BOM中被排除），宏将不会清除现有的数量
* 宏将无法处理未加载的组件（例如，轻量级组件）
* 宏将尝试解析所有轻量级组件

~~~ vb
Type BomPosition
    model As SldWorks.ModelDoc2
    Configuration As String
    Quantity As Double
End Type

Const PRP_NAME As String = "Qty"
Const MERGE_CONFIGURATIONS As Boolean = False
Const INCLUDE_BOM_EXCLUDED As Boolean = False

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
try_:
    On Error GoTo catch_
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    If swAssy Is Nothing Then
        Err.Raise vbError, "", "未打开装配"
    End If
    
    swAssy.ResolveAllLightWeightComponents True

    Dim swConf As SldWorks.Configuration
    Set swConf = swAssy.ConfigurationManager.ActiveConfiguration

    Dim bom() As BomPosition
    ComposeFlatBom swConf.GetRootComponent3(True), bom
        
    If (Not bom) <> -1 Then
        WriteBomQuantities bom
    End If
    
    GoTo finally_
catch_:
    MsgBox Err.Description, vbCritical, "计算组件数量"
finally_:
    
End Sub

Sub ComposeFlatBom(swParentComp As SldWorks.Component2, bom() As BomPosition)
        
    Dim vComps As Variant
    vComps = swParentComp.GetChildren
    
    If Not IsEmpty(vComps) Then
    
        Dim i As Integer
        
        For i = 0 To UBound(vComps)
            
            Dim swComp As SldWorks.Component2
            Set swComp = vComps(i)
            
            If swComp.GetSuppression() <> swComponentSuppressionState_e.swComponentSuppressed And (False = swComp.ExcludeFromBOM Or INCLUDE_BOM_EXCLUDED) Then
                
                Dim swRefModel As SldWorks.ModelDoc2
                Set swRefModel = swComp.GetModelDoc2()
                
                If swRefModel Is Nothing Then
                    Err.Raise vbError, "", swComp.GetPathName() & " 模型未加载"
                End If
                
                Dim swRefConf As SldWorks.Configuration
                Set swRefConf = swRefModel.GetConfigurationByName(swComp.ReferencedConfiguration)
                
                Dim bomChildType As Integer
                bomChildType = swRefConf.ChildComponentDisplayInBOM
                
                If bomChildType <> swChildComponentInBOMOption_e.swChildComponent_Promote Then
                
                    Dim bomPos As Integer
                    bomPos = FindBomPosition(bom, swComp)
                    
                    If bomPos = -1 Then
                        
                        If (Not bom) = -1 Then
                            ReDim bom(0)
                        Else
                            ReDim Preserve bom(UBound(bom) + 1)
                        End If
                                            
                        bomPos = UBound(bom)
        
                        Dim refConfName As String
            
                        If MERGE_CONFIGURATIONS Then
                            refConfName = ""
                        Else
                            refConfName = swComp.ReferencedConfiguration
                        End If
        
                        Set bom(bomPos).model = swRefModel
                        bom(bomPos).Configuration = refConfName
                        bom(bomPos).Quantity = GetQuantity(swComp)
                                            
                    Else
                        bom(bomPos).Quantity = bom(bomPos).Quantity + GetQuantity(swComp)
                    End If
                
                End If
                
                If bomChildType <> swChildComponentInBOMOption_e.swChildComponent_Hide Then
                    ComposeFlatBom swComp, bom
                End If
                
            End If
            
        Next
    
    End If
    
End Sub

Function FindBomPosition(bom() As BomPosition, comp As SldWorks.Component2) As Integer
        
    FindBomPosition = -1
    
    Dim i As Integer
    
    If (Not bom) <> -1 Then
        
        Dim refConfName As String
        
        If MERGE_CONFIGURATIONS Then
            refConfName = ""
        Else
            refConfName = comp.ReferencedConfiguration
        End If
        
        For i = 0 To UBound(bom)
            If LCase(bom(i).model.GetPathName()) = LCase(comp.GetPathName()) And LCase(bom(i).Configuration) = LCase(refConfName) Then
                FindBomPosition = i
                Exit Function
            End If
        Next
    End If
    
End Function

Function GetQuantity(comp As SldWorks.Component2) As Double

On Error GoTo err_

    Dim refModel As SldWorks.ModelDoc2
    Set refModel = comp.GetModelDoc2
    
    Dim qtyPrpName As String
    
    qtyPrpName = GetPropertyValue(refModel, comp.ReferencedConfiguration, "UNIT_OF_MEASURE")
    
    If qtyPrpName <> "" Then
        GetQuantity = CDbl(GetPropertyValue(refModel, comp.ReferencedConfiguration, qtyPrpName))
    Else
        GetQuantity = 1
    End If
    
    Exit Function

err_:
    Debug.Print "提取 " & comp.Name2 & " 的数量失败: " & Err.Description
    GetQuantity = 1

End Function

Function GetPropertyValue(model As SldWorks.ModelDoc2, conf As String, prpName As String) As String
    
    Dim confSpecPrpMgr As SldWorks.CustomPropertyManager
    Dim genPrpMgr As SldWorks.CustomPropertyManager
    
    Set confSpecPrpMgr = model.Extension.CustomPropertyManager(conf)
    Set genPrpMgr = model.Extension.CustomPropertyManager("")
    
    Dim prpResVal As String
    
    confSpecPrpMgr.Get3 prpName, False, "", prpResVal
    
    If prpResVal = "" Then
        genPrpMgr.Get3 prpName, False, "", prpResVal
    End If
    
    GetPropertyValue = prpResVal
    
End Function

Sub WriteBomQuantities(bom() As BomPosition)
    
    Dim i As Integer
    
    If (Not bom) <> -1 Then
        
        For i = 0 To UBound(bom)
            
            Dim refConfName As String
            
            Dim swRefModel As SldWorks.ModelDoc2
            Set swRefModel = bom(i).model
            
            If MERGE_CONFIGURATIONS Then
                refConfName = ""
            Else
                refConfName = bom(i).Configuration
                
                If swRefModel.GetBendState() <> swSMBendState_e.swSMBendStateNone Then
                
                    Dim swConf As SldWorks.Configuration
                    Set swConf = swRefModel.GetConfigurationByName(refConfName)
                    
                    Dim vChildConfs As Variant
                    vChildConfs = swConf.GetChildren()
                    
                    If Not IsEmpty(vChildConfs) Then
                        Dim j As Integer
                        
                        For j = 0 To UBound(vChildConfs)
                            
                            Dim swChildConf As SldWorks.Configuration
                            Set swChildConf = vChildConfs(j)
                            
                            If swChildConf.Type = swConfigurationType_e.swConfiguration_SheetMetal Then
                                SetQuantity swRefModel, swChildConf.Name, bom(i).Quantity
                            End If
                            
                        Next
                        
                    End If
                    
                End If
                
            End If
            
            SetQuantity swRefModel, refConfName, bom(i).Quantity
            
        Next
    End If
    
End Sub

Sub SetQuantity(model As SldWorks.ModelDoc2, confName As String, qty As Double)
    
    Dim swCustPrpsMgr As SldWorks.CustomPropertyManager
    Set swCustPrpsMgr = model.Extension.CustomPropertyManager(confName)
    
    swCustPrpsMgr.Add3 PRP_NAME, swCustomInfoType_e.swCustomInfoText, qty, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue
    swCustPrpsMgr.Set2 PRP_NAME, qty
    
End Sub
~~~
---
title:  使用SOLIDWORKS API从所选组件中读取配置特定的切割列表属性
caption: 读取组件切割列表属性
---
 使用SOLIDWORKS API从装配体中所选组件的切割列表中读取所有属性的VBA宏示例
image: cut-list-properties.png
labels: [切割列表属性,组件]
---
![切割列表属性](cut-list-properties.png){ width=550 }

此VBA宏示例演示了如何使用SOLIDWORKS API从装配体中所选组件的切割列表中读取并打印所有自定义属性。

切割列表是从组件的相应引用配置中读取的。

结果以以下格式输出到VBA编辑器的即时窗口中。

~~~
CS-02-1 (A)
    Sheet<1>
        Bounding Box Length: 150
        Bounding Box Width: 50
        Sheet Metal Thickness: 0.74
        Bounding Box Area: 7500
        Bounding Box Area-Blank: 7500
        Cutting Length-Outer: 400
        Cutting Length-Inner: 0
        Cut Outs: 0
        Bends: 0
        Bend Allowance: 0.5
        Material: Material <not specified>
        Mass: 5.52
        Description: Sheet
        Bend Radius: 0.74
        Surface Treatment: Finish <not specified>
        Cost-TotalCost: 0
        QUANTITY: 1
~~~

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then
        
            Dim swSelMgr As SldWorks.SelectionMgr
            Set swSelMgr = swModel.SelectionManager
            
            Dim swComp As SldWorks.Component2
            Set swComp = swSelMgr.GetSelectedObjectsComponent2(1)
            
            If Not swComp Is Nothing Then
                PrintComponentCutListProperties swComp
            Else
                MsgBox "请选择组件"
            End If
            
        Else
            MsgBox "活动文档不是装配体"
        End If
    Else
        MsgBox "请打开装配体"
    End If
    
End Sub

Sub PrintComponentCutListProperties(comp As SldWorks.Component2)
    
    Dim vCutLists As Variant
    vCutLists = GetCutLists(comp)
    
    Debug.Print comp.Name2 & " (" & comp.ReferencedConfiguration & ")"
    
    If Not IsEmpty(vCutLists) Then
    
        Dim i As Integer
        
        For i = 0 To UBound(vCutLists)
        
            Dim swCutListFeat As SldWorks.Feature
            Set swCutListFeat = vCutLists(i)
            Debug.Print "    " & swCutListFeat.Name
            
            Dim swCustPrpsMgr As SldWorks.CustomPropertyManager
            Set swCustPrpsMgr = swCutListFeat.CustomPropertyManager
            
            Dim vPrpNames As Variant
            Dim vPrpTypes As Variant
            Dim vPrpVals As Variant
            Dim vResVals As Variant
            Dim vPrpsLink As Variant
            
            Dim prpsCount As Integer
            prpsCount = swCustPrpsMgr.GetAll3(vPrpNames, vPrpTypes, vPrpVals, vResVals, vPrpsLink)
            
            Dim j As Integer
            
            Dim indent As String
            indent = "        "
            
            For j = 0 To prpsCount - 1
                Debug.Print indent & vPrpNames(j) & ": " & vPrpVals(j)
            Next
            
        Next
    Else
        Debug.Print "    -无切割列表-"
    End If
    
End Sub

Function GetCutLists(comp As SldWorks.Component2) As Variant
    
    Dim swCutListFeats() As SldWorks.Feature
    Dim isInit As Boolean
    isInit = False
    
    Dim swFeat As SldWorks.Feature
    Dim swBodyFolder As SldWorks.BodyFolder
    
    Set swFeat = comp.FirstFeature
    
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
~~~
---
layout: sw-tool
title: 使用SOLIDWORKS API将组件位置导出为CSV的VBA宏
caption: 导出组件位置
description: 该宏使用SOLIDWORKS API将组件的位置导出到外部CSV文本文件中
image: components-positions-table.png
labels: [导出,CSV,Excel,起点]
group: 组件装配
---
![在Excel中导出的组件位置](components-positions-table.png){ width=350 }

该宏使用SOLIDWORKS API将活动装配中的组件位置（X、Y、Z）导出到逗号分隔值（CSV）文件中。该文件可以在Excel或任何文本编辑器中打开。

组件位置是相对于装配起点的原点坐标（0, 0, 0）。

宏可以导出所有组件或仅导出所选组件的实例。

* 通过*OUT_FILE_PATH*常量指定输出文件的路径

~~~ vb
Const OUT_FILE_PATH As String = "D:\locations.csv"
~~~

* 指定坐标的米转换因子

~~~ vb
Const CONV_FACTOR As Double = 1000 '米转毫米
~~~

* 可选择选择要仅导出其实例的组件（即具有相同文件路径和引用配置的所有组件）。清除选择以导出所有组件。

结果是创建了一个包含以下内容的CSV文件：

* 组件文件完整路径
* 引用配置
* 组件名称
* 指定单位中原点的X、Y、Z坐标

~~~ vb
Const OUT_FILE_PATH As String = "D:\locations.csv"
Const CONV_FACTOR As Double = 1000 '米转毫米

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        
        Dim swSeedComp As SldWorks.Component2
        Set swSeedComp = swAssy.SelectionManager.GetSelectedObjectsComponent4(1, -1)
        
        Dim table As String
        table = GetComponentsPositions(swAssy, swSeedComp, CONV_FACTOR)
        WriteTextFile OUT_FILE_PATH, table
        
    Else
        MsgBox "请打开装配"
    End If
    
End Sub

Function GetComponentsPositions(assy As SldWorks.AssemblyDoc, seedComp As SldWorks.Component2, convFactor As Double) As String
    
    Dim table As String
    table = "路径,配置,名称,X,Y,Z"
    
    Dim vComps As Variant
    vComps = assy.GetComponents(False)
    
    Dim i As Integer
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
        
        If swComp.GetSuppression() <> swComponentSuppressionState_e.swComponentSuppressed Then
            
            Dim includeComp As Boolean
            
            If seedComp Is Nothing Then
                includeComp = True
            ElseIf LCase(seedComp.GetPathName()) = LCase(swComp.GetPathName()) And LCase(seedComp.ReferencedConfiguration) = LCase(swComp.ReferencedConfiguration) Then
                includeComp = True
            Else
                includeComp = False
            End If
            
            If includeComp Then
                Dim vOrigin As Variant
                vOrigin = GetOrigin(swComp)
                table = table & vbLf
                table = table & swComp.GetPathName() & "," & swComp.ReferencedConfiguration & "," & swComp.Name2 & "," & vOrigin(0) * convFactor & "," & vOrigin(1) * convFactor & "," & vOrigin(2) * convFactor
            End If
            
        End If
        
    Next
    
    GetComponentsPositions = table
    
End Function

Function GetOrigin(comp As SldWorks.Component2) As Variant
    
    Dim swXForm As SldWorks.MathTransform
    Set swXForm = comp.Transform2
    
    Dim swMathUtils As SldWorks.MathUtility
    Set swMathUtils = swApp.GetMathUtility
    
    Dim dPt(2) As Double
    dPt(0) = 0: dPt(1) = 0: dPt(2) = 0
    
    Dim swMathPt As SldWorks.MathPoint
    Set swMathPt = swMathUtils.CreatePoint(dPt)
    
    Set swMathPt = swMathPt.MultiplyTransform(swXForm)
    
    GetOrigin = swMathPt.ArrayData
    
End Function

Sub WriteTextFile(filePath As String, content As String)
    
    Dim fileNmb As Integer
    fileNmb = FreeFile
    
    Open filePath For Output As #fileNmb
    Print #fileNmb, content
    Close #fileNmb
    
End Sub
~~~
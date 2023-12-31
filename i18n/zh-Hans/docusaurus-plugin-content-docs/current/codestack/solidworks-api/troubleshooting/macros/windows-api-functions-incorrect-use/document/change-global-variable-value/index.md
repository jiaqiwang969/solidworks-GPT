---
title:  使用SOLIDWORKS API更改模型中的全局变量值
caption: 更改全局变量的值
---
 该示例演示了如何使用SOLIDWORKS API在方程管理器中按名称修改全局变量的值。
image: equation-manager-global-variable.png
labels: [equation, variable]
---
![带有全局变量的方程管理器](equation-manager-global-variable.png)

该示例演示了如何使用SOLIDWORKS API在方程管理器中按名称修改全局变量的值。

在宏的头部更改变量的名称和值常量。

~~~ vb
Const VAR_NAME As String = "Factor"
Const NEW_VALUE As Double = 0.75

Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks

    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swEqMgr As SldWorks.EquationMgr
        
        Set swEqMgr = swModel.GetEquationMgr
        
        If SetEquationValue(swEqMgr, VAR_NAME, NEW_VALUE) Then
            swModel.ForceRebuild3 True
        Else
            MsgBox "无法找到方程式 " & name
        End If
    
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Function SetEquationValue(eqMgr As SldWorks.EquationMgr, name As String, value As Double) As Boolean
    
    Dim index As Integer
    index = GetEquationIndexByName(eqMgr, name)
    
    If index <> -1 Then
        eqMgr.Equation(index) = """" & name & """=" & NEW_VALUE
        SetEquationValue = True
    Else
        SetEquationValue = False
    End If
        
End Function

Function GetEquationIndexByName(eqMgr As SldWorks.EquationMgr, name As String) As Integer
    
    Dim i As Integer
        
    GetEquationIndexByName = -1
        
    For i = 0 To eqMgr.GetCount - 1
        
        Dim eqName As String
        eqName = Trim(Split(eqMgr.Equation(i), "=")(0))
        eqName = Mid(eqName, 2, Len(eqName) - 2) '从名称中删除""符号
        
        If UCase(eqName) = UCase(VAR_NAME) Then
            GetEquationIndexByName = i
            Exit Function
        End If
    Next
    
End Function
~~~
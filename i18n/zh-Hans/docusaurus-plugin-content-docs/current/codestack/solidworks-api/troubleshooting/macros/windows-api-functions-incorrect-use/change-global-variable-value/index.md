---
title:  Change value of global variable in model using SOLIDWORKS API
caption: Change Value Of Global Variable
---
 Example demonstrate how to modify the value of the global variable by name in the equation manager
image: equation-manager-global-variable.png
labels: [equation, variable]
---
![Equation Manager with Global Variable](equation-manager-global-variable.png)

This example demonstrates how to modify the value of the named global variable in the equation manager using SOLIDWORKS API.

Change the name of the variable and the value constants in the head of the macro.

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
            MsgBox "Failed to find the equation " & name
        End If
    
    Else
        MsgBox "Please open the model"
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
        eqName = Mid(eqName, 2, Len(eqName) - 2) 'removing the "" symbols from the name
        
        If UCase(eqName) = UCase(VAR_NAME) Then
            GetEquationIndexByName = i
            Exit Function
        End If
    Next
    
End Function
~~~



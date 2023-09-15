---
caption: 设置顺序组件引用
title: 自动为SOLIDWORKS组件引用分配顺序编号的宏
description: VBA宏，根据种子数自动递增和分配所选组件的引用顺序编号
image: component-reference.png
---
![组件引用](component-reference.png){ width=600 }

此VBA宏允许自动为SOLIDWORKS装配中的所选组件引用分配数字编号。

编号根据指定的种子值自动递增。

编号按照组件在装配中被选择的顺序进行分配。

组件可以在特征管理器树或图形区域中选择（可以选择组件的任何实体，例如面或边）。

宏可以配置为在弹出框中指定输入（将**INPUT_SEED**变量的值设置为**True**），或者通过提供种子作为常量来指定输入（**INPUT_SEED**等于**False**，**SEED**等于种子数）。

~~~ vb
Const INPUT_SEED As Boolean = True '在运行宏时在输入框中输入种子（起始）编号
Const SEED As Integer = 1
~~~

~~~ vb
Enum ScopeType_e
    Selected
    topLevel
    All
End Enum

Const SCOPE As Integer = ScopeType_e.Selected
Const INPUT_SEED As Boolean = False
Const SEED As Integer = 1

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
        
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    Dim swAssm As SldWorks.AssemblyDoc
    Set swAssm = swModel
    
    If Not swModel Is Nothing Then
        
        Dim i As Integer
        Dim swComp As SldWorks.Component2
        Dim nextRef As Integer
        
        If INPUT_SEED Then
            Dim seedStr As String
            seedStr = InputBox("指定起始种子编号")
            If seedStr <> "" Then
                nextRef = CInt(seedStr)
            Else
                End
            End If
        Else
            nextRef = SEED
        End If
        
        If SCOPE = ScopeType_e.Selected Then
        
            Dim swSelMgr As SldWorks.SelectionMgr
        
            Set swSelMgr = swModel.SelectionManager
            
            For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
            
                Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)
                
                If swComp Is Nothing Then
                    Err.Raise vbError, "", "在索引 " & i & " 处选择的对象不属于组件"
                End If
                
                swComp.ComponentReference = nextRef
                
                nextRef = nextRef + 1
                
            Next
        Else
            Dim topLevel As Boolean
            
            If SCOPE = ScopeType_e.topLevel Then
                topLevel = True
            ElseIf SCOPE = ScopeType_e.All Then
                topelvel = False
            Else
                Err.Raise vbError, "", "不支持的范围"
            End If
            
            Dim vComps As Variant
            vComps = swAssm.GetComponents(topLevel)
            
            If Not IsEmpty(vComps) Then
                
                For i = 0 To UBound(vComps)
            
                    Set swComp = vComps(i)
                    
                    swComp.ComponentReference = nextRef
                    
                    nextRef = nextRef + 1
                
                Next
                
            End If
            
        End If
        
    Else
        Err.Raise vbError, "", "打开装配体"
    End If
    
End Sub
~~~
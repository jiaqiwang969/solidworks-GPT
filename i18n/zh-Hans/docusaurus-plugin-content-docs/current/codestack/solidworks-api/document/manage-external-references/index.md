---
layout: sw-tool
title:  SOLIDWORKS宏以打破、锁定或解锁文件和组件的所有外部引用
caption: 管理所有组件的外部引用
---
 该示例将使用SOLIDWORKS API打破、锁定或解锁活动装配中的文件或组件的所有外部引用。
image: break-all-external-references.png
labels: [装配, 外部引用, solidworks api, 实用工具]
group: 装配
redirect-from:
  - /2018/03/solidworks-api-assembly-break-all-external-references-for-components.html
  - /solidworks-api/document/assembly/break-components-external-references
  - /solidworks-api/document/assembly/components/break-external-references/
---

该示例将使用SOLIDWORKS API打破、锁定或解锁活动模型或活动装配中的所有外部引用或所有选定的组件的外部引用。

![打破所有外部引用的命令](break-all-external-references.png){ width=640 }

## 配置

可以通过修改常量的值来配置宏

~~~ vb
Const MODIFY_ACTION As Integer = ModifyAction_e.UnlockAll '在模型中调用的操作。支持的值：BreakAll、LockAll、UnlockAll
Const REFS_SCOPE As Integer = Scope_e.AllComponents '运行上述操作的范围。支持的值：ThisFile、TopLevelComponents、AllComponents、SelectedComponents
~~~

## CAD+

该宏与[Toolbar+](https://cadplus.xarial.com/toolbar/)和[Batch+](https://cadplus.xarial.com/batch/)工具兼容，因此可以将按钮添加到工具栏并分配快捷键以便更轻松地访问或批处理运行。

要启用[宏参数](https://cadplus.xarial.com/toolbar/configuration/arguments/)，请将**ARGS**常量设置为true

~~~ vb
#Const ARGS = True
~~~

在这种情况下，不需要复制宏以设置单独的[操作和范围选项](#configuration)。

而是指定2个参数：

1. 使用**-b**、**-l**、**-u**来分别设置操作为**打破所有**、**锁定所有**、**解锁所有**
1. 使用**-f**、**-t**、**-a**来分别设置范围为**此文件**、**顶层组件**、**所有组件**

例如，以下参数将锁定文件本身的所有外部引用

~~~
> -l -f
~~~

而以下命令将打破装配中所有组件（包括子组件）的所有外部引用

~~~
> -b -a
~~~

~~~ vb
#Const ARGS = False 'True表示使用Toolbar+或Batch+中的参数，而不是常量

Enum ModifyAction_e
    BreakAll
    LockAll
    UnlockAll
End Enum

Enum Scope_e
    ThisFile
    TopLevelComponents
    AllComponents
    SelectedComponents
End Enum

Const MODIFY_ACTION As Integer = ModifyAction_e.UnlockAll
Const REFS_SCOPE As Integer = Scope_e.AllComponents

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
try_:
    
    On Error GoTo catch_
    
    Dim action As ModifyAction_e
    Dim scope As Scope_e
    
    #If ARGS Then
                
        Dim macroRunner As Object
        Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")
        
        Dim param As Object
        Set param = macroRunner.PopParameter(swApp)
        
        Dim vArgs As Variant
        vArgs = param.Get("Args")
        
        Dim actionArg As String
        actionArg = CStr(vArgs(0))
        
        Select Case LCase(actionArg)
            Case "-b"
                action = ModifyAction_e.BreakAll
            Case "-l"
                action = ModifyAction_e.LockAll
            Case "-u"
                action = ModifyAction_e.UnlockAll
            Case Else
                Err.Raise vbError, "", "无效的操作参数。有效参数：-b -l -u"
        End Select
        
        Dim scopeArg As String
        scopeArg = CStr(vArgs(1))
        
        Select Case LCase(scopeArg)
            Case "-f"
                scope = ThisFile
            Case "-t"
                scope = TopLevelComponents
            Case "-a"
                scope = AllComponents
            Case Else
                Err.Raise vbError, "", "无效的范围参数。有效参数：-f -t -a"
        End Select
        
    #Else
        action = MODIFY_ACTION
        scope = REFS_SCOPE
    #End If
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If scope = ThisFile Then
        ProcessReferences swModel, action
    Else
        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then
                
            Dim swAssy As SldWorks.AssemblyDoc
                
            Set swAssy = swModel
            
            swAssy.ResolveAllLightWeightComponents True
            
            Dim vComps As Variant
            Dim swComp As SldWorks.Component2
            Dim swCompModel As SldWorks.ModelDoc2
            
            If scope = SelectedComponents Then
                vComps = GetSelectedComponents(swModel.SelectionManager)
            Else
                Dim topLevel As Boolean
                
                Select Case scope
                    Case TopLevelComponents
                        topLevel = True
                    Case AllComponents
                        topLevel = False
                    Case Else
                        Err.Raise "无效的范围"
                End Select
                
                vComps = swAssy.GetComponents(topLevel)
                
            End If
            
            Dim i As Integer
                
            If Not IsEmpty(vComps) Then
                
                For i = 0 To UBound(vComps)
                    
                    Set swComp = vComps(i)
                    Set swCompModel = swComp.GetModelDoc2
                    
                    If Not swCompModel Is Nothing Then
                        ProcessReferences swCompModel, action
                    End If
                Next
            
            End If
            
        Else
            Err.Raise "请打开装配"
        End If
     
     End If
         
    GoTo finally_
         
catch_:
    #If ARGS Then
        Err.Raise Err.Number, Err.Source, Err.Description, Err.HelpContext, Err.HelpContext
    #Else
        MsgBox Err.Description, vbCritical
    #End If
finally_:

End Sub

Function GetSelectedComponents(selMgr As SldWorks.SelectionMgr) As Variant

    Dim isInit As Boolean
    isInit = False
    
    Dim swComps() As SldWorks.Component2

    Dim i As Integer
    
    For i = 1 To selMgr.GetSelectedObjectCount2(-1)
                
        Dim swComp As SldWorks.Component2
    
        Set swComp = selMgr.GetSelectedObjectsComponent4(i, -1)
        
        If Not swComp Is Nothing Then
            
            If Not isInit Then
                ReDim swComps(0)
                Set swComps(0) = swComp
                isInit = True
            Else
                If Not Contains(swComps, swComp) Then
                    ReDim Preserve swComps(UBound(swComps) + 1)
                    Set swComps(UBound(swComps)) = swComp
                End If
            End If
                        
        End If
    
    Next

    If isInit Then
        GetSelectedComponents = swComps
    Else
        GetSelectedComponents = Empty
    End If

End Function

Function Contains(vArr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vArr)
        If vArr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function

Sub ProcessReferences(model As SldWorks.ModelDoc2, action As ModifyAction_e)
    
    Select Case action
        Case ModifyAction_e.BreakAll
            model.Extension.BreakAllExternalFileReferences2 False
        Case ModifyAction_e.LockAll
            model.LockAllExternalReferences
        Case ModifyAction_e.UnlockAll
            model.UnlockAllExternalReferences
        Case Else
            Err.Raise "不支持的操作"
    End Select
    
End Sub
~~~
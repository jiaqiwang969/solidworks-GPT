![组件固定选项](component-fix-options.png)

这个VBA示例演示了一个简单的解决方案，用于在活动配置或所有配置中固定或浮动组件。[IAssemblyDoc::FixComponent](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~fixcomponent.html)只能在所有配置中固定组件。

创建一个带有2个配置和4个组件实例的示例装配，其中前2个实例在两个配置中都是浮动的，而最后2个实例在两个配置中都是固定的。

![示例的初始状态](component-initial-state.png)

运行此宏的结果将更改组件为以下结果：

![运行宏的结果](component-fix-result.png)

~~~ vb
#If VBA7 Then
     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#Else
     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#End If

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    FixComponent swAssy.GetComponentByName("Part1-1"), True
    FixComponent swAssy.GetComponentByName("Part1-2"), False
    FloatComponent swAssy.GetComponentByName("Part1-3"), True
    FloatComponent swAssy.GetComponentByName("Part1-4"), False
    
End Sub

Sub FixComponent(comp As SldWorks.Component2, thisConf As Boolean)

    Const CMD_FixCompInThisConf As Long = 51605
    Const CMD_FixCompInAllConf As Long = 51611
    
    If False <> comp.Select4(False, Nothing, False) Then
        
        Const WM_COMMAND As Long = &H111
        Dim cmd As Long
        
        If thisConf Then
            cmd = CMD_FixCompInThisConf
        Else
            cmd = CMD_FixCompInAllConf
        End If
        
        SendMessage swApp.Frame().GetHWnd(), WM_COMMAND, cmd, 0
    Else
        Err.Raise vbError, "", "Failed to select component"
    End If
    
End Sub

Sub FloatComponent(comp As SldWorks.Component2, thisConf As Boolean)
    
    Const CMD_FloatCompInThisConf As Long = 51609
    Const CMD_FloatCompInAllConf As Long = 51608
    
    If False <> comp.Select4(False, Nothing, False) Then
        
        Const WM_COMMAND As Long = &H111
        Dim cmd As Long
        
        If thisConf Then
            cmd = CMD_FloatCompInThisConf
        Else
            cmd = CMD_FloatCompInAllConf
        End If
        
        SendMessage swApp.Frame().GetHWnd(), WM_COMMAND, cmd, 0
    Else
        Err.Raise vbError, "", "Failed to select component"
    End If
    
End Sub
~~~
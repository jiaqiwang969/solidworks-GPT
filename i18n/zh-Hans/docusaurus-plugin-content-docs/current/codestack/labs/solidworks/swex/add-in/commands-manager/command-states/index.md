---
title:  SOLIDWORKS命令的自定义启用状态
caption: 自定义启用命令状态
---
 使用SwEx框架解释了如何使用SOLIDWORKS命令的自定义启用状态
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
SOLIDWORKS支持4种命令状态：

1. 未选择且启用。这是按钮可以点击的默认选项。
2. 未选择且禁用。当命令在某些框架中不受支持时使用此选项。例如，配对命令在零件和图纸中将被禁用，因为它仅在装配中受支持。
3. 已选择且禁用。表示禁用的选中按钮。
4. 已选择且启用。表示选中的按钮。

![支持的命令状态](command-states.png)

如果在[CommandItemInfoAttribute](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandItemInfoAttribute.htm)中定义了支持的工作区，SwEx框架将根据其支持的工作区为命令分配适当的状态（启用或禁用）。但是，用户可以更改状态以提供更高级的管理（例如，如果选择了某个对象或模型中存在任何实体或组件，则可能需要启用命令）。为此，需要在[AddCommandGroup](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_SwAddInEx_AddCommandGroup__1.htm)或[AddContextMenu](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_SwAddInEx_AddContextMenu__1.htm)方法的最后一个参数中指定启用方法处理程序。

该方法被定义为[EnableMethodDelegate](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_EnableMethodDelegate_1.htm)委托，并将命令ID作为第一个参数和通过引用传递的状态作为第二个参数。

状态的值将根据工作区预先分配，并可以在方法内由用户更改。

> 此方法允许在工具栏和菜单中实现切换按钮。要设置选中状态，请分配[CommandItemEnableState_e](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Enums_CommandItemEnableState_e.htm)枚举的*SelectEnable*或*SelectDisable*值。

~~~vb
Public Enum Commands_e
    Command1
    Command2
End Enum

Public Overrides Function OnConnect() As Boolean
    AddCommandGroup(Of Commands_e)(AddressOf OnButtonClick, AddressOf OnButtonEnable)
    Return True
End Function

Private Sub OnButtonEnable(ByVal cmd As Commands_e, ByRef state As CommandItemEnableState_e)
    Select Case cmd
        Case Commands_e.Command1, Commands_e.Command2
            'TODO: implement logic to identify the state of the button
            state = CommandItemEnableState_e.DeselectDisable
    End Select
End Su
~~~

~~~cs
public enum Commands_e
{
    Command1,
    Command2
}

public override bool OnConnect()
{
    AddCommandGroup<Commands_e>(OnButtonClick, OnButtonEnable);
    return true;
}

private void OnButtonEnable(Commands_e cmd, ref CommandItemEnableState_e state)
{
    switch (cmd)
    {
        case Commands_e.Command1:
        case Commands_e.Command2:
            //TODO: implement logic to identify the state of the button
            state = CommandItemEnableState_e.DeselectDisable;
            break;
    }
}
~~~
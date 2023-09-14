---
layout: sw-tool
title: VBA macro to capture SOLIDWORKS commands via API event handlers
caption: Capture SOLIDWORKS Commands
description: Macro allows capturing SOLIDWORKS and user commands into the list box
image: capturing-hide-command-id.png
labels: [command, event]
group: Developers
---
This macro allows capturing of SOLIDWORKS command ids (e.g. toolbar, page button or context menu clicks). Commands are defined in the [swCommands_e](https://help.solidworks.com/2012/english/api/swcommands/solidworks.interop.swcommands~solidworks.interop.swcommands.swcommands_e.html) enumeration and can be called using the [ISldWorks::RunCommand](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~runcommand.html) SOLIDWORKS API method.

This could be in particularly useful when certain SOLIDWORKS APIs are not available in the SDK.

All commands have user friendly names however they could not always match the names in the user interface. This fact could make it hard to find the correct command (as there are currently more than 3000 commands available). For example Hide Sketch command in User Interface corresponds to *swCommands_Blank_Refgeom* command id.

## Capturing standard commands

This macro helps to capture the id of command directly from SOLIDWORKS by clicking the required command.

* Run the macro. Form with list is displayed
* Perform the required action (i.e. click button or menu item)
* Command id is recorded and displayed in the list

![Capturing sketch hide command id](capturing-hide-command-id.png){ width=350 }

The command id can be looked up in the the [commands list](https://help.solidworks.com/2012/english/api/swcommands/solidworks.interop.swcommands~solidworks.interop.swcommands.swcommands_e.html)

![Hide sketch command id in swCommands_e enumeration](sw-commands-id.png){ width=350 }

> It is not required to explicitly use [swCommands_e](https://help.solidworks.com/2012/english/api/swcommands/solidworks.interop.swcommands~solidworks.interop.swcommands.swcommands_e.html) enumeration as it is defined in another interop (*solidworks.interop.swcommands.dll*). Instead command id can be defined as an integer or custom enumeration.

## Capturing commands from the custom add-ins

For the standard SOLIDWORKS commands, User Command argument will be equal to 0. However commands cannot be defined for any custom add-in or [Macro Buttons](/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/)

If this command is clicked, the command id would be equal to one of the following:

![User specific command ids](user-commands.png){ width=450 }

Command would indicate the type of the button (minimized toolbar, menu, macro button etc.), and the User Command Id will be equal to the user id of a custom button. This is a command user id which can be retrieved via [ICommandGroup::CommandId](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICommandGroup~CommandID.html) property while creating the custom commands manager in the SOLIDWORKS add-in.

![Capturing the commands from the custom add-in](capturing-user-command-id.png){ width=250 }

## Creating macro

* Add User Form module to the macro and name it *CommandsMonitorForm*

![VBA project structure](vba-macro-project.png){ width=450 }

* Drag-n-drop the List Box control onto the form and name it *lstLog*

![Adding list box control to the form](add-list-box-control.png){ width=450 }

* Add the code to corresponding modules

**Macro**

~~~ vb
Sub main()
    CommandsMonitorForm.Show vbModeless
End Sub
~~~



**CommandsMonitorForm**

~~~ vb
Dim WithEvents swApp As SldWorks.SldWorks

Private Sub UserForm_Initialize()
    Set swApp = Application.SldWorks
End Sub

Private Function swApp_CommandOpenPreNotify(ByVal Command As Long, ByVal UserCommand As Long) As Long
    lstLog.AddItem "Command: " & Command & "; User Command:" & UserCommand
End Function
~~~



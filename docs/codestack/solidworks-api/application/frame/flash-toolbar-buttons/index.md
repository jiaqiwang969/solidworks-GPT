---
caption: Flash Toolbar Buttons
title: Macro to highlight/flash specific buttons in SOLIDWORKS toolbar
description: VBA macro demonstrates how to highlight/flash specific toolbar button by id in SOLIDWORKS toolbar
image: flash-buttons.gif
---
This VBA macro demonstrates how to flash standard toolbar buttons in SOLIDWORKS toolbars similarly to SOLIDWORKS tutorials files.

![Flashing sketch line command](flash-buttons.gif)

In order to flash toolbar it is required to find its id. Follow the [Calling Windows Commands](https://blog.codestack.net/missing-solidworks-api-command#calling-windows-command) section of the blog post for the instruction of how retrieve this id.

> Note, the id of command is persistent across SOLIDWORKS sessions and releases.

Unlike standard commands, custom commands added with [SOLIDWORKS add-ins](/docs/codestack/solidworks-api/getting-started/add-ins/) are not persistent across different installations. In order to dynamically retrieve the id of the custom command, use [ISldWorks::GetCommandID](https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks~GetCommandID.html) API and pass persistent **command user id** and guid of the add-in.

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    'flash line button and show tooltip
    FlashToolbarButton 32873
    
    'only show tooltip for a new file button
    FlashToolbarButton 57600, True
    
End Sub

Sub FlashToolbarButton(buttonId As Long, Optional tooltipOnly As Boolean = False)
    
    swApp.ShowBubbleTooltip buttonId, IIf(tooltipOnly, "", CStr(buttonId)), 0, "", ""
    
End Sub
~~~


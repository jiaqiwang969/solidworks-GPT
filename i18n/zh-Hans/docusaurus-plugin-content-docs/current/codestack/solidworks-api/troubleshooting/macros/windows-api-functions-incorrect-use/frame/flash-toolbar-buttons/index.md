---
caption: Flash Toolbar Button
title:  Macro to Highlight/Flash Specific Button in SOLIDWORKS Toolbar
---
 This VBA macro demonstrates how to highlight/flash a specific toolbar button in SOLIDWORKS toolbar by its id.
image: flash-buttons.gif
---
This VBA macro demonstrates how to highlight/flash a specific toolbar button in SOLIDWORKS toolbar similar to how it is done in SOLIDWORKS tutorial files.

![Flash Sketch Line Command](flash-buttons.gif)

To flash a toolbar, you need to find its id. Please refer to the [Calling Windows Command](https://blog.codestack.net/missing-solidworks-api-command#calling-windows-command) section in the blog post for instructions on how to obtain this id.

> Note that the id of the command is persistent across SOLIDWORKS sessions and versions.

Unlike standard commands, custom commands added using [SOLIDWORKS Add-ins](/docs/codestack/solidworks-api/getting-started/add-ins/) are not persistent across different installations. To dynamically obtain the id of a custom command, use the [ISldWorks::GetCommandID](https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks~GetCommandID.html) API and pass the persistent **command user id** and the guid of the add-in.

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    'Flash the line button and show tooltip
    FlashToolbarButton 32873
    
    'Show tooltip only for the new file button
    FlashToolbarButton 57600, True
    
End Sub

Sub FlashToolbarButton(buttonId As Long, Optional tooltipOnly As Boolean = False)
    
    swApp.ShowBubbleTooltip buttonId, IIf(tooltipOnly, "", CStr(buttonId)), 0, "", ""
    
End Sub
~~~
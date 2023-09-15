---
title:  Select all suppressed components in the assembly using SOLIDWORKS API
caption: Select All Suppressed Components
---
 VBA macro which runs the 'Component Selection - Select Suppressed' command in assembly document to select all assembly components in a batch
image: select-suppressed-components.png
labels: [command,suppressed,components]
---
This VBA macro allows to select all suppressed components in the active SOLIDWORKS assembly in a batch using SOLIDWORKS and Windows API.

This executes the *Select Suppressed* command of *Component Selection* menu

![Select Suppressed command for components](select-suppressed-components.png){ width=500 }

This is preferable option of selecting all suppressed components over the [traversing components](/docs/codestack/solidworks-api/document/assembly/components/traversing-tree) one-by-one due to the performance benefits.

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
    
    If Not swAssy Is Nothing Then
        SelectSuppressedComponents
    Else
       MsgBox "Please open assembly"
    End If
     
End Sub

Sub SelectSuppressedComponents()
    
    Const WM_COMMAND As Long = &H111
    Const CMD_SELECT_SUPPRESSED_COMPS As Long = 54409
    
    Dim swFrame As SldWorks.Frame
        
    Set swFrame = swApp.Frame
        
    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_SELECT_SUPPRESSED_COMPS, 0

End Sub
~~~


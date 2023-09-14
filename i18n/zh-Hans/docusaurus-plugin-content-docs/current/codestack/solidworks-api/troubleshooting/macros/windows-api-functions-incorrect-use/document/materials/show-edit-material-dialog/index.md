---
title: Show Edit Material dialog using SOLIDWORKS API
caption: Show Edit Material Dialog
description: VBA macro which opens the Edit Material dialog in SOLIDWORKS part documents using SOLIDWORKS API and Windows API
image: edit-material-command.png
labels: [edit material]
---
![Edit material menu command in SOLIDWORKS part](edit-material-command.png){ width=350 }

This VBA macro opens the 'Edit Material' dialog to assign or change the material of active SOLIDWORKS part document using the combination of SOLIDWORKS API and Windows API.

~~~ vb
#If VBA7 Then
     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#Else
     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#End If

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        If swModel.GetType() = swDocumentTypes_e.swDocPART Then
        
            Const WM_COMMAND As Long = &H111
            Const EDIT_MATERIAL As Long = 59526
            
            Dim swFrame As SldWorks.Frame
            
            Set swFrame = swApp.Frame
            
            SendMessage swFrame.GetHWnd(), WM_COMMAND, EDIT_MATERIAL, 0
        
        End If
        
    End If
    
End Sub
~~~



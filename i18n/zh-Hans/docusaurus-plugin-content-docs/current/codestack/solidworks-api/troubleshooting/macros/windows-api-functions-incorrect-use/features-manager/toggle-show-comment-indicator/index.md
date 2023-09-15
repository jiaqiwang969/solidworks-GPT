---
title: 使用SOLIDWORKS API切换显示注释指示器选项
caption: 切换显示注释指示器选项
description: 使用SOLIDWORKS API和Windows API切换特征管理器树中的“显示注释指示器”选项的VBA宏
image: show-comment-indicator-command.png
labels: [winapi,comments]
---
![显示注释指示器命令](show-comment-indicator-command.png){ width=350 }

这个VBA宏使用SOLIDWORKS API和Windows API的组合来切换特征管理器树中的“显示注释指示器”选项，这个选项目前在SOLIDWORKS API中不可用。

~~~ vb
#If VBA7 Then
     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#Else
     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#End If

Dim swApp As SldWorks.SldWorks

Sub main()

    Const WM_COMMAND As Long = &H111
    Const SHOW_COMMENT_INDICATOR As Long = 56000
    
    Set swApp = Application.SldWorks
        
    Dim swFrame As SldWorks.Frame
    
    Set swFrame = swApp.Frame
    
    SendMessage swFrame.GetHWnd(), WM_COMMAND, SHOW_COMMENT_INDICATOR, 0
    
End Sub
~~~
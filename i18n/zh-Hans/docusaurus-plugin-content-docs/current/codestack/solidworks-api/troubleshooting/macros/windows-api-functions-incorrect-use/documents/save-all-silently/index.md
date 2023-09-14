---
layout: sw-tool
title: 使用SOLIDWORKS API静默保存所有打开的文档的宏
caption: 静默保存所有文档
description: 使用SOLIDWORKS API的VBA宏，静默保存当前打开的所有已修改文档（无弹出消息）
image: save-all-documents.png
labels: [保存全部,静默]
group: 框架
---
这个VBA宏允许使用SOLIDWORKS API静默保存当前打开和修改的所有文档。与默认的另存为命令不同，该宏在保存文件时不会显示各种警告消息。

![保存文件时的旧版本警告](older-version-save-warning.png){ width=350 }

可以配置宏以显示错误（如果某些文件未正确保存）或保持静默。

~~~ vb
Const SHOW_ERROR As Boolean = False 'True表示在出现错误时显示消息框，False表示保持静默
~~~

操作的结果将显示在状态栏中。

![在状态栏中显示的结果](status-bar.png)

此宏可用作后台集成的一部分，其中不应显示模态对话框。

~~~ vb
Const SHOW_ERROR As Boolean = False

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swFrame As SldWorks.Frame
    Set swFrame = swApp.Frame()
    
    Dim vModelWnds As Variant
    vModelWnds = swFrame.ModelWindows
    
    If Not IsEmpty(vModelWnds) Then
        
        Dim i As Integer
        
        Dim savedCount As Integer
        Dim failedCount As Integer
        savedCount = 0
        failedCount = 0
        
        For i = 0 To UBound(vModelWnds)
            
            Dim swModelWnd As SldWorks.ModelWindow
            Set swModelWnd = vModelWnds(i)
            Dim swModel As SldWorks.ModelDoc2
            Set swModel = swModelWnd.ModelDoc
            
            If swModel.GetSaveFlag() Then
                
                Dim errs As Long
                Dim warns As Long
                
                If False = swModel.Save3(swSaveAsOptions_e.swSaveAsOptions_Silent, errs, warns) Then
                    failedCount = failedCount + 1
                    Debug.Print "无法保存 " & swModel.GetTitle() & ": " & errs
                Else
                    savedCount = savedCount + 1
                    Debug.Print "已保存 " & swModel.GetTitle
                End If
                
            End If
            
        Next
        
        swFrame.SetStatusBarText "已保存 " & savedCount & " 个文档。失败: " & failedCount & " 个文档"
        
        If failedCount > 0 And SHOW_ERROR Then
            swApp.SendMsgToUser2 "一些文件未能自动保存", swMessageBoxIcon_e.swMbWarning, swMessageBoxBtn_e.swMbOk
        End If
        
    End If
    
End Sub
~~~
---
layout: sw-tool
title: 使用SOLIDWORKS API通知长时间运行的SOLIDWORKS命令的完成
caption: 通知长时间运行命令的完成
description: 使用SOLIDWORKS API处理SOLIDWORKS中的长时间运行命令（打开、重建、抑制等），并发出蜂鸣声以通知其完成
image: command-progress.svg
labels: [事件,性能,通知,命令]
group: 性能
---
![在SOLIDWORKS中打开大型装配文件](opening-file-progressbar.png){ width=450 }

这个VBA宏将使用SOLIDWORKS API监听SOLIDWORKS命令（例如打开、重建、抑制、解析等），并通过将执行时间与用户指定的延迟时间进行匹配来识别长时间运行的命令。如果命令运行时间超过此时间段，则会播放蜂鸣信号，通知用户命令已完成。如果命令执行速度较快，则不会播放声音。

当处理大型模型时，这可能非常有用，因为在执行命令时可以切换屏幕或执行其他活动，并在操作完成后得到通知，而无需不断监视进度。

## 运行说明

* 创建新的宏并添加以下代码

~~~ vb
Const MIN_DELAY As Integer = 5

Dim swCmdsListener As CommandsListener

Sub main()

    Set swCmdsListener = New CommandsListener
    swCmdsListener.MinimumDelay = MIN_DELAY
    
End Sub
~~~



* 通过更改*MIN_DELAY*常量的值来指定命令的最小延迟时间（以秒为单位）
* 创建新的类模块并将其命名为*CommandsListener*。将以下代码粘贴到类模块中：
* 启动宏。要在每个SOLIDWORKS会话中自动启动宏，请参阅[在SOLIDWORKS启动时自动运行SOLIDWORKS宏](/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/)文章。

~~~ vb
Dim WithEvents swApp As SldWorks.SldWorks

Dim IsCommandStarted As Boolean
Dim StartCommand As Long
Dim StartCommandTimeStamp As Date

Public MinimumDelay As Double

Private Sub Class_Initialize()
    Set swApp = Application.SldWorks
End Sub

Private Function swApp_CommandOpenPreNotify(ByVal Command As Long, ByVal UserCommand As Long) As Long
    IsCommandStarted = True
    StartCommand = Command
    StartCommandTimeStamp = Now
    swApp_CommandOpenPreNotify = 0
End Function

Private Function swApp_CommandCloseNotify(ByVal Command As Long, ByVal reason As Long) As Long
    
    If IsCommandStarted And Command = StartCommand Then
    
        IsCommandStarted = False
    
        Dim diff As Integer
        diff = CInt(DateDiff("s", StartCommandTimeStamp, Now))
        
        Debug.Print diff
        
        If diff >= MinimumDelay Then
            Beep
        End If
        
    End If
    
    swApp_CommandCloseNotify = 0
    
End Function
~~~
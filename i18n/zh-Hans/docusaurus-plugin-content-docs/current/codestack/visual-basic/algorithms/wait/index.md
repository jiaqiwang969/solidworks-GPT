---
title:  Visual Basic 中的阻塞和非阻塞等待函数
caption: 等待
---
 Visual Basic 中用于等待指定时间的阻塞或非阻塞函数
---
这段代码演示了如何暂停执行指定的时间（以毫秒为单位）。

函数可以是阻塞的或非阻塞的（使用 DoEvents）。

```vb
#If VBA7 Then
    Declare PtrSafe Sub Sleep Lib "kernel32" (ByVal dwMilliseconds As LongPtr)
#Else
    Declare Sub Sleep Lib "kernel32" (ByVal dwMilliseconds as Long) 'For 32 Bit Systems
#End If

Sub main()

    Debug.Print Now
    Wait 20000, False
    Debug.Print Now

End Sub

Sub Wait(period As Long, blocked As Boolean)

    If blocked Then
        Sleep period
    Else
        Const STEP As Long = 100
        
        If period > STEP Then
            
            Dim i As Long
            
            For i = 0 To period Step STEP
                Sleep STEP
                DoEvents
            Next
            
        Else
            Sleep period
        End If
        
    End If

End Sub
```


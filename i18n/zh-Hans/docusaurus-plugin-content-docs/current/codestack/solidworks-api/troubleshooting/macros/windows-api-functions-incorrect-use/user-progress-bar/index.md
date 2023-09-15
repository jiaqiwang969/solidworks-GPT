---
title: 在SOLIDWORKS API中使用进度条处理长时间操作进度
caption: 用户进度条
description: 在SOLIDWORKS API中使用用户进度条显示长时间操作进度
image: taskbar-progress.png
labels: [progress,user progress bar,background]
---

为了改善宏或插件的用户体验，建议在执行长时间的SOLIDWORKS API操作时显示和更新进度条。

SOLIDWORKS API提供了一种内置方法，在主线程被锁定时（即在进程中执行操作）显示进度。可以通过[IUserProgressBar](https://help.solidworks.com/2017/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserProgressBar.html) SOLIDWORKS API接口来处理消息和进度。

消息和进度会显示在应用程序左下角的标准SOLIDWORKS进度条中。

![在进度条中显示消息和进度](user-progress-bar.png)

进度也会反映在任务栏中的SOLIDWORKS图标中。

![在任务栏中的SOLIDWORKS图标中显示进度](taskbar-progress.png)

## 注意事项和限制

* 进度值和消息可以被SOLIDWORKS的标准进度消息覆盖（例如重建操作、文件加载等）。

## 运行宏

* 打开具有实体的零件文档
* 宏遍历每个实体的所有面，并对每个面执行数据提取操作
* 操作将根据*ITERATIONS_COUNT*常量重复执行
* 显示进度条
* 按ESC键可以选择取消操作

~~~ vb
Const ITERATIONS_COUNT As Integer = 1000

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If TypeOf swModel Is SldWorks.PartDoc Then
        
        Dim swPart As SldWorks.PartDoc
        Set swPart = swModel
        Dim vBodies As Variant
        vBodies = swPart.GetBodies2(swBodyType_e.swAllBodies, False)
            
        If Not IsEmpty(vBodies) Then
            PerformOperation vBodies
        Else
            MsgBox "此零件中没有实体"
        End If
            
    Else
        MsgBox "请打开零件文档"
    End If
    
End Sub

Sub PerformOperation(bodies As Variant)
    
    Dim swPrgBar As SldWorks.UserProgressBar
    swApp.GetUserProgressBar swPrgBar
    
    swPrgBar.Start 0, GetProgressBarUpperBound(bodies), "正在处理面的操作"
    
    Dim i As Integer
    
    Dim pos As Long
    pos = 0
    
    For i = 0 To UBound(bodies)
        
        Dim swBody As SldWorks.Body2
        Set swBody = bodies(i)
        
        Dim vFaces As Variant
        vFaces = swBody.GetFaces()
        
        swPrgBar.UpdateTitle "正在处理 " & swBody.Name & "，共有 " & UBound(vFaces) + 1 & " 个面"
        
        Dim j As Integer
        
        For j = 0 To UBound(vFaces)
            
            Dim k As Integer
            
            For k = 0 To ITERATIONS_COUNT
                
                pos = pos + 1
                
                Dim swFace As SldWorks.Face2
                Set swFace = vFaces(j)
                
                Dim swSurf As SldWorks.Surface
                Set swSurf = swFace.GetSurface()
                    
                swSurf.EvaluateAtPoint 0, 0, 0
                swSurf.GetClosestPointOn 0, 0, 0
                
                If swUpdateProgressError_e.swUpdateProgressError_UserCancel = swPrgBar.UpdateProgress(pos) Then
                    If swApp.SendMsgToUser2("取消操作？", swMessageBoxIcon_e.swMbWarning, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes Then
                        swPrgBar.End
                    End If
                End If
                
            Next
        Next
        
    Next
    
End Sub

Function GetProgressBarUpperBound(bodies As Variant) As Long
    
    Dim totalFaceCount As Long
    
    Dim i As Integer
    
    For i = 0 To UBound(bodies)
        Dim swBody As SldWorks.Body2
        Set swBody = bodies(i)
        totalFaceCount = swBody.GetFaceCount()
    Next
    
    GetProgressBarUpperBound = totalFaceCount * ITERATIONS_COUNT
    
End Function
~~~
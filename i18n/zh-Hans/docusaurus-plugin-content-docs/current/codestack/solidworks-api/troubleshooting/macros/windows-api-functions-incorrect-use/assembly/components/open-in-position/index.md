---
layout: sw-tool
title:  在新窗口中打开所有选定的组件位置
caption: 在位置中打开组件
---
 VBA宏，将装配体中的每个选定组件在单独的窗口中以与其在当前装配体视图中出现的位置相同的方式打开
image: open-in-position.svg
labels: [位置,组件]
group: 装配体
---

这个VBA宏会在当前活动装配体中以与其在原始SOLIDWORKS装配体中出现的位置相同的方式打开所有选定的组件。

这个宏模拟了SOLIDWORKS工具栏中的“以位置打开零件”命令，但允许同时打开多个选定的组件。

![以位置打开零件命令](open-part-in-position-command.png){ width=250 }

~~~ vb
Dim swApp As SldWorks.SldWorks
    
Sub main()
 
    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc

    Set swAssy = swApp.ActiveDoc
    
try:
    
    On Error GoTo catch
    
    If Not swAssy Is Nothing Then
    
        Dim swSelMgr As SldWorks.SelectionMgr
       
        Set swSelMgr = swAssy.SelectionManager
        
        Dim i As Integer
        
        Dim hasCompSel As Boolean
        hasCompSel = False
        
        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
        
            Dim swComp As SldWorks.Component2
        
            Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)
        
            If Not swComp Is Nothing Then
             
                hasCompSel = True
                
                Dim swCompTransform As SldWorks.MathTransform
                Dim swViewTransform As SldWorks.MathTransform
                Dim swTotalTransform As SldWorks.MathTransform
             
                Set swCompTransform = swComp.Transform2
             
                Set swViewTransform = swAssy.ActiveView.Orientation3
             
                Set swTotalTransform = swCompTransform.Multiply(swViewTransform)
                
                OpenComponentWithTransforms swComp, swTotalTransform
                
            End If
            
        Next
        
        If Not hasCompSel Then
            Err.Raise vbError, , "未选择任何组件"
        End If
        
    Else
        Err.Raise vbError, , "请打开装配体"
    End If
    
    GoTo finally
catch:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally:

End Sub

Sub OpenComponentWithTransforms(comp As SldWorks.Component2, transform As SldWorks.MathTransform)
    
    Dim swRefModel As SldWorks.ModelDoc2
    
    Dim swDocSpec As SldWorks.DocumentSpecification
    Set swDocSpec = swApp.GetOpenDocSpec(comp.GetPathName())
    
    swDocSpec.Silent = True
    Set swRefModel = swApp.OpenDoc7(swDocSpec)
    
    Dim errs As Long
    Dim warns As Long
    
    If Not swRefModel Is Nothing Then
        
        If Not swApp.ActiveDoc Is swRefModel Then
            
            Set swRefModel = swApp.ActivateDoc3(swRefModel.GetTitle(), False, swRebuildOnActivation_e.swUserDecision, errs)
            
            If swRefModel Is Nothing Then
                Err.Raise vbError, , "无法激活引用文档。错误代码：" & errs
            End If
        End If
        
        Dim swView As SldWorks.ModelView
        Set swView = swRefModel.ActiveView
        swView.Orientation3 = transform
        swRefModel.ViewZoomtofit2
        
    Else
        Err.Raise vbError, , "无法打开引用文档。错误代码：" & swDocSpec.Error
    End If

End Sub
~~~
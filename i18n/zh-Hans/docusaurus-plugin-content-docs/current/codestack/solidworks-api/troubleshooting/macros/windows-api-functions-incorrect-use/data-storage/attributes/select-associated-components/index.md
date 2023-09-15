---
title: 使用SOLIDWORKS API选择与属性关联的组件
caption: 选择与选择关联的组件
description: 该示例通过[NewSelectionNotify](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_newselectionnotifyeventhandler.html)通知，将附加到活动装配体的选择SOLIDWORKS API事件。

如果选择了属性并且有与该属性关联的组件，则该组件将在树中被选中。

一旦活动装配体关闭，宏将停止运行。

*宏模块*

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swEventsListener As EventsListener

Sub main()

    Set swApp = Application.SldWorks

    Set swEventsListener = New EventsListener
        
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    swEventsListener.SetAssembly swAssy
    
    While swApp.ActiveDoc Is swAssy
        DoEvents
    Wend
        
End Sub

~~~



*EventsListener类*

~~~ vb
Dim swModel As SldWorks.ModelDoc2
Dim WithEvents swAssy As SldWorks.AssemblyDoc
Dim swSelMgr As SldWorks.SelectionMgr

Private Function swAssy_NewSelectionNotify() As Long
    
    Dim swFeat As SldWorks.Feature
    Dim swAtt As SldWorks.Attribute
    Dim swComp As SldWorks.Component2

    Dim i As Integer
    
    i = swSelMgr.GetSelectedObjectCount2(-1)
    
    If i > 0 Then
        
        On Error Resume Next
        
        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)
        
        If Not swFeat Is Nothing Then
        
            If swFeat.GetTypeName2 = "Attribute" Then
            
                Set swAtt = swFeat.GetSpecificFeature2
            
                Set swComp = swAtt.GetComponent()
            
                swComp.Select4 True, Nothing, False
                
            End If
            
        End If
        
    End If
    
    Set swFeat = Nothing
    
End Function

Sub SetAssembly(assy As SldWorks.AssemblyDoc)
        
    Set swAssy = assy
    
    Set swModel = swAssy
        
    Set swSelMgr = swModel.SelectionManager
       
End Sub


~~~
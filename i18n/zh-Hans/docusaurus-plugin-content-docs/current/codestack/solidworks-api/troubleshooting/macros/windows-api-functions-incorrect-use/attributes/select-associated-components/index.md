---
title: Select components associated with attributes using SOLIDWORKS API
caption: Select The Components Associated With Attributes On Select
description: Example attaches to the selection events of the active assembly
labels: [attribute, component, data, example, selection, solidworks api]
redirect-from:
  - /2018/03/select-components-associated-with.html
---
This example attaches to the selection SOLIDWORKS API events of the active assembly via [NewSelectionNotify](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_newselectionnotifyeventhandler.html) notification.

If the attribute is selected and there is a component associated with this attribute - this component will be selected in the tree.  

Macro will stop once the active assembly is closed.  

*Macro module*

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



*EventsListener class*

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


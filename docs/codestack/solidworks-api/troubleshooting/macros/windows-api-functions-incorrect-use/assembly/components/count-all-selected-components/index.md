---
layout: sw-tool
title: count all selected components using SOLIDWORKS API
caption: Count All Selected Components
description: Macro counts all unique components selected in the assembly and displays the result in the commands bar
image: status-bar-selected-comps.png
labels: [assembly, count components, solidworks api, status bar, utility]
group: Assembly
redirect-from:
  - /2018/03/solidworks-api-assembly-count-selected-components.html
  - /solidworks-api/document/assembly/count-all-selected-components
---
This macro counts all unique components selected in the assembly using SOLIDWORKS API. Components can be either selected in the features manager tree or in the graphics area.

Macro will also count component if only entity of the component is selected (e.g. face or edge) using [ISelectionMgr](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr.html) SOLIDWORKS API Interface..

![Quantity of selected components displayed in the status bar](status-bar-selected-comps.png){ width=320 }

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swAssy As SldWorks.AssemblyDoc

Sub main()

    Set swApp = Application.SldWorks
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
            
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swAssy.SelectionManager
        
        Dim swCompsColl As Collection
        Set swCompsColl = New Collection
        
        Dim i As Integer
        
        For i = 0 To swSelMgr.GetSelectedObjectCount2(-1)
            
            Dim swComp As SldWorks.Component2
            Set swComp = swSelMgr.GetSelectedObjectsComponent2(i)
            
            If Not swComp Is Nothing Then
                If Not Contains(swCompsColl, swComp) Then 'get only unique components
                    swCompsColl.Add swComp
                End If
            End If
            
        Next
        
        Dim swFrame As SldWorks.Frame
        Set swFrame = swApp.Frame
        swFrame.SetStatusBarText "Selected " & swCompsColl.Count() & " component(s)"
    
    Else
        MsgBox "Please open assembly"
    End If
    
End Sub

Function Contains(coll As Collection, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 1 To coll.Count
        If coll.item(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function

~~~



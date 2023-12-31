---
title:  Get and select all visible components in assembly using SOLIDWORKS API
caption: Get And Select Visible Components Only
---
 VBA macro example to get and select all visible components (not suppressed and not hidden) using SOLIDWORKS API
image: components-tree.png
labels: [components,suppressed,hidden,select]
---
![Components selected in the feature manager tree](components-tree.png){ width=350 }

This VBA macro gets all the pointers to the visible (not suppressed and not hidden) components in the active assembly. All the components are selected using multi-select SOLIDWORKS API.

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        Dim vComps As Variant
        vComps = GetVisibleComponents(swAssy, False)
        swAssy.Extension.MultiSelect2 vComps, False, Nothing
    Else
        MsgBox "Please open assembly document"
    End If
    
End Sub

Function GetVisibleComponents(assy As SldWorks.AssemblyDoc, topLevelOnly As Boolean) As Variant
    
    Dim swVisComps() As SldWorks.Component2
    Dim isInit As Boolean
    isInit = False
    
    Dim vComps As Variant
    vComps = assy.GetComponents(topLevelOnly)
    
    Dim i As Integer
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
        
        If False = swComp.IsSuppressed() And IsVisible(swComp) Then
            
            If Not isInit Then
                ReDim swVisComps(0)
                isInit = True
            Else
                ReDim Preserve swVisComps(UBound(swVisComps) + 1)
            End If
            
            Set swVisComps(UBound(swVisComps)) = swComp
        
        End If
        
    Next
    
    GetVisibleComponents = swVisComps
    
End Function

Function IsVisible(comp As SldWorks.Component2) As Boolean
    
    Dim swThisComp As SldWorks.Component2
    Set swThisComp = comp
    
    While Not swThisComp Is Nothing
        If swThisComp.Visible = swComponentVisibilityState_e.swComponentHidden Then
            IsVisible = False
            Exit Function
        End If
        Set swThisComp = swThisComp.GetParent
    Wend
    
    IsVisible = True
    
End Function
~~~


---
caption: Traverse Feature Tree Reversed
title: Traverse SOLIDWORKS feature manager tree in the reversed order
description: VBA macro to traverse feature manager tree in SOLIDWORKS document in the reversed order
---

This VBA macro demonstrates how to traverse feature manager tree of the active SOLIDWORKS document in the reversed order.

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    Dim i As Integer
    
    i = 0
    
    Dim swFeat As SldWorks.Feature
    
    Do
        
        Set swFeat = swModel.FeatureByPositionReverse(i)
        i = i + 1
        
        If Not swFeat Is Nothing Then
            Debug.Print swFeat.Name
        End If
        
    Loop While Not swFeat Is Nothing
    
End Sub
~~~


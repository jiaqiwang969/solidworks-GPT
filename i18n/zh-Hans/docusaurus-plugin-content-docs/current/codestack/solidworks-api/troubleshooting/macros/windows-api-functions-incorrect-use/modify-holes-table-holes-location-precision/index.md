---
title: Modify location precision of holes in holes table using SOLIDWORKS API
caption: Modify Holes Table Holes Location Precision
description: Example demonstrates how to change the precision for the hole locations in the selected Hole Table
image: sw-hole-table.png
labels: [drawing, example, hole table, precision, solidworks api]
redirect-from:
  - /2018/04/solidworks-api-drawing-hole-table-holes-location-precision.html
---
This example demonstrates how to change the precision for the hole locations in the selected Hole Table using SOLIDWORKS API.

![Holes Table](sw-hole-table.png){ width=320 height=95 }

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr

Sub main()
    
    On Error Resume Next
    
    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Set swSelMgr = swModel.SelectionManager
        
        Dim swHoleTableAnn As SldWorks.HoleTableAnnotation

        Set swHoleTableAnn = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swHoleTableAnn Is Nothing Then
                        
            Dim swHoleTable As SldWorks.HoleTable
            
            Set swHoleTable = swHoleTableAnn.HoleTable
                
            swHoleTable.SetHoleLocationPrecision False, 3
                
        Else
            MsgBox "Please select hole table"
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub
~~~



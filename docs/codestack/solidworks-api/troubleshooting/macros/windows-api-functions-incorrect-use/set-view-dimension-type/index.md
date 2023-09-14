---
caption: Set View Dimension Type
title: Macro to set dimension type for all views in the active SOLIDWORKS drawing
description: VBA macro which sets dimension type (projected or true) for all drawing view in the active SOLIDWORKS drawing document
image: view-dimension-type.png
---
![View dimension type](view-dimension-type.png)

This VBA macros sets the dimension type (projected or true) for all drawing views in all sheets of the active SOLIDWORKS drawing.

Set the **DIMS_TRUE** constant to **True** to set all dimension types to **True**. Set the **DIMS_TRUE** constant to **False** to set all dimension types to **Projected**

~~~ vb
Const DIMS_TRUE As Boolean = False

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
    
    Set swDraw = swApp.ActiveDoc
    
    If Not swDraw Is Nothing Then
        
        Dim vSheets As Variant
        vSheets = swDraw.GetViews
        
        If Not IsEmpty(vSheets) Then
            
            Dim i As Integer
            
            For i = 0 To UBound(vSheets)
            
                Dim vViews As Variant
                vViews = vSheets(i)
                
                Dim j As Integer
                
                For j = 1 To UBound(vViews)
                    Dim swView As SldWorks.View
                    Set swView = vViews(j)
                    
                    swView.ProjectedDimensions = Not DIMS_TRUE
                Next
            
            Next
            
        End If
        
    Else
        Err.Raise vbError, "", "Open drawing"
    End If
    
End Sub
~~~


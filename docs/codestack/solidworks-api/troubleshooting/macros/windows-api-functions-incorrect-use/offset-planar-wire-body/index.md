---
title: Offset planar curve (wire body) using SOLIDWORKS API
caption: Offset Planar Wire Body
description: VBA macro example to offset planar curve (wire body) and display the offset preview using SOLIDWORKS API
image: offset-wire-body.png
labels: [body,wire,offset]
---
This VBA example demonstrates how to offset the wire body of the SOLIDWORKS curve and display the preview using SOLIDWORKS API.

Wire bodies are type of bodies which correspond to edges and curves.

Wire bodies are used in the features such as composite curve, curve through XYZ, etc. Those bodies are also used to generate some types of previews, e.g. preview of the fillet feature

![Fillet preview](fillet-preview.png){ width=350 }

To run this example

* Create a composite curve (or other type of the curve) on the Front plane, i.e. the normal is {0, 0, 1}
* Run the macro. Macro extracts the body from the selected curve. This body would be a wire body. Macro offsets this body by 10 mm and displays the preview of the offset.
* Macro stops execution. Once continued the temp body is destroyed

![Offset wire body](offset-wire-body.png){ width=450 }

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        Dim swEdge As SldWorks.Edge
        Set swEdge = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swEdge Is Nothing Then
        
            Dim swBody As SldWorks.Body2
            Set swBody = swEdge.GetBody()
            
            If swBody.GetType() = swBodyType_e.swWireBody Then
                
                Dim swOffsetBody As SldWorks.Body2
                Dim swNormVec As SldWorks.MathVector
                
                Dim swMathUtils As SldWorks.MathUtility
                Set swMathUtils = swApp.GetMathUtility
                
                Dim dVec(2) As Double
                dVec(0) = 0: dVec(1) = 0: dVec(2) = 1
                
                Set swNormVec = swMathUtils.CreateVector(dVec)
                
                Set swOffsetBody = swBody.OffsetPlanarWireBody(0.01, swNormVec, swOffsetPlanarWireBodyOptions_e.swOffsetPlanarWireBodyOptions_GapFillExtend)
                
                If swOffsetBody Is Nothing Then
                    Err.Raise vbError, "", "Failed to create offset body. Make sure that selected edge is on a plane with the normal specified in dVec variable"
                End If
                
                swOffsetBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
                
                Stop
                
                Set swOffsetBody = Nothing
                
            Else
                Err.Raise vbError, "", "Selected edge is not a wire body"
            End If
        
        Else
            Err.Raise "Edge is not selected"
        End If
        
    Else
        Err.Raise "Document is not open"
    End If
    
End Sub
~~~



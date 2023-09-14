---
layout: article
caption: Find Specific Edge In Drawing View
title: Find and select specific edge in the drawing view using SOLIDWORKS API
description: VBA macro to find and select specific edge from the underlying model in the drawing view using SOLIDWORKS API
image: selected-edge.png
---
This VBA macro demonstrates how to find the specific named edge from the underlying 3D document and select it in the drawing view.

This technique can be used when developing drawing automation macros and applications.

> Note in your macro you might not use named entities, instead some different logic can be applied (e.g. finding by coordinates, color, attributes etc.). However the process of conversion the pointer to drawing view space will be the same.

This macro will work with the drawing view of the assembly where named edge is contained in the top level component as shown below:

![Edge selected in the drawing view](selected-edge.png)

> Refer [Get Component By Name](/docs/codestack/solidworks-api/document/assembly/components/get-by-name/) example for the code to get component on any level if needed.

Name of the edge needs to be assigned from the corresponding part document.

![Name of the edge assigned in the part](edge-name.png)

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
        
    Set swDraw = swApp.ActiveDoc
    
    Dim swView As SldWorks.view
    Set swView = swDraw.FeatureByName("Drawing View1").GetSpecificFeature()
    
    Dim swEdge As SldWorks.edge
    Set swEdge = FindEdge(swDraw, swView, "Part1-1", "MyEdge")
    
    Debug.Print swView.SelectEntity(swEdge, False)
    
End Sub

Function FindEdge(draw As SldWorks.DrawingDoc, view As SldWorks.view, compName As String, edgeName As String) As SldWorks.edge
    
    Dim swAssy As SldWorks.AssemblyDoc
    Set swAssy = view.ReferencedDocument
    
    Dim swComp As SldWorks.Component2
    Set swComp = swAssy.GetComponentByName(compName)
    
    Dim swRefPart As SldWorks.PartDoc
    Set swRefPart = swComp.GetModelDoc2
    
    Dim swEdge As SldWorks.edge
    Set swEdge = swRefPart.GetEntityByName(edgeName, swSelectType_e.swSelEDGES)
    
    Set swEdge = swComp.GetCorresponding(swEdge)
    
    Set FindEdge = swEdge
    
End Function
~~~


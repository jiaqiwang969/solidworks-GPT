---
layout: article
caption: 在绘图视图中查找特定边
title: 使用SOLIDWORKS API在绘图视图中查找和选择特定边
description: 使用SOLIDWORKS API在绘图视图中查找和选择来自底层模型的特定边的VBA宏
image: selected-edge.png
---
此VBA宏演示了如何从底层3D文档中查找特定命名的边，并在绘图视图中选择它。

这种技术可用于开发绘图自动化宏和应用程序。

> 注意，在您的宏中，您可能不会使用命名实体，而是可以应用一些不同的逻辑（例如，通过坐标、颜色、属性等进行查找）。但是，将指针转换为绘图视图空间的过程是相同的。

此宏将与包含在顶层组件中的具有命名边的装配体的绘图视图一起工作，如下所示：

![在绘图视图中选择的边](selected-edge.png)

> 如果需要，可以参考[按名称获取组件](/docs/codestack/solidworks-api/document/assembly/components/get-by-name/)示例来获取任何级别上的组件的代码。

边的名称需要从相应的零件文档中分配。

![在零件中分配的边的名称](edge-name.png)

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
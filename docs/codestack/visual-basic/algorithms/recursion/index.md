---
title: Using of recursion techniques in Visual Basic
caption: Recursion
description: Explanation of recursion and usage in Visual Basic to output the structure of the Bill Of Materials (BOM)
---
In some cases it might be required to parse the hierarchical data. This is a tree-structured data which has a collection of nodes while each node may contain the collection of children, and each child can have a collection of its own children and so on. Example of hierarchical data is an XML file which contains the nodes which might have sub-nodes.

This data can be parsed using [loops](/docs/codestack/visual-basic/loops/), however this task would be complicated and code readability will be compromised. Much easier solution would be an employment of recursion technique.

This function will parse the single node (or node on a single level) and then call itself recursively to process all children nodes.

For example the following Bill Of Materials (BOM) structure represents a product.

![BOM Structure example](bom.svg){ width=350 }

This structure is described with the following class in the Visual Basic, where **Children** variable may contain children of the sub-assembly node.

## BomItem Class

~~~ vb
Public Name As String
Public Qty As Integer
Public Children As Variant
~~~



In order to output the structure the following function can be written

~~~
Sub main()
    
    Dim bom As New BomItem
    bom.Name = "A"
    bom.Qty = 1
    
    Dim bomChildren(1) As BomItem
        
    Set bomChildren(0) = New BomItem
    bomChildren(0).Name = "B"
    bomChildren(0).Qty = 2
    
    Set bomChildren(1) = New BomItem
    bomChildren(1).Name = "C"
    bomChildren(1).Qty = 3
    
    bom.Children = bomChildren
    
    Dim bomSubChildren(2) As BomItem
        
    Set bomSubChildren(0) = New BomItem
    bomSubChildren(0).Name = "D"
    bomSubChildren(0).Qty = 1
    
    Set bomSubChildren(1) = New BomItem
    bomSubChildren(1).Name = "E"
    bomSubChildren(1).Qty = 5
    
    Set bomSubChildren(2) = New BomItem
    bomSubChildren(2).Name = "F"
    bomSubChildren(2).Qty = 1
    
    bomChildren(0).Children = bomSubChildren
    
    PrintBom bom
    
End Sub

Sub PrintBom(bom As BomItem, Optional level As Integer = 0)
    
    Dim offset As String
    offset = String(level, "-")
    
    Debug.Print offset & bom.Name & " (" & bom.Qty & ")"
    
    If Not IsEmpty(bom.Children) Then
        Dim i As Integer
        For i = 0 To UBound(bom.Children)
            Dim child As BomItem
            Set child = bom.Children(i)
            PrintBom child, level + 1
        Next
    End If
    
End Sub
~~~


As the result the following information will be output to the Immediate Window of VBA Editor.

~~~
A (1)
-B (2)
--D (1)
--E (5)
--F (1)
-C (3)
~~~

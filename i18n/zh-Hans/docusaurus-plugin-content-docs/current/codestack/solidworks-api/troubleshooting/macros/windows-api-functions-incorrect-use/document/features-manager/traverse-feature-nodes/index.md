---
title:  Traverse feature manager nodes using SOLIDWORKS API
caption: Traverse Feature Nodes
---
 Example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API
image: feature-manager-tree.png
labels: [traverse, feature, node]
---
![Feature Manager Tree](feature-manager-tree.png){ width=150 }

This example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API. Nodes traversed in the exact order they are rendered in the tree and the exact text is extracted.

[ITreeControlItem](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.itreecontrolitem.html) SOLIDWORKS API interface represents the node element and allows its automation.

This macro can be useful if it is required to get the exact features hierarchy and order or get the nodes of the system features (like history, design journal etc.)

~~~ vb
Const OFFSET_SYMBOL = " "

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc

    If Not swModel Is Nothing Then
    
        Dim swFeatMgr As SldWorks.FeatureManager
        
        Set swFeatMgr = swModel.FeatureManager
        
        Dim swRootFeatNode As SldWorks.TreeControlItem
        
        Set swRootFeatNode = swFeatMgr.GetFeatureTreeRootItem2(swFeatMgrPane_e.swFeatMgrPaneBottom)
        
        If Not swRootFeatNode Is Nothing Then
            TraverseFeatureNode swRootFeatNode, ""
        End If
        
    Else
        MsgBox "Please open the model"
    End If
End Sub

Sub TraverseFeatureNode(featNode As SldWorks.TreeControlItem, offset As String)
    
    Debug.Print offset & featNode.Text
    
    Dim swChildFeatNode As SldWorks.TreeControlItem
    
    Set swChildFeatNode = featNode.GetFirstChild()
    
    While Not swChildFeatNode Is Nothing
        TraverseFeatureNode swChildFeatNode, offset + OFFSET_SYMBOL
        Set swChildFeatNode = swChildFeatNode.GetNext
    Wend
    
End Sub
~~~



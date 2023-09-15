---
layout: sw-tool
title:  Macro to select all features in SOLIDWORKS model by type using SOLIDWORKS API
caption: Select Features By Type
---
 VBA Macro to select all features in the active SOLIDWORKS model (part, assembly or drawing) by specifying its type
image: selected-3dsketches.png
labels: [select,feature type,multi select,batch select]
group: Model
---
![All 3D sketches selected in the assembly documents](selected-3dsketches.png){ width=250 }

This VBA macro selects all features in the active model (part, assembly or drawing) using SOLIDWORKS API. For drawings and assemblies features in the children components are also selected.

Use this macro in conjunction with [Get Features Type Name](/docs/codestack/solidworks-api/document/features-manager/get-feature-type-name/) to get the required feature type name for filtering.

## Configuration

Modify the constants in the beginning of the macro

~~~ vb
Const APPEND_SELECTION As Boolean = False 'True to append selection False to clear existing selection
Const TYPE_NAME As String = "" 'Refer 'Get Features Type Name' macro to get the type name from the feature
~~~

This macro can be useful with other macros which require features to be preselected. It can be also used with SOLIDWORKS batch operations (such as delete or suppress).

~~~ vb
Const APPEND_SELECTION As Boolean = False
Const TYPE_NAME As String = "3DProfileFeature" '3DSketch

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
            
        Dim vFeats As Variant
        vFeats = GetAllFeaturesByType(swModel, TYPE_NAME)
        
        swModel.Extension.MultiSelect2 vFeats, False, Nothing
        
        'If swModel.Extension.MultiSelect2(vFeats, False, Nothing) = UBound(vFeats) + 1 Then
            'Err.Raise vbError, "", "Failed to select features"
        'End If
        
    Else
        MsgBox "Please open model"
    End If
    
End Sub

Function GetAllFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant
    
    Dim swFeatMgr As SldWorks.FeatureManager
        
    Set swFeatMgr = model.FeatureManager
    
    Dim swRootFeatNode As SldWorks.TreeControlItem
    
    Set swRootFeatNode = swFeatMgr.GetFeatureTreeRootItem2(swFeatMgrPane_e.swFeatMgrPaneBottom)
    
    If Not swRootFeatNode Is Nothing Then
        Dim swFeatsColl As Collection
        Set swFeatsColl = New Collection
        TraverseFeatureNode swRootFeatNode, typeName, swFeatsColl
    Else
        Err.Raise vbError, "", "Failed to get the root node"
    End If
    
    If swFeatsColl.Count() > 0 Then
        
        Dim swFeats() As SldWorks.Feature
        ReDim swFeats(swFeatsColl.Count() - 1)
        
        Dim i As Integer
        
        For i = 0 To UBound(swFeats)
            Set swFeats(i) = swFeatsColl.item(i + 1)
        Next
        
        GetAllFeaturesByType = swFeats
        
    Else
        GetAllFeaturesByType = Empty
    End If
    
End Function

Sub TraverseFeatureNode(featNode As SldWorks.TreeControlItem, typeName As String, feats As Collection)
    
    If featNode.ObjectType = swTreeControlItemType_e.swFeatureManagerItem_Feature Then
        
        Dim swFeat As SldWorks.Feature
        Set swFeat = featNode.Object
        
        If swFeat.GetTypeName2() = "HistoryFolder" Then
            Exit Sub
        End If
        
        If LCase(swFeat.GetTypeName2) = LCase(typeName) Then
            If Not Contains(feats, swFeat) Then
                'swFeat.Select2 True, -1
                feats.Add swFeat
            End If
        End If
        
    End If
    
    Dim swChildFeatNode As SldWorks.TreeControlItem
    
    Set swChildFeatNode = featNode.GetFirstChild()
    
    While Not swChildFeatNode Is Nothing
        TraverseFeatureNode swChildFeatNode, typeName, feats
        Set swChildFeatNode = swChildFeatNode.GetNext
    Wend
    
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


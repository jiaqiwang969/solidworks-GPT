---
layout: sw-tool
title: Exclude Selected Entities from Cut List
caption: Exclude Selected Entities from Cut List
description: This macro uses the SOLIDWORKS API to exclude entities selected from the graphics area or feature tree from the weldment or sheet metal cut list.
image: excluded-cut-list-item.svg
labels: [api, cut-list, exclude, utility, vba]
group: Cut-List
---
![Exclude from Cut List](exclude-from-cut-list.png){ width=300 }

This macro allows you to exclude selected entities from the weldment or sheet metal cut list using the SOLIDWORKS API.

Entities can be selected either in the graphics view or the feature tree, making it easier to work with as you don't need to locate the corresponding cut list feature to exclude the entities.

You can use [selection filters](https://help.solidworks.com/2013/english/solidworks/sldworks/r_selection_filter_selection.htm) to simplify the process of selecting the desired entities from the graphics area.

You can also select faces, edges, or vertices of the entities to be excluded.

![Selecting entities to exclude from the cut list using selection filters](filter-bodies-selection.png){ width=500 }

Watch the [demo video](https://youtu.be/9uZCecGg25I?t=509)

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Dim swModel As SldWorks.ModelDoc2
    Dim swSelMgr As SldWorks.SelectionMgr

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Set swSelMgr = swModel.SelectionManager
        
        Dim swCutListsColl As Collection
        Set swCutListsColl = New Collection
        
        Dim i As Integer
        
        Dim hasBodies As Boolean
                
        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
            
            On Error Resume Next
            
            Dim swBody As SldWorks.Body2
        
            Set swBody = GetSelectedObjectBody(swSelMgr, i)
            
            If Not swBody Is Nothing Then
                
                Dim swCutListFeat As SldWorks.Feature
                Set swCutListFeat = GetCutListFromBody(swModel, swBody)
                
                If Not swCutListFeat Is Nothing Then
                    If Not Contains(swCutListsColl, swCutListFeat) Then
                        swCutListsColl.Add swCutListFeat
                    End If
                Else
                    MsgBox "Cut list item for " & swBody.Name & " not found"
                End If
                
            End If
        
        Next
        
        If swCutListsColl.Count() > 0 Then
        
            For i = 1 To swCutListsColl.Count
                swCutListsColl(i).ExcludeFromCutList = True
            Next
        
        Else
            MsgBox "Please select entities to exclude from the cut list"
        End If
        
    Else
        MsgBox "Please open a model"
    End If
    
End Sub

Function GetSelectedObjectBody(selMgr As SldWorks.SelectionMgr, index As Integer) As SldWorks.Body2
    
    Dim swBody As SldWorks.Body2
    
    Dim selObj As Object
    Set selObj = selMgr.GetSelectedObject6(index, -1)
    
    If Not selObj Is Nothing Then
        If TypeOf selObj Is SldWorks.Body2 Then
            Set swBody = selObj
        ElseIf TypeOf selObj Is SldWorks.Face2 Then
            Dim swFace As SldWorks.Face2
            Set swFace = selObj
            Set swBody = swFace.GetBody
        ElseIf TypeOf selObj Is SldWorks.Edge Then
            Dim swEdge As SldWorks.Edge
            Set swEdge = selObj
            Set swBody = swEdge.GetBody
        ElseIf TypeOf selObj Is SldWorks.Vertex Then
            Dim swVertex As SldWorks.Vertex
            Set swVertex = selObj
            Set swBody = swVertex.GetBody
        End If
    End If

    Set GetSelectedObjectBody = swBody
    
End Function

Function GetCutListFromBody(model As SldWorks.ModelDoc2, body As SldWorks.Body2) As SldWorks.Feature
    
    Dim swFeat As SldWorks.Feature
    Dim swBodyFolder As SldWorks.BodyFolder
    
    Set swFeat = model.FirstFeature
    
    Do While Not swFeat Is Nothing
        
        If swFeat.GetTypeName2 = "CutListFolder" Then
            
            Set swBodyFolder = swFeat.GetSpecificFeature2
            
            Dim vBodies As Variant
            
            vBodies = swBodyFolder.GetBodies
            
            Dim i As Integer
            
            If Not IsEmpty(vBodies) Then
                For i = 0 To UBound(vBodies)
                    
                    Dim swCutListBody As SldWorks.Body2
                    Set swCutListBody = vBodies(i)
                    
                    If swApp.IsSame(swCutListBody, body) = swObjectEquality.swObjectSame Then
                        Set GetCutListFromBody = swFeat
                        Exit Function
                    End If
                    
                Next
            End If
            
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Loop

End Function

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
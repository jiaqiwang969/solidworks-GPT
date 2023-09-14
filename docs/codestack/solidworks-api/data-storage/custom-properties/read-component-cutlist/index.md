---
title: Read configuration specific cut-list property from the selected component using SOLIDWORKS API
caption: Read Component Cut-List Properties
description: VBA macro to read all properties from the cut-list of the selected component in the assembly with respect to the component configuration using SOLIDWORKS API
image: cut-list-properties.png
labels: [cut-list property,component]
---
![Cut list properties](cut-list-properties.png){ width=550 }

This VBA macro example demonstrates how to read and print all custom properties from all cut-list elements of the selected component in assembly using SOLIDWORKS API.

Cut-lists are read from the respective referenced configuration of the component.

Result is output to the immediate window of VBA editor in the following format.

~~~
CS-02-1 (A)
    Sheet<1>
        Bounding Box Length: 150
        Bounding Box Width: 50
        Sheet Metal Thickness: 0.74
        Bounding Box Area: 7500
        Bounding Box Area-Blank: 7500
        Cutting Length-Outer: 400
        Cutting Length-Inner: 0
        Cut Outs: 0
        Bends: 0
        Bend Allowance: 0.5
        Material: Material <not specified>
        Mass: 5.52
        Description: Sheet
        Bend Radius: 0.74
        Surface Treatment: Finish <not specified>
        Cost-TotalCost: 0
        QUANTITY: 1
~~~

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then
        
            Dim swSelMgr As SldWorks.SelectionMgr
            Set swSelMgr = swModel.SelectionManager
            
            Dim swComp As SldWorks.Component2
            Set swComp = swSelMgr.GetSelectedObjectsComponent2(1)
            
            If Not swComp Is Nothing Then
                PrintComponentCutListProperties swComp
            Else
                MsgBox "Please select component"
            End If
            
        Else
            MsgBox "Active document is not an assembly"
        End If
    Else
        MsgBox "Please open assembly"
    End If
    
End Sub

Sub PrintComponentCutListProperties(comp As SldWorks.Component2)
    
    Dim vCutLists As Variant
    vCutLists = GetCutLists(comp)
    
    Debug.Print comp.Name2 & " (" & comp.ReferencedConfiguration & ")"
    
    If Not IsEmpty(vCutLists) Then
    
        Dim i As Integer
        
        For i = 0 To UBound(vCutLists)
        
            Dim swCutListFeat As SldWorks.Feature
            Set swCutListFeat = vCutLists(i)
            Debug.Print "    " & swCutListFeat.Name
            
            Dim swCustPrpsMgr As SldWorks.CustomPropertyManager
            Set swCustPrpsMgr = swCutListFeat.CustomPropertyManager
            
            Dim vPrpNames As Variant
            Dim vPrpTypes As Variant
            Dim vPrpVals As Variant
            Dim vResVals As Variant
            Dim vPrpsLink As Variant
            
            Dim prpsCount As Integer
            prpsCount = swCustPrpsMgr.GetAll3(vPrpNames, vPrpTypes, vPrpVals, vResVals, vPrpsLink)
            
            Dim j As Integer
            
            Dim indent As String
            indent = "        "
            
            For j = 0 To prpsCount - 1
                Debug.Print indent & vPrpNames(j) & ": " & vPrpVals(j)
            Next
            
        Next
    Else
        Debug.Print "    -No Cut Lists-"
    End If
    
End Sub

Function GetCutLists(comp As SldWorks.Component2) As Variant
    
    Dim swCutListFeats() As SldWorks.Feature
    Dim isInit As Boolean
    isInit = False
    
    Dim swFeat As SldWorks.Feature
    Dim swBodyFolder As SldWorks.BodyFolder
    
    Set swFeat = comp.FirstFeature
    
    Do While Not swFeat Is Nothing
        
        If swFeat.GetTypeName2 = "CutListFolder" Then
            
            If Not isInit Then
                isInit = True
                ReDim swCutListFeats(0)
            Else
                ReDim Preserve swCutListFeats(UBound(swCutListFeats) + 1)
            End If
            
            Set swCutListFeats(UBound(swCutListFeats)) = swFeat
            
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Loop
    
    If isInit Then
        GetCutLists = swCutListFeats
    Else
        GetCutLists = Empty
    End If

End Function
~~~



---
title: Get the pointer to component from name using SOLIDWORKS API
caption: Get Component By Name
description: Example demonstrates how to get the pointer to the component at any level of the assembly from its full name
image: components-tree.png
labels: [select, component]
---
![Multi-level tree of components](components-tree.png){ width=200 }

This example demonstrates how to retrieve the pointer to the [IComponent2](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2.html) SOLIDWORKS API method on any level of the assembly from its full name hierarchy.

Name of the component is defined as a path where each level is separated by / symbol. Component instance id is specified with a - symbol (e.g. FirstLevelComp-1/SecondLevelComp-2/TargetComp-1)

Component name can be found in the following dialog in SOLIDWORKS User Interface:

![Component name in properties dialog](component-name.png){ width=250 }

Refer [Select Component By Name](/docs/codestack/solidworks-api/document/selection/select-component-by-name) example for an alternative way of selecting the component by name.

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc

    Dim swComp As SldWorks.Component2
    Set swComp = GetComponentByName(swAssy, "E-1/F^E-1/I-1")
    
    If Not swComp Is Nothing Then
        Debug.Print "Component Found: " & swComp.Name2
        swComp.Select4 False, Nothing, False
    Else
        Debug.Print "Component Not Found"
    End If
    
End Sub

Function GetComponentByName(assy As SldWorks.AssemblyDoc, name As String) As SldWorks.Component2
    
    Dim vNameParts As Variant
    vNameParts = Split(name, "/")
    
    Dim swComp As SldWorks.Component2
    
    Dim i As Integer
    
    For i = 0 To UBound(vNameParts)
        
        Dim swCompFeat As SldWorks.Feature
        
        If i = 0 Then
            Set swCompFeat = assy.FeatureByName(vNameParts(i))
        Else
            Set swCompFeat = swComp.FeatureByName(vNameParts(i))
        End If
        
        If swCompFeat Is Nothing Then
            Set GetComponentByName = Nothing
            Exit Function
        End If
        
        Set swComp = swCompFeat.GetSpecificFeature2
        
    Next
    
    Set GetComponentByName = swComp
    
End Function
~~~



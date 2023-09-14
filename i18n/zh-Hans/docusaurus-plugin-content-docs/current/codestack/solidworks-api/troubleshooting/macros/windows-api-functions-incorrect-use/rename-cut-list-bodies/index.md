---
layout: sw-tool
caption: Rename Cut-List Bodies
title: Macro to rename SOLIDWORKS bodies of cut-list items using the predefined template
description: VBA macro to rename bodies within the SOLIDWORKS cut-list body folder (sheet metal or weldment) based on the predefined template (e.g. custom property value)
image: renamed-cut-list-bodies.png
group: Cut-List
---
![Sheet metal and weldment bodies renamed in the feature manager tree](renamed-cut-list-bodies.png)

This VBA macro allows to rename all bodies which belong to cut-list folder (e.g. Sheet Metal or Weldment) based on the predefined naming template. It is possible to use free text in combination with custom property placeholder which will allow to use custom property in the name.

Custom property must be enclosed within ```<>``` symbols

For example to rename all sheet metal bodies using **SM_** prefix followed by value of the thickness, **NAME_TEMPLATE** variable should be defined as:

~~~ vb
Const NAME_TEMPLATE As String = "SM_<Thickness>"
~~~

## Notes

* Macro may require model rebuild after the run to refresh the names of the features
* If several bodies reside within one cut-list folder, index will be used to differentiate the names, e.g. -1, -2, -3
* Macro will perform the cut-list update before renaming

~~~ vb
Const NAME_TEMPLATE As String = "<PartNo>"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    ProcessCutLists swPart
    
End Sub

Sub ProcessCutLists(model As SldWorks.ModelDoc2)

    Dim swFeat As SldWorks.Feature
    
    Set swFeat = model.FirstFeature
    
    Do While Not swFeat Is Nothing
        
        Dim swBodyFolder As SldWorks.BodyFolder
        
        If swFeat.GetTypeName2() = "SolidBodyFolder" Then
            Set swBodyFolder = swFeat.GetSpecificFeature2
            swBodyFolder.UpdateCutList
        ElseIf swFeat.GetTypeName2() = "CutListFolder" Then
            Set swBodyFolder = swFeat.GetSpecificFeature2
                        
            Dim name As String
            name = ComposeName(NAME_TEMPLATE, swFeat)
            
            RenameBodies swBodyFolder.GetBodies(), name
            
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Loop
    
End Sub

Sub RenameBodies(bodies As Variant, bodyName As String)
    
    If Not IsEmpty(bodies) Then
    
        Dim i As Integer
        
        For i = 0 To UBound(bodies)
            Dim swBody As SldWorks.Body2
            Set swBody = bodies(i)
            
            swBody.name = bodyName & IIf(i > 0, "-" & CStr(i), "")
        Next
    
    End If
    
End Sub

Function ComposeName(template As String, cutListFeat As SldWorks.Feature) As String

    Dim regEx As Object
    Set regEx = CreateObject("VBScript.RegExp")
    
    regEx.Global = True
    regEx.IgnoreCase = True
    regEx.Pattern = "<[^>]*>"
    
    Dim regExMatches As Object
    Set regExMatches = regEx.Execute(template)
    
    Dim i As Integer
    
    Dim outName As String
    outName = template
    
    For i = regExMatches.Count - 1 To 0 Step -1
        
        Dim regExMatch As Object
        Set regExMatch = regExMatches.Item(i)
                    
        Dim prpName As String
        prpName = Mid(regExMatch.Value, 2, Len(regExMatch.Value) - 2)
        
        outName = Left(outName, regExMatch.FirstIndex) & GetPropertyValue(cutListFeat.CustomPropertyManager, prpName) & Right(outName, Len(outName) - (regExMatch.FirstIndex + regExMatch.Length))

    Next
    
    ComposeName = outName
    
End Function

Function GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String
    Dim resVal As String
    custPrpMgr.Get2 prpName, "", resVal
    GetPropertyValue = resVal
End Function
~~~


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
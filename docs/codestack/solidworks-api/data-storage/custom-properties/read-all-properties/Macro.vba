Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        PrintGeneralProperties swModel
        PrintConfigurationSpecificProperties swModel, True
        PrintCutListProperties swModel
    Else
        MsgBox "Please open model"
    End If
    
End Sub

Sub PrintGeneralProperties(model As SldWorks.ModelDoc2)
    
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    Set swCustPrpMgr = model.Extension.CustomPropertyManager("")
    
    Debug.Print "General Properties"
    
    PrintProperties swCustPrpMgr, False, "    "
    
End Sub

Sub PrintConfigurationSpecificProperties(model As SldWorks.ModelDoc2, cached As Boolean)
    
    Dim vNames As Variant
    vNames = model.GetConfigurationNames()
    
    Dim i As Integer
    
    Debug.Print "Configuration Specific Properties"
    
    For i = 0 To UBound(vNames)
        
        Dim confName As String
        confName = vNames(i)
        
        Dim swCustPrpMgr As SldWorks.CustomPropertyManager
        Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
        
        Debug.Print "    " & confName
        PrintProperties swCustPrpMgr, cached, "        "
        
    Next
    
End Sub

Sub PrintCutListProperties(model As SldWorks.ModelDoc2)

    Dim vCutLists As Variant
    vCutLists = GetCutLists(model)
    
    Debug.Print "Cut List Properties"
    
    If Not IsEmpty(vCutLists) Then
        Dim i As Integer
        
        For i = 0 To UBound(vCutLists)
            Dim swCutListFeat As SldWorks.Feature
            Set swCutListFeat = vCutLists(i)
            Debug.Print "    " & swCutListFeat.Name
            PrintProperties swCutListFeat.CustomPropertyManager, False, "        "
        Next
    Else
        Debug.Print "    -No Cut Lists-"
    End If

End Sub

Function GetCutLists(model As SldWorks.ModelDoc2) As Variant
    
    Dim swCutListFeats() As SldWorks.Feature
    Dim isInit As Boolean
    isInit = False
    
    Dim swFeat As SldWorks.Feature
    Dim swBodyFolder As SldWorks.BodyFolder
    
    Set swFeat = model.FirstFeature
    
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

Sub PrintProperties(custPrpMgr As SldWorks.CustomPropertyManager, cached As Boolean, indent As String)
    
    Dim vPrpNames As Variant
    vPrpNames = custPrpMgr.GetNames()
    
    Dim i As Integer
    
    If Not IsEmpty(vPrpNames) Then
    
        For i = 0 To UBound(vPrpNames)
            
            Dim prpName As String
            prpName = vPrpNames(i)
            
            Dim prpVal As String
            Dim prpResVal As String
            Dim wasResolved As Boolean
            Dim isLinked As Boolean
            
            Dim res As Long
            res = custPrpMgr.Get6(prpName, cached, prpVal, prpResVal, wasResolved, isLinked)
            
            Dim status As String
            Select Case res
                Case swCustomInfoGetResult_e.swCustomInfoGetResult_CachedValue
                    status = "Cached Value"
                Case swCustomInfoGetResult_e.swCustomInfoGetResult_ResolvedValue
                    status = "Resolved Value"
                Case swCustomInfoGetResult_e.swCustomInfoGetResult_NotPresent
                    status = "Not Present"
            End Select
            
            Debug.Print indent & "Property: " & prpName
            Debug.Print indent & "Value/Text Expression: " & prpVal
            Debug.Print indent & "Evaluated Value: " & prpResVal
            Debug.Print indent & "Was Resolved: " & wasResolved
            Debug.Print indent & "Is Linked: " & isLinked
            Debug.Print indent & "Status: " & status
            Debug.Print ""
            
        Next
    Else
        Debug.Print indent & "-No Properties-"
    End If
    
End Sub
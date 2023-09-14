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
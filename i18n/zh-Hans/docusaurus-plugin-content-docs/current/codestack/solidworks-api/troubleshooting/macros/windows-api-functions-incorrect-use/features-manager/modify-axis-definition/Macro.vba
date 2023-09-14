Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Dim swSelMgr As SldWorks.SelectionMgr

    Set swModel = swApp.ActiveDoc
    
    Set swSelMgr = swModel.SelectionManager
    
    Dim swFeat As SldWorks.Feature
    Set swFeat = swSelMgr.GetSelectedObject6(1, -1)
    
    If Not swFeat Is Nothing Then
    
        Dim swAxisFeatDef As SldWorks.RefAxisFeatureData
        Set swAxisFeatDef = swFeat.GetDefinition
        
        Dim i As Integer
        
        Dim swRefs() As Object
        ReDim swRefs(swSelMgr.GetSelectedObjectCount2(-1) - 2)
        
        For i = 2 To swSelMgr.GetSelectedObjectCount2(-1)
            Set swRefs(i - 2) = swSelMgr.GetSelectedObject6(i, -1)
        Next
        
        swAxisFeatDef.AccessSelections swModel, Nothing
        
        swAxisFeatDef.SetSelections swRefs
        
        swFeat.ModifyDefinition swAxisFeatDef, swModel, Nothing
        
    End If
    
End Sub
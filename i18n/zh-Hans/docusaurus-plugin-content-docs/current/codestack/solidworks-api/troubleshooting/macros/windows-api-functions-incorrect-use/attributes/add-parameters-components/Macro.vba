Enum CreateAtttributeOptions_e
    Visible = 0
    Hidden = 1
End Enum

Dim swApp As SldWorks.SldWorks
Dim swSelMgr As SldWorks.SelectionMgr
Dim swAssy As SldWorks.AssemblyDoc
Dim swAttDef As SldWorks.AttributeDef

Const ATT_DEF_NAME As String = "SampleAtt"
Const ATT_PARAM_NAME As String = "RefData"

Sub main()

    Set swApp = Application.SldWorks
    
    Set swAttDef = swApp.DefineAttribute(ATT_DEF_NAME)
    
    'add single string parameter
    swAttDef.AddParameter ATT_PARAM_NAME, swParamType_e.swParamTypeString, 0, 0

    If False = swAttDef.Register Then
        MsgBox "Failed to register attribute"
        End
    End If
    
    Set swAssy = swApp.ActiveDoc
    
    Set swSelMgr = swAssy.SelectionManager
    
    'Create attributes for all selected components
    AddAttributes
    
    swAssy.EditRebuild
    
    'reading the data from attributes
    ReadAttributes
    
End Sub

Sub AddAttributes()
    
    Dim swComp As SldWorks.Component2
    Dim swAtt As SldWorks.Attribute
    Dim i As Integer
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)

        Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)
        
        If Not swComp Is Nothing Then
            
            Set swAtt = swAttDef.CreateInstance5(swAssy, swComp, ATT_DEF_NAME & i, CreateAtttributeOptions_e.Visible, swInConfigurationOpts_e.swAllConfiguration)

            Dim swParam As SldWorks.Parameter

            Set swParam = swAtt.GetParameter(ATT_PARAM_NAME)
            
            swParam.SetStringValue2 "Data for " & swComp.Name2 & " at index " & i, swInConfigurationOpts_e.swAllConfiguration, ""
            
        End If
        
    Next
    
End Sub

Sub ReadAttributes()
    
    Dim swComp As SldWorks.Component2
    Dim swAtt As SldWorks.Attribute
    Dim i As Integer
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)

        Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)
        
        If Not swComp Is Nothing Then
            
            Dim j As Integer

            For j = 0 To 10
            
                Set swAtt = swComp.FindAttribute(swAttDef, j)
                
                If Not swAtt Is Nothing Then
                    
                    Set swParam = swAtt.GetParameter(ATT_PARAM_NAME)
                    Debug.Print swParam.GetStringValue()
                    
                End If
            
            Next
            
        End If
        
    Next

End Sub


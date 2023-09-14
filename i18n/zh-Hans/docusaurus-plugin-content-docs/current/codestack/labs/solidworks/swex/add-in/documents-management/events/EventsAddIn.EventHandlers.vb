Private Function OnRebuild(ByVal docHandler As DocumentHandler, ByVal type As RebuildState_e) As Boolean
    Logger.Log($"'{docHandler.Model.GetTitle()}' rebuilt ({type})")

    If type = RebuildState_e.PreRebuild Then
        'return false to cancel regeneration
    End If

    Return True
End Function

Private Sub OnInitialized(ByVal docHandler As DocumentHandler)
    Logger.Log($"'{docHandler.Model.GetTitle()}' initialized")
End Sub

Private Function OnSelection(ByVal docHandler As DocumentHandler, ByVal selType As swSelectType_e, ByVal type As SelectionState_e) As Boolean
    Logger.Log($"'{docHandler.Model.GetTitle()}' selection ({type}) of {selType}")

    If type <> SelectionState_e.UserPreSelect Then 'dynamic selection
        'return false to cancel selection
    End If

    Return True
End Function

Private Function OnSave(ByVal docHandler As DocumentHandler, ByVal fileName As String, ByVal type As SaveState_e) As Boolean
    Logger.Log($"'{docHandler.Model.GetTitle()}' saving ({type})")

    If type = SaveState_e.PreSave Then
        'return false to cancel saving
    End If

    Return True
End Function

Private Sub OnItemModified(ByVal docHandler As DocumentHandler, ByVal type As ItemModificationAction_e, ByVal entType As swNotifyEntityType_e, ByVal name As String, ByVal Optional oldName As String = "")
    Logger.Log($"'{docHandler.Model.GetTitle()}' item modified ({type}) of {entType}. Name: {name} (from {oldName})")
End Sub

Private Sub OnCustomPropertyModified(ByVal docHandler As DocumentHandler, ByVal modifications As CustomPropertyModifyData())
    For Each [mod] In modifications
        Logger.Log($"'{docHandler.Model.GetTitle()}' custom property '{[mod].Name}' changed ({[mod].Action}) in '{[mod].Configuration}' to '{[mod].Value}'")
    Next
End Sub

Private Sub OnAccess3rdPartyData(ByVal docHandler As DocumentHandler, ByVal state As Access3rdPartyDataState_e)
    Logger.Log($"'{docHandler.Model.GetTitle()}' accessing 3rd party data ({state})")
End Sub

Private Sub OnConfigurationOrSheetChanged(ByVal docHandler As DocumentHandler, ByVal type As ConfigurationChangeState_e, ByVal confName As String)
    Logger.Log($"'{docHandler.Model.GetTitle()}' configuration {confName} changed ({type})")
End Sub

Private Sub OnDimensionChange(ByVal docHandler As DocumentHandler, ByVal dispDim As IDisplayDimension)
    Dim [dim] = dispDim.GetDimension2(0)
    Logger.Log($"'{docHandler.Model.GetTitle()}' dimension change: {[dim].FullName} = {[dim].Value}")
    Marshal.ReleaseComObject([dim])
    [dim] = Nothing
End Sub

Private Sub OnActivated(ByVal docHandler As DocumentHandler)
    Logger.Log($"'{docHandler.Model.GetTitle()}' activated")
End Sub
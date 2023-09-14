Public Overrides Function OnConnect() As Boolean
    AddCommandGroup(Of CommandsA_e)(AddressOf OnCommandsAButtonClick)
    AddCommandGroup(Of CommandsB_e)(AddressOf OnCommandsBButtonClick)
    AddCommandGroup(Of CommandsC_e)(AddressOf OnCommandsCButtonClick)
    Return True
End Function

Private Sub OnCommandsAButtonClick(ByVal cmd As CommandsA_e)
End Sub

Private Sub OnCommandsBButtonClick(ByVal cmd As CommandsB_e)
End Sub

Private Sub OnCommandsCButtonClick(ByVal cmd As CommandsC_e)
End Sub
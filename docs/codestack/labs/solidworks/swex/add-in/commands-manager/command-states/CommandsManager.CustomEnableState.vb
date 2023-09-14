Public Enum Commands_e
    Command1
    Command2
End Enum

Public Overrides Function OnConnect() As Boolean
    AddCommandGroup(Of Commands_e)(AddressOf OnButtonClick, AddressOf OnButtonEnable)
    Return True
End Function

Private Sub OnButtonEnable(ByVal cmd As Commands_e, ByRef state As CommandItemEnableState_e)
    Select Case cmd
        Case Commands_e.Command1, Commands_e.Command2
            'TODO: implement logic to identify the state of the button
            state = CommandItemEnableState_e.DeselectDisable
    End Select
End Sub
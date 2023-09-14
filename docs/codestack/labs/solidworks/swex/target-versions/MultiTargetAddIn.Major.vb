Public Sub ReadDescriptionProperty()

    Dim prpMgr = App.IActiveDoc2.Extension.CustomPropertyManager("")
    Dim prpName = "Description"
    Dim val As String = ""
    Dim resVal As String = ""

    If App.IsVersionNewerOrEqual(SwVersion_e.Sw2018) Then

        Dim wasRes As Boolean
        Dim linkToPrp As Boolean
        prpMgr.Get6(prpName, False, val, resVal, wasRes, linkToPrp)

    ElseIf App.IsVersionNewerOrEqual(SwVersion_e.Sw2014) Then

        Dim wasRes As Boolean
        prpMgr.Get5(prpName, False, val, resVal, wasRes)

    Else
        prpMgr.Get4(prpName, False, val, resVal)
    End If

    Logger.Log($"{prpName} = {resVal} [{val}]")
End Sub
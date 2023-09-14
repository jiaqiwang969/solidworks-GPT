      Private m_Page As PropertyManagerPageEx(Of MyPMPageHandler, DataModel)
      Private m_Data As DataModel = New DataModel()

Private Enum Commands_e
	ShowPmpPage
End Enum

Public Overrides Function OnConnect() As Boolean
	m_Page = New PropertyManagerPageEx(Of MyPMPageHandler, DataModel)(App)
	AddCommandGroup(Of Commands_e)(AddressOf ShowPmpPage)
	Return True
End Function

Private Sub ShowPmpPage(cmd As Commands_e)
	AddHandler m_Page.Handler.Closed, AddressOf OnPageClosed
	m_Page.Show(m_Data)
End Sub

Private Sub OnPageClosed(ByVal reason As swPropertyManagerPageCloseReasons_e)
	Debug.Print($"Text: {m_Data.Simple.Text}")
	Debug.Print($"Size: {m_Data.Simple.Size}")
	Debug.Print($"Number: {m_Data.Simple.Number}")
End Sub
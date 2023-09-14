Private Const STREAM_NAME As String = "CodeStackStream"

Public Class StreamData
    Public Property Prp1 As String
    Public Property Prp2 As Double
End Class

Private m_StreamData As StreamData

Private Sub SaveToStream(ByVal model As IModelDoc2)
    Using streamHandler = model.Access3rdPartyStream(STREAM_NAME, True)

        Using str = streamHandler.Stream
            Dim xmlSer = New XmlSerializer(GetType(StreamData))
            xmlSer.Serialize(str, m_StreamData)
        End Using
    End Using
End Sub
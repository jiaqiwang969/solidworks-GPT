Private Const STORAGE_NAME As String = "CodeStackStorage"
Private Const STREAM1_NAME As String = "CodeStackStream1"
Private Const STREAM2_NAME As String = "CodeStackStream2"
Private Const SUB_STORAGE_NAME As String = "CodeStackSubStorage"

Public Class StorageStreamData
    Public Property Prp3 As Integer
    Public Property Prp4 As Boolean
End Class

Private m_StorageData As StorageStreamData
Private Sub SaveToStorageStore(ByVal model As IModelDoc2)
    Using storageHandler = model.Access3rdPartyStorageStore(STORAGE_NAME, True)

        Using str = storageHandler.Storage.TryOpenStream(STREAM1_NAME, True)
            Dim xmlSer = New XmlSerializer(GetType(StorageStreamData))
            xmlSer.Serialize(str, m_StorageData)
        End Using

        Using subStorage = storageHandler.Storage.TryOpenStorage(SUB_STORAGE_NAME, True)

            Using str = subStorage.TryOpenStream(STREAM2_NAME, True)
                Dim buffer = Encoding.UTF8.GetBytes(DateTime.Now.ToString("yyyy-MM-dd-hh-mm-ss"))
                str.Write(buffer, 0, buffer.Length)
            End Using
        End Using
    End Using
End Sub
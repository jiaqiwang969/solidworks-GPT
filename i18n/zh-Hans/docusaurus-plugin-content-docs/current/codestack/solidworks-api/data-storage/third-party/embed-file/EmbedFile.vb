Imports System.Runtime.InteropServices.ComTypes
Imports System.Xml.Serialization
Imports SolidWorks.Interop.sldworks
Imports SolidWorks.Interop.swconst

Partial Public Class EmbedFile
    Public Class ThirdPartyStreamNotFoundException
        Inherits Exception
    End Class

    Private Async Function SaveDataToDocument(ByVal model As IModelDoc2, ByVal data As EmbedFileData) As Task

        Dim err As Integer = -1
        Dim warn As Integer = -1
        model.SetSaveFlag()
        Const S_OK As Integer = 0
        Dim result As Boolean? = Nothing
        Dim onSaveToStorageNotifyFunc = Function()
                                            Try
                                                StoreData(model, data, STREAM_NAME)
                                                result = True
                                            Catch
                                                result = False
                                            End Try

                                            Return S_OK
                                        End Function

        Select Case CType(model.[GetType](), swDocumentTypes_e)
            Case swDocumentTypes_e.swDocPART
                AddHandler TryCast(model, PartDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc
            Case swDocumentTypes_e.swDocASSEMBLY
                AddHandler TryCast(model, AssemblyDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc
            Case swDocumentTypes_e.swDocDRAWING
                AddHandler TryCast(model, DrawingDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc
        End Select

        If Not model.Save3(CInt(swSaveAsOptions_e.swSaveAsOptions_Silent), err, warn) Then
            Throw New InvalidOperationException($"Failed to save the model: {CType(err, swFileSaveError_e)}")
        End If

        Await Task.Run(Sub()
                           While Not result.HasValue
                               Threading.Thread.Sleep(10)
                           End While
                       End Sub)

        Select Case CType(model.GetType(), swDocumentTypes_e)
            Case swDocumentTypes_e.swDocPART
                RemoveHandler TryCast(model, PartDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc
            Case swDocumentTypes_e.swDocASSEMBLY
                RemoveHandler TryCast(model, AssemblyDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc
            Case swDocumentTypes_e.swDocDRAWING
                RemoveHandler TryCast(model, DrawingDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc
        End Select

        If Not result.Value Then
            Throw New Exception("Failed to store the data")
        End If
    End Function

    Private Function ReadDataFromDocument(ByVal model As IModelDoc2) As EmbedFileData
        Return ReadData(Of EmbedFileData)(model, STREAM_NAME)
    End Function

    Private Sub StoreData(Of T)(ByVal model As IModelDoc2, ByVal data As T, ByVal streamName As String)
        Try
            Dim stream = TryCast(model.IGet3rdPartyStorage(streamName, True), IStream)

            Using comStr = New ComStream(stream, True, False)
                comStr.Seek(0, IO.SeekOrigin.Begin)
                Dim ser = New XmlSerializer(GetType(T))
                ser.Serialize(comStr, data)
            End Using

        Catch
            Throw
        Finally
            model.IRelease3rdPartyStorage(streamName)
        End Try
    End Sub

    Private Function ReadData(Of T)(ByVal model As IModelDoc2, ByVal streamName As String) As T
        Try
            Dim stream = TryCast(model.IGet3rdPartyStorage(streamName, False), IStream)

            If stream IsNot Nothing Then

                Using comStr = New ComStream(stream, False)
                    comStr.Seek(0, IO.SeekOrigin.Begin)
                    Dim ser = New XmlSerializer(GetType(T))
                    Return CType(ser.Deserialize(comStr), T)
                End Using
            Else
                Throw New ThirdPartyStreamNotFoundException()
            End If

        Catch
            Throw
        Finally
            model.IRelease3rdPartyStorage(streamName)
        End Try
    End Function

End Class

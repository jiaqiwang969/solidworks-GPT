
Imports System.IO
Imports System.Runtime.InteropServices
Imports System.Windows.Forms
Imports CodeStack.SwEx.AddIn
Imports CodeStack.SwEx.AddIn.Attributes
Imports SolidWorks.Interop.swconst

<ComVisible(True), Guid("E54E85ED-B8AE-434D-B616-7D691527A429")>
<AutoRegister("EmbedFileAddIn", "Sample Demonstrating use of 3rd party store")>
Partial Public Class EmbedFile
    Inherits SwAddInEx

    Private Const STREAM_NAME As String = "CodeStack.EmbedFile"

    <CodeStack.SwEx.Common.Attributes.Title("Embed File")>
    Public Enum Commands_e
        AddFile
        LoadFile
    End Enum

    Public Overrides Function OnConnect() As Boolean
        AddCommandGroup(Of Commands_e)(AddressOf OnButtonClick)
        Return True
    End Function

    Private Async Sub OnButtonClick(ByVal cmd As Commands_e)
        Select Case cmd
            Case Commands_e.AddFile
                Await SaveFile()
            Case Commands_e.LoadFile
                LoadFile()
        End Select
    End Sub

    Private Async Function SaveFile() As Task

        Try
            Dim fileToSave As String = BrowseFile(True)

            If Not String.IsNullOrEmpty(fileToSave) Then

                Dim embedData As New EmbedFileData()
                embedData.FileName = Path.GetFileName(fileToSave)
                embedData.Content = File.ReadAllBytes(fileToSave)

                Await SaveDataToDocument(App.IActiveDoc2, embedData)
                App.SendMsgToUser2("Data saved", swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk)

            End If
        Catch ex As Exception
            App.SendMsgToUser2(ex.Message, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk)
        End Try

    End Function

    Private Sub LoadFile()

        Try
            Dim embedData = ReadDataFromDocument(App.IActiveDoc2)

            Dim fileToSave As String = BrowseFile(False, embedData.FileName)

            If Not String.IsNullOrEmpty(fileToSave) Then
                File.WriteAllBytes(fileToSave, embedData.Content)
            End If

        Catch ex As Exception
            App.SendMsgToUser2(ex.Message, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk)
        End Try

    End Sub

    Function BrowseFile(isOpen As Boolean, Optional fileName As String = "") As String

        Dim fileDlg As FileDialog

        If isOpen Then
            fileDlg = New OpenFileDialog()
        Else
            fileDlg = New SaveFileDialog()
        End If

        fileDlg.Title = "Select File"
        fileDlg.Filter = "All files (*.*)|*.*"
        fileDlg.FileName = fileName

        If fileDlg.ShowDialog() = DialogResult.OK Then
            Return fileDlg.FileName
        Else
            Return ""
        End If

    End Function

End Class

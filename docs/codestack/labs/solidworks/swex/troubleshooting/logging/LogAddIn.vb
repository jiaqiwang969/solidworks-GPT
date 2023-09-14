Imports CodeStack.SwEx.AddIn
Imports CodeStack.SwEx.AddIn.Attributes
Imports CodeStack.SwEx.Common.Attributes
Imports System
Imports System.Runtime.InteropServices

<LoggerOptions(True, LogAddIn.LOGGER_NAME)>
<AutoRegister>
<ComVisible(True), Guid("CA45AA6A-A2AD-481B-9CBD-0B12D64763B5")>
Public Class LogAddIn
    Inherits SwAddInEx

    Friend Const LOGGER_NAME As String = "MyAddInLog"

    Public Overrides Function OnConnect() As Boolean
        Try
            Logger.Log("Loading add-in...")
            'TODO: implement connection
            Return True
        Catch ex As Exception
            Logger.Log(ex)
            Throw
        End Try
    End Function

End Class

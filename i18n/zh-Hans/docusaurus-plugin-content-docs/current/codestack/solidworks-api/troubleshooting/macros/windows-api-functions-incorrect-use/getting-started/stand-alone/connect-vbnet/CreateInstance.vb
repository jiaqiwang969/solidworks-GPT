Imports System.Runtime.InteropServices
Imports System.Runtime.InteropServices.ComTypes
Imports SolidWorks.Interop.sldworks

Module CodeStackSample

    <DllImport("ole32.dll")>
    Private Function CreateBindCtx(ByVal reserved As UInteger, <Out> ByRef ppbc As IBindCtx) As Integer
    End Function

    Sub Main()

        Const SW_PATH As String = "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\SLDWORKS.exe"

        Try
            Dim app = StartSwApp(SW_PATH)
            Console.WriteLine(app.RevisionNumber())
        Catch ex As Exception
            Console.WriteLine("Failed to connect to SOLIDWORKS instance: " & ex.Message)
        End Try

        Console.ReadLine()

    End Sub

    Function StartSwApp(ByVal appPath As String, _
            ByVal Optional timeoutSec As Integer = 10) As ISldWorks

        Dim timeout = TimeSpan.FromSeconds(timeoutSec)

        Dim startTime = DateTime.Now

        Dim prc = Process.Start(appPath)
        Dim app As ISldWorks = Nothing

        While app Is Nothing
            If DateTime.Now - startTime > timeout Then
                Throw New TimeoutException()
            End If

            app = GetSwAppFromProcess(prc.Id)
        End While

        Return app
    End Function

    Function GetSwAppFromProcess(ByVal processId As Integer) As ISldWorks

        Dim monikerName = "SolidWorks_PID_" & processId.ToString()

        Dim context As IBindCtx = Nothing
        Dim rot As IRunningObjectTable = Nothing
        Dim monikers As IEnumMoniker = Nothing

        Try

            CreateBindCtx(0, context)

            context.GetRunningObjectTable(rot)
            rot.EnumRunning(monikers)

            Dim moniker = New IMoniker(0) {}

            While monikers.[Next](1, moniker, IntPtr.Zero) = 0

                Dim curMoniker = moniker.First()
                Dim name As String = Nothing

                If curMoniker IsNot Nothing Then

                    Try
                        curMoniker.GetDisplayName(context, Nothing, name)
                    Catch ex As UnauthorizedAccessException
                    End Try

                End If

                If String.Equals(monikerName, name, StringComparison.CurrentCultureIgnoreCase) Then
                    Dim app As Object = Nothing
                    rot.GetObject(curMoniker, app)
                    Return TryCast(app, ISldWorks)
                End If

            End While

        Finally

            If monikers IsNot Nothing Then
                Marshal.ReleaseComObject(monikers)
            End If

            If rot IsNot Nothing Then
                Marshal.ReleaseComObject(rot)
            End If

            If context IsNot Nothing Then
                Marshal.ReleaseComObject(context)
            End If
        End Try

        Return Nothing

    End Function

End Module

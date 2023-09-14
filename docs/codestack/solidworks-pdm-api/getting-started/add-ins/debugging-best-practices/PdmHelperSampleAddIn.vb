Imports EdmLib
Imports System.Runtime.InteropServices
Imports System.Text

Namespace CodeStack

    <ComVisible(True)>
    <Guid("B761142B-BEEB-4E4D-8332-6B9E9D646B16")>
    Public Class PdmAddInSample
        Implements IEdmAddIn5

        Private Enum Commands_e
            GetIds
        End Enum

        Public Sub GetAddInInfo(ByRef poInfo As EdmAddInInfo, ByVal poVault As IEdmVault5, ByVal poCmdMgr As IEdmCmdMgr5) Implements IEdmAddIn5.GetAddInInfo

            poInfo.mbsAddInName = "SW PDM Helper"
            poInfo.mbsDescription = "Utility functions for SOLIDWORKS PDM"
            poInfo.mlAddInVersion = 1
            poInfo.mlRequiredVersionMajor = 17
            poCmdMgr.AddCmd(CInt(Commands_e.GetIds), "Get ID1")

        End Sub

        Public Sub OnCmd(ByRef poCmd As EdmCmd, ByRef ppoData As Array) Implements IEdmAddIn5.OnCmd

            If poCmd.meCmdType = EdmCmdType.EdmCmd_Menu Then

                If poCmd.mlCmdID = Commands_e.GetIds Then

                    Dim msg As New StringBuilder()

                    For Each data As EdmCmdData In ppoData
                        msg.AppendLine($"{data.mbsStrData1} - {GetId(data)}")
                    Next

                    TryCast(poCmd.mpoVault, IEdmVault10).MsgBox(0, msg.ToString())

                End If
            End If
        End Sub

        Private Function GetId(data As EdmCmdData) As Integer

            Dim isFile = data.mlObjectID1 <> 0

            If isFile Then
                Return data.mlObjectID1
            Else
                Return data.mlObjectID2
            End If

        End Function

    End Class

End Namespace

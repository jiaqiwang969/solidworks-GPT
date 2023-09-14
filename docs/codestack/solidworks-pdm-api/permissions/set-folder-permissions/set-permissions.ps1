$vaultName=$args[0]
$userName=$args[1]
$password=$args[2]
$folderName=$args[3]
$targetUserName=$args[4]
$permissions=$args[5]

$ScriptDir = Split-Path $script:MyInvocation.MyCommand.Path

$Assem = ( 
    $ScriptDir + "\Interop.EdmLib.dll"
    ) 
    
$Source = @"
Imports System
Imports System.IO
Imports EdmLib

Public Class SwPdmTools

    Shared Sub New()
        AddHandler AppDomain.CurrentDomain.AssemblyResolve, AddressOf OnAssemblyResolve
    End Sub

    Public Shared Sub LoadLibrary(ParamArray libs As Object())
        For Each [lib] As String In libs
            Console.WriteLine(String.Format("Loading library: {0}", [lib]))
            Dim assm As System.Reflection.Assembly = System.Reflection.Assembly.LoadFrom([lib])
            Console.WriteLine(assm.GetName().ToString())
        Next
    End Sub

    Private Shared Function OnAssemblyResolve(ByVal sender As Object, ByVal args As ResolveEventArgs) As System.Reflection.Assembly
        For Each assm As System.Reflection.Assembly In AppDomain.CurrentDomain.GetAssemblies()

            If assm.GetName().ToString() = args.Name Then
                Return assm
            End If
        Next

        Return Nothing
    End Function
    
    Public Shared Sub SetFolderPermissions(vaultName As String, userName As String, password As String, folderName As String, targetUserName As String, permissions As Integer)

        Try
            Dim vault As IEdmVault7 = New EdmVault5
            vault.Login(userName, password, vaultName)

            If vault.IsLoggedIn Then

                Dim folder As IEdmFolder7 = vault.GetFolderFromPath(folderName)

                If Not folder Is Nothing Then

                    Dim userMgr As IEdmUserMgr7
                    userMgr = vault.CreateUtility(EdmUtility.EdmUtil_UserMgr)

                    Dim targetUser As IEdmUser5 = userMgr.GetUser(targetUserName)

                    If Not targetUser Is Nothing Then

                        Dim perm As EdmFolderPermission = New EdmFolderPermission()
                        perm.meOwnerType = EdmObjectType.EdmObject_User
                        perm.mlOwnerID = targetUser.ID
                        perm.mlEdmRightFlag = permissions
                        perm.mlFolderID = folder.ID
                        userMgr.SetFolderPermissions(New EdmFolderPermission() {perm})

                    Else
                        Throw New NullReferenceException("Failed to find a user")
                    End If

                Else
                    Throw New NullReferenceException("Failed to find a folder")
                End If
            Else
                Throw New NullReferenceException("Failed to login to vault")
            End If

        Catch ex As Exception
            Console.ForegroundColor = ConsoleColor.DarkRed
            Console.WriteLine(ex.Message)
            Console.ResetColor()
        End Try

    End Sub

End Class
"@

Add-Type -TypeDefinition $Source -ReferencedAssemblies $Assem -Language VisualBasic

[SwPdmTools]::LoadLibrary($Assem)
[SwPdmTools]::SetFolderPermissions($vaultName, $userName, $password, $folderName, $targetUserName, $permissions)
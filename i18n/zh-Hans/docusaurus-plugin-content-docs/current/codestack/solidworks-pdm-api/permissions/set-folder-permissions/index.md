---
title: 使用 SOLIDWORKS PDM API 设置文件夹权限的 Power Shell 脚本
caption: 设置文件夹权限
description: 使用 SOLIDWORKS PDM API 为指定用户设置指定文件夹的权限的 Vb.NET Power Shell 脚本
image: folder-permissions.png
labels: [permissions,folder]
---
![SOLIDWORKS PDM 管理面板中的文件夹权限](folder-permissions.png){ width=450 }

此 Power Shell 脚本允许使用 SOLIDWORKS PDM API 为指定用户设置指定文件夹的权限。

要使用脚本，请创建 PowerShell 文件和命令行文件，如下所示。

需要将 SOLIDWORKS PDM 互操作文件放置在与脚本文件相同的文件夹中。有关生成互操作文件的更多信息，请参阅[.NET Framework 2.0 中的互操作](/docs/codestack/solidworks-pdm-api/getting-started#framework-20-or-older)文章。

脚本参数：

1. *vaultName* - 执行操作的库的名称
1. *userName* - 执行操作的用户名（应具有分配权限的权限）
1. *password* - 上述用户名的密码
1. *folderName* - 要更改权限的文件夹的完整路径
1. *targetUserName* - 要更改权限的用户名
1. *permissions* - 要分配的权限。整数值，表示单个权限或一组权限。权限数字在[EdmRightFlags](https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.EdmRightFlags.html)中定义。将所需权限的值相加以分配多个值（例如，为读取文件权限设置 1，为读取、签出、删除和添加文件设置 15 [1 + 2 + 4 + 8]）

~~~
> set-permissions.cmd MyVault admin pwd "D:\My Vaults\Vault1\Folder1" user1 15
~~~

## set-permissions.ps1

~~~ ps1
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
~~~



## set-permissions.cmd

~~~ cmd
SET vaultName=%1
SET userName=%2
SET password=%3
SET folderName=%4
SET targetUserName=%5
SET permissions=%6

PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0set-permissions.ps1" %vaultName% %userName% %password% %folderName% %targetUserName% %permissions%
~~~
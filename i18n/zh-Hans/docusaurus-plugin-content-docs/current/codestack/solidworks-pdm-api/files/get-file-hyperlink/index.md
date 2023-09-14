---
title: 获取SOLIDWORKS PDM vault中文件的超链接（conisio url）
caption: 获取文件超链接
description: 使用PDM Professional API，这些PowerShell脚本允许获取指定文件的一致超链接（conisio url）
image: hyperlink-email.png
labels: [conisio, hyperlink]
---

这个PowerShell脚本允许提取存储库中指定文件的conisio url。该链接可用于获取一个持久链接，可供任何SOLIDWORKS PDM用户使用。

使用SOLIDWORKS PDM API提取形成conisio url所需的数据：文件ID、文件夹ID等。

创建2个脚本文件并粘贴以下代码：

## get-url.ps1
~~~ ps1
$vault_name=$args[0]
$filePath=$args[1]
$action=$args[2]

$Source = @"
Imports System
Imports System.IO

Public Class SwPdmTools

    'open view explore get lock properties history
    Public Shared Sub GetHyperlink(vaultName As String, filePath As String, action As String)

        Dim vault As Object = Activator.CreateInstance(Type.GetTypeFromProgID("ConisioLib.EdmVault"))

        vault.LoginAuto(vaultName, 0)

        Dim folderPath As String = Path.GetDirectoryName(filePath)
        Dim fileName As String = Path.GetFileName(filePath)

        Dim folder As Object = vault.GetFolderFromPath(folderPath)
        Dim file As Object = folder.GetFile(fileName)

        If Not file Is Nothing Then

            Const EdmObject_File As Integer = 1
            Dim url As String = String.Format("conisio://{0}/{1}?projectid={2}&documentid={3}&objecttype={4}", vaultName, action, folder.ID, file.ID, EdmObject_File)
            Console.WriteLine(url)

        End If

    End Sub

End Class
"@

Add-Type -TypeDefinition $Source -Language VisualBasic

[SwPdmTools]::GetHyperlink($vault_name, $filePath, $action)

~~~



## get-url.cmd
~~~ cmd
SET vaultName=%1
SET filePath=%2
SET action=%3

PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0get-url.ps1" %vaultName% %filePath% %action%
~~~



使用以下参数调用命令行

* 存储库名称
* 文件的完整路径
* 超链接的操作。选择以下之一：
    * open
    * view
    * explore
    * get
    * lock
    * properties
    * history

例如：

~~~ cmd
get-url myvault "D:\myvault\part.sldprt" explore
~~~

超链接将输出到控制台：

![Conisio url输出到控制台窗口](conisio-url.png){ width=450 }

现在可以使用此超链接访问文件。

![Conisio url插入到电子邮件中的链接](hyperlink-email.png){ width=450 }
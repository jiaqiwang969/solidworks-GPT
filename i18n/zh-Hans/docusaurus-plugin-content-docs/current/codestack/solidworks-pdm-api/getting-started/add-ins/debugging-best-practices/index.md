---
title: SOLIDWORKS PDM Add-In 调试 - 最佳实践
caption: SOLIDWORKS PDM Add-In 调试 - 最佳实践
description: SOLIDWORKS PDM Add-In 调试的详细指南。使用 Vault Browser 工具简化调试过程
image: debug-addin.png
labels: [add-in, api, attach to process, debugging, epdm, example, notepad, pdm, solidworks pdm, visual studio]
redirect-from:
  - /2018/03/debugging-solidworks-pdm-add-in-best.html
---
对于 SOLIDWORKS PDM 插件的调试，许多开发人员发现这个过程繁琐且复杂。这尤其适用于之前开发桌面或 SOLIDWORKS 应用程序的开发人员，现在需要开发 PDM 插件。

主要的复杂性来自于 SOLIDWORKS PDM 是一个完全集成到客户端机器上的 Windows 资源管理器进程的服务器-客户端系统。这意味着插件（作为进程内扩展）会加载到 explorer.exe 进程中。重要的是要理解，explorer.exe 不仅仅是 Windows 文件资源管理器的进程，而且还管理开始菜单、任务栏、桌面等。因此，仅仅关闭 Windows 文件资源管理器是不够的，无法释放插件的 DLL。

SOLIDWORKS PDM 为开发人员提供了一个方便的框架，极大地简化了开发过程。在 *SOLIDWORKS PDM 管理* 控制台的 *Add-ins* 节点下，可以找到 *Debug Add-ins* 菜单。

![管理面板中的调试插件命令](debug-addin.png){ width=320 height=297 }

您需要选择一个包含插件的 DLL，将其加载到调试器中。

![插件的 GUID](debug-addins-register.png){ width=640 height=246 }

一旦选择了插件，它的条目将出现在列表中，并将保留在那里，直到被移除。因此，每次重新构建项目时都不需要打开此控制台。

正如我之前所指出的，SOLIDWORKS PDM 是一个客户端-服务器架构系统，所有的插件都托管在服务器上，并重新分发到客户端机器。当将插件添加为调试插件时，不会将插件的 DLL 加载到服务器上。插件将从 *bin* 文件夹直接在本地进行调试。这也意味着，存储库的其他用户在他们的系统中看不到该插件。

传统上，SOLIDWORKS PDM 插件是通过 Notepad 进程进行调试的，方法是在项目的调试设置中选择 notepad.exe 的路径，作为 *Start external program* 操作：

![在外部 Notepad 应用程序中开始调试](start-ext-prg-notepad.png){ width=640 height=344 }

这样可以通过运行解决方案（F5）来启动调试过程，并打开 Notepad。为了开始实际的调试，需要执行以下操作：

1. 在 Notepad 中选择 *File->Open* 菜单命令
1. 导航到本地存储库文件夹
1. 将过滤器更改为 *All Files (*.*)*，以查看存储库中的所有文件

![在 Notepad 中调试插件](debug-notepad.gif){ width=400 height=271 }

这种方法的好处是，停止 Visual Studio 的调试会话（通过单击 Visual Studio 中的停止按钮或关闭 Notepad）将释放内存中的 DLL，因此不需要重新启动 explorer.exe 进程来编译插件的新版本。

但是，这种方法的局限性是：

* 无法对文件或文件夹进行多选
* 每次启动新的调试会话时需要执行太多步骤（例如，点击打开菜单，导航到存储库，更改过滤器）。每个调试会话可能需要大约 5-10 秒钟。

更好的方法是使用 [PDM Vault Browser](https://github.com/codestackdev/pdm-vault-browser/releases/tag/initial) 工具。源代码可在 [GitHub](https://github.com/codestackdev/pdm-vault-browser) 上找到。源代码如下（必须在 .NET Framework 4.0 中编译，否则无法加载调试符号）：

~~~ cs
using System;
using System.Linq;
using System.Windows.Forms;

namespace SwPdmVaultBrowser
{
    class Program
    {
        [STAThread]
        static void Main(string[] args)
        {
            var path = "";

            if (args.Any())
            {
                path = args.First();
            }

            var dlg = new OpenFileDialog()
            {
                InitialDirectory = path,
                Multiselect = true 
            };

            dlg.ShowDialog();
        }
    }
}

~~~

这个工具是一个简单的文件浏览对话框，启用了多选选项。该工具还接受一个命令行参数，其中包含 PDM 存储库中文件夹的完整路径。因此，当启动工具时，它将自动浏览到指定的文件夹：

![使用 PDM Vault Browser 调试插件](debug-with-pdm-vault-browser.png){ width=640 height=328 }

现在，在启动调试器时，它将自动将您带到存储库中的指定文件夹，无需指定过滤器。

视频演示：

{% youtube { id: uVcc4zvsSN0 } %}

SOLIDWORKS PDM 插件的示例。请阅读 [如何创建 SOLIDWORKS PDM Professional 插件](/docs/codestack/solidworks-pdm-api/getting-started/add-ins/create/) 文章，了解如何从头开始构建 PDM 插件。

<details>
<summary>C# 示例</summary>

~~~ cs
using EdmLib;
using System;
using System.Linq;
using System.Runtime.InteropServices;

namespace CodeStack
{
    [ComVisible(true)]
    [Guid("8219E7E8-1765-4699-B509-E9DD84B337B4")]
    public class PdmAddInSample : IEdmAddIn5
    {
        private enum Commands_e
        {
            GetIds
        }
        
        public void GetAddInInfo(ref EdmAddInInfo poInfo, IEdmVault5 poVault, IEdmCmdMgr5 poCmdMgr)
        {
            poInfo.mbsAddInName = "SW PDM Helper";
            poInfo.mbsDescription = "Utility functions for SOLIDWORKS PDM";
            poInfo.mlAddInVersion = 1;
            poInfo.mlRequiredVersionMajor = 17; //SOLIDWORKS PDM 2017 SP0

            poCmdMgr.AddCmd((int)Commands_e.GetIds, "Get ID");
        }

        public void OnCmd(ref EdmCmd poCmd, ref Array ppoData)
        {
            if (poCmd.meCmdType == EdmCmdType.EdmCmd_Menu)
            {
                if (poCmd.mlCmdID == (int)Commands_e.GetIds)
                {
                    Func<EdmCmdData, int> getIdFunc = (d) => 
                    {
                        var isFile = d.mlObjectID1 != 0;

                        if (isFile)
                        {
                            return d.mlObjectID1;
                        }
                        else
                        {
                            return d.mlObjectID2;
                        }
                    };

                    var msg = string.Join(Environment.NewLine,
                        (ppoData as EdmCmdData[]).Select(
                            d => $"{d.mbsStrData1} - {getIdFunc(d)}").ToArray());

                    (poCmd.mpoVault as IEdmVault10).MsgBox(0, msg);
                }
            }
        }
    }
}

~~~

</details>

<details>
<summary>VB.NET 示例</summary>

~~~ vb
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

~~~

</details>
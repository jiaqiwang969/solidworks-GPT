---
title: 在SOLIDWORKS中记录和编辑宏
caption: 记录宏
description: 本文介绍如何记录宏命令
image: macros-save-filter.png
labels: [宏, 记录]
sidebar_position: 2
---
SOLIDWORKS提供了将用户操作记录并转换为宏代码的强大功能。

这是学习SOLIDWORKS API和查找所需方法的非常方便的功能。

可以通过单击宏工具栏上的**记录**按钮来开始录制：

![宏工具栏中的宏记录命令](macro-toolbar.png)

在录制模式下，将记录大部分用户操作

> 注意：并非所有命令都可以通过宏记录来记录。如果命令未被记录到，这并不意味着该特定命令的API不可用。

为了增强宏记录体验，请尽量减少模型视图方向的更改和选择操作，因为这些命令将被记录下来，并且会使宏代码由于大量行数而难以阅读。

使用**暂停**按钮跳过不必要的操作记录。

录制完成后，单击**停止**按钮并选择要保存已记录宏的文件。

![保存已记录宏](macros-save-filter.png){ width=400 }

请注意，可以将宏保存为VBA和VSTA格式。请参阅[宏类型](/docs/codestack/solidworks-api/getting-started/macros/types)文章，了解这些宏类型之间的区别。

如果经常记录宏，建议启用*录制后自动编辑宏*选项。

![自动编辑宏录制后选项](option-edit-macro-after-recording.png){ width=350 }

这样，在宏录制完成后会自动打开编辑器，因此不需要显式调用*工具->宏->编辑*菜单命令来编辑源代码。

以下是以VBA、C#和VB.NET语言记录的示例宏：

![以VBA记录的宏示例](sample-vba-recorded-macro.png){ width=350 }

![以C# VSTA记录的宏示例](sample-vsta-csharp-recorded-macro.png){ width=350 }

![以VB.NET VSTA记录的宏示例](sample-vsta-vb.net-recorded-macro.png){ width=350 }
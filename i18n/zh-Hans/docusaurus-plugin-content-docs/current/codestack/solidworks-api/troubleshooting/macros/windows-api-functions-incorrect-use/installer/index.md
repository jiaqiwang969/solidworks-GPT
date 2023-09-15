---
title: 通过创建msi安装程序安装SOLIDWORKS插件
caption: 安装程序
description: 创建msi安装程序包以部署SOLIDWORKS应用程序
---
安装程序包（.msi）是在部署应用程序时提供最佳用户体验的最可靠方式。安装程序可以提供友好的逐步向导，允许在安装产品时指定选项。有多种安装程序选项可供选择。

[Microsoft Visual Studio Installer Projects](vsi) 提供了从构建的二进制文件创建安装程序的最简单和最快的方法。然而，这个选项在自定义安装程序时功能和灵活性有限。

[WiX](wix) 是一个流行的免费框架，通过在XML格式中定义规则来创建安装程序。该框架提供了广泛的灵活性，并允许将任何自定义内容构建到安装程序中。

其他选项包括但不限于：

* [InstallShield](https://en.wikipedia.org/wiki/InstallShield)
* [Nullsoft Scriptable Install System](https://en.wikipedia.org/wiki/Nullsoft_Scriptable_Install_System)
* [Orca](https://docs.microsoft.com/en-us/windows/desktop/msi/orca-exe)
---
title: Creating an MSI Installer to Install SOLIDWORKS Add-ins
caption: Installer
description: Create an .msi installer package to deploy your SOLIDWORKS application
---
An installer package (.msi) is the most reliable way to provide the best user experience when deploying an application. Installers can provide a friendly step-by-step wizard that allows options to be specified during the installation of the product. There are several installer options to choose from.

[Microsoft Visual Studio Installer Projects](vsi) provides the simplest and fastest way to create an installer from the built binary files. However, this option has limited functionality and flexibility when customizing the installer.

[WiX](wix) is a popular free framework for creating installers by defining rules in XML format. This framework provides extensive flexibility and allows any custom content to be built into the installer.

Other options include, but are not limited to:

* [InstallShield](https://en.wikipedia.org/wiki/InstallShield)
* [Nullsoft Scriptable Install System](https://en.wikipedia.org/wiki/Nullsoft_Scriptable_Install_System)
* [Orca](https://docs.microsoft.com/en-us/windows/desktop/msi/orca-exe)
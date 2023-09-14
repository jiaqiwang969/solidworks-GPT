---
title: '入门：SOLIDWORKS PDM API 开发'
caption: 入门
description: SOLIDWORKS PDM API 的介绍，解释了通过插件和独立应用程序访问 API 的不同方式，并提供了创建它们的详细指南。
labels: [pdm api, 入门]
sidebar_position: 0
---
本节介绍了 SOLIDWORKS PDM API。它解释了 PDM 插件和独立应用程序之间的区别，并提供了创建它们的详细指南。

SOLIDWORKS PDM API 中的根对象是 [IEdmVault5](https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmvault5.html)，它提供了对各种功能部分的访问。

此接口可以显式转换为其他管理器接口，例如 [IEdmAddInMgr9](https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmAddInMgr9.html?id=96f8b929514a423d8cb220fbe54bb940#Pg0)、[IEdmRevisionMgr3](https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmRevisionMgr3.html?id=755088fcb7fc40a99dfb42fb5e5b237e#Pg0) 等。

扩展系统的最流行方式是通过实现 [IEdmAddIn5](https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5.html) SOLIDWORKS PDM API 接口来实现插件。

## .NET 中的 Interop

如果您正在使用 .NET（C# 或 VB.NET）构建应用程序，则需要使用 SOLIDWORKS PDM API interop 来访问 API 方法的签名。

### Framework 4.0 或更高版本

您需要添加对 *EPDM.Interop.epdm.dll* 的引用，该文件位于 PDM 的安装文件夹中（通常为 *C:\Program Files\SOLIDWORKS PDM\EPDM.Interop.epdm.dll*）。

请注意，虽然您可以添加对 *EdmInterface.dll*（类型库）的引用，这将生成 *Interop.EdmLib.dll*，供 .NET 使用，但此 interop 将没有强名称，可能会与其他插件产生冲突。

建议将 *Embed Interop Types* 选项设置为 *False*，否则插件可能会出现问题。

### Framework 2.0 或更早版本

较新版本的 SOLIDWORKS PDM 不提供与 .NET Framework 2.0 或更早版本兼容的 interop。因此，需要从类型库（*EdmInterface.dll*）生成此 interop。

要么直接将此引用添加到您的项目中（通常为 *C:\Program Files\SOLIDWORKS PDM\EdmInterface.dll*），在重新构建后，此操作将在 bin 文件夹中生成 *Interop.EdmLib.dll*，您可以通过其他项目引用它。

要么，可以使用 [tlbim.exe](https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer) 实用程序使用以下命令生成 interop：

~~~
> TlbImp.exe "EdmInterface.dll" "/out:Interop.EdmLib.dll" /namespace:EdmLib
~~~
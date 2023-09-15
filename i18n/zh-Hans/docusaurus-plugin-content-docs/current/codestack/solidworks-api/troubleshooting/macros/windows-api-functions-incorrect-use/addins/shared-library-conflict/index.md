---
layout: sw-addin-fix
title: 如何修复SOLIDWORKS插件共享公共库的错误
caption: 使用共享库的插件无法一起工作
description: 通过启用绑定重定向来解决使用不同版本的共享库的问题
labels: [插件, 故障排除, 共享库]
---
## 症状

有几个SOLIDWORKS插件（通常来自同一供应商）无法一起工作。SOLIDWORKS可能会崩溃或表现异常。如果单独加载插件，则插件可以正常工作。

## 原因

当同一个库（即使是不同版本）被同一个应用程序域内的不同项目使用时（例如SOLIDWORKS中的插件），.NET框架将使用缓存的库。缓存的库将是首次访问的库。例如，当单击插件按钮时可能会访问该库。

当库不向后和向前兼容时（即版本同时支持较新和较旧的应用程序），这会导致问题。对于库来说，这通常不是问题，因为行为可能会改变，修复错误或引入回归问题。

这会在解析程序集引用时引入可能的冲突。

## 解决方法

使用[强名称](https://docs.microsoft.com/zh-cn/dotnet/framework/app-domains/how-to-sign-an-assembly-with-a-strong-name)对冲突的程序集进行签名。在这种情况下，将使用特定版本的程序集来解决冲突。

然而，可能出现这样的情况，即主项目A引用了带有版本1的共享dll B，并且还引用了引用了带有版本2的dll B的dll C，这意味着需要同时加载版本1和2的B。由于dll通常编译在同一个目录中，因此要么需要将它们添加到不同的文件夹中，要么使用[Binding Redirect](https://docs.microsoft.com/zh-cn/dotnet/framework/configure-apps/file-schema/runtime/bindingredirect-element)元素来重定向共享库的不同版本：

将以下代码段添加到**app.config**文件中：

~~~ xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
	<runtime>
		<assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
			<dependentAssembly>
				<assemblyIdentity name="[程序集名称]" publicKeyToken="[公钥令牌]" culture="neutral" />
				<bindingRedirect oldVersion="0.0.0.0-9999.9999.9999.9999" newVersion="[当前版本]" />
			</dependentAssembly>
		</assemblyBinding>
	</runtime>
</configuration>
~~~

您可以使用以下代码段从共享库中查找所需的标识信息（即程序集名称、版本、公钥令牌和区域设置）。

~~~ cs
System.Diagnostics.Debug.Print(typeof([共享程序集中的任何类型]).Assembly.FullName);
~~~

这将打印为

~~~
[程序集名称]，Version=[版本]，Culture=[区域设置]，PublicKeyToken=[公钥令牌]
~~~

视频演示：

{% youtube { id: ZeWDoJ5TC7o } %}

在使用绑定重定向时要注意向后兼容性，即从版本1重定向到版本2需要向后兼容，否则此解决方案将无法工作。

如果共享程序集未使用强名称进行签名，则可以通过捕获[AppDomain::AssemblyResolve](https://docs.microsoft.com/zh-cn/dotnet/api/system.appdomain.assemblyresolve?view=netframework-4.8)事件并从方法处理程序返回已解析的程序集来在运行时解决冲突。
---
layout: sw-pdm-addin-fix
title: 修复“在注册表中找不到类ID” PDM插件错误
caption: 在注册表中找不到类ID
description: 当注册SOLIDWORKS PDM插件时出现“...插件注册成功，但在注册表中找不到插件的类ID”错误的故障排除方法
image: class-id-not-found-in-registry.png
labels: [pdm插件, 错误]
---

## 症状

通过PDM管理工具将.NET插件添加到保险库时，会显示以下错误：*从dll 'name.dll'创建插件COM对象时出错。原因：插件注册成功，但在注册表中找不到插件的类ID*

![将插件添加到PDM保险库时出现的错误](class-id-not-found-in-registry.png){ width=450 }

在[调试](/docs/codestack/solidworks-pdm-api/getting-started/add-ins/debugging-best-practices/)时，插件可以正常工作。

## 原因

如果项目使用与SOLIDWORKS PDM不兼容的库，就会出现此错误。例如，[System.Threading.Tasks.Extensions](https://www.nuget.org/packages/System.Threading.Tasks.Extensions/)会导致此问题。即使在项目中未使用该dll，但只要它存在于文件夹中，问题就会重现。

![插件项目的引用树](tasks-extension-reference.png){ width=450 }

## 解决方法

* 找到有问题的dll。注意，建议清除bin（输出）文件夹，因为该dll可能不再在项目中使用，但仍然存在于输出文件夹中。
    * 可能需要逐个注释代码并逐个删除引用，以找到导致问题的dll
* 找到后，检查如何避免使用此dll。该库可能是另一个包的一部分，不一定需要在插件项目中。例如，[System.Threading.Tasks.Extensions](https://www.nuget.org/packages/System.Threading.Tasks.Extensions/)可以作为单元测试的一部分添加到项目中的[Moq](https://www.nuget.org/packages/Moq/)框架中。单元测试二进制文件不应编译到目标插件输出文件夹中。
* 如果无法避免使用该dll，另一种方法是将dll添加为资源文件，并在插件加载时动态复制该dll，并使用[AppDomain::AssemblyResolve](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.assemblyresolve?view=netframework-4.8)通知在运行时正确解析引用。
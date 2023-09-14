---
title: SwEx - 简化使用SOLIDWORKS API的开发框架
caption: SwEx
description: 用于扩展SOLIDWORKS功能和利用API的库
image: logo.png
categories: sw-labs
group: For Developers
toc-group-name: labs-solidworks-swex
type: sw-lab
---
![SwEx Framework](logo.png)

SwEx（SOLIDWORKS Extra或SOLIDWORKS Extended）是一个框架，旨在简化使用.NET（C#和VB.NET）开发SOLIDWORKS软件。

该框架提供了实现软件设计原则（如[S.O.L.I.D](https://en.wikipedia.org/wiki/SOLID)）的实用工具，用于开发可维护和可扩展的SOLIDWORKS解决方案。

该框架涵盖了SOLIDWORKS API功能的3个主要部分：

* [插件](add-in) - 插件骨架、命令、菜单、工具栏、事件管理、数据访问
* [属性管理器页面](pmpage) - 使用数据绑定构建本机属性管理器页面
* [宏特征](macro-feature) - 构建参数化的本机特征

框架源代码可在GitHub上获得。

* [SwEx.AddIn](https://github.com/codestackdev/swex-addin)
* [SwEx.PMPage](https://github.com/codestackdev/swex-pmpage)
* [SwEx.MacroFeature](https://github.com/codestackdev/swex-macrofeature)
---
title: 使用API自动化SOLIDWORKS应用程序框架、菜单和工具栏
caption: 应用程序
description: 收集有关自定义SOLIDWORKS应用程序框架、菜单和工具栏以及管理文档的文章和代码示例。
image: solidworks-application-api.png
sidebar_position: 0
---
![SOLIDWORKS应用程序API](solidworks-application-api.png){ width=350 }

本节包含有关使用API自定义SOLIDWORKS应用程序框架和管理文档的文章和代码示例。

第三方插件和宏可以扩展和修改SOLIDWORKS应用程序的主框架。这包括：

* 将菜单和命令组添加到标题菜单中
* 创建带有命令的工具栏
* 创建命令选项卡，并将工具栏和命令放置在选项卡和组下面
* 创建特定于各种选择实体的上下文菜单
* 查找有关现有命令的信息，例如命令名称和屏幕上的XY坐标

尽管一些自定义可以在宏中实现，但在大多数情况下，所有与用户界面相关的更改都将在插件应用程序中进行。
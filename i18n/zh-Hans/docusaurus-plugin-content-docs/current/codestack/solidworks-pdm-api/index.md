---
title:  SOLIDWORKS PDM Professional API
caption: PDM Professional (EPDM) API
---
 SOLIDWORKS PDM Professional（以前称为SOLIDWORKS EPDM）API的概述，示例，教程和代码片段
image: solidworks-pdm-api.svg
labels: [epdm]
sidebar_position: 0
---
![SOLIDWORKS PDM API](solidworks-pdm-api.svg){ width=250 }

SOLIDWORKS PDM Professional（以前称为SOLIDWORKS EPDM）是一种产品数据管理系统，可用于管理CAD文档的生命周期。

主要功能包括：

* 集中式保险库以保护数据文件
* 数据卡用于管理元数据
* 工作流管理
* 用户访问管理
* BOM（Bill of Materials）管理
* 并发文件访问管理
* 与SOLIDWORKS和其他CAD系统（如AutoCAD，Solid Edge，ProE等）的集成

SOLIDWORKS PDM是一个高度可配置的系统，可以根据特定的业务流程进行定制。

SOLIDWORKS PDM API提供了访问大量API接口的功能，可以扩展PDM的功能。这包括但不限于：

* 创建自动化任务插件，并能够在远程服务器上执行
* 创建序列号插件
* 通过SOLIDWORKS PDM钩子处理各种事件：文件签入/签出，工作流更改等
* 扩展菜单和工具栏

本节包含了最常见的SOLIDWORKS PDM API功能的教程、代码示例和片段。
---
title:  从独立应用程序或宏调用SOLIDWORKS插件的函数
caption: 调用插件函数
---
 从独立应用程序或宏（启用插件自定义API）调用SOLIDWORKS插件的函数的示例和说明
labels: [插件API,调用]
---
本节包含示例和说明如何为SOLIDWORKS插件创建API，以便可以从[宏](/docs/codestack/solidworks-api/getting-started/macros/)、[独立应用程序](/docs/codestack/solidworks-api/getting-started/stand-alone/)、[脚本](/docs/codestack/solidworks-api/getting-started/scripts/)或其他[插件](/docs/codestack/solidworks-api/getting-started/add-ins/)中调用其函数。

在需要自动化插件本身时，可能需要启用插件的API函数。这种方法还可以帮助提高性能。由于插件是进程内应用程序，因此它们提供了最佳的性能。在这种情况下，插件可以充当从宏或其他插件触发的功能的引擎，因此性能是最佳的。

有几种方法可以实现此功能。请查看以下选项以获取更多信息：

* [通过插件对象](#通过插件对象)
* [通过运行对象表（ROT）](#通过ROT)
* [通过外部进程中的内部调用](#内部调用)
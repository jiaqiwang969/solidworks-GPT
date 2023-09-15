---
title:  将参数传递给SOLIDWORKS VBA宏
caption: 将参数传递给VBA宏
---
 从外部应用程序向SOLIDWORKS VBA宏传递参数的解决方法
labels: [参数,互操作性]
---
SOLIDWORKS VBA宏不接受自定义参数作为输入，因此无法将用户参数传递给[ISldWorks::RunMacro2](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~runmacro2.html)方法。这个限制可能是使用API自动化SOLIDWORKS的主要障碍。

在某些情况下，这可能是一个方便的功能，例如在更大的自动化过程中，多个宏需要共享相同的参数（例如输出位置、时间戳等）。或者是从服务器应用程序或通过调度软件启动的过程，需要将输入传递给宏。

本节介绍了几种传递参数给SOLIDWORKS VBA宏的替代方法，并提供了示例。

* [通过剪贴板](#通过剪贴板)
* [通过SWB宏](#通过SWB宏)
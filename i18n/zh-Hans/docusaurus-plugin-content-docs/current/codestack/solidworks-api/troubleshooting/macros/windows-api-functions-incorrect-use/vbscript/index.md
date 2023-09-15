---
title: 使用vbScript自动化SOLIDWORKS的SOLIDWORKS API
caption: vbScript
description: 介绍使用vbScript和SOLIDWORKS API进行SOLIDWORKS自动化
---
vbScript是一种基于Visual Basic的流行脚本语言。它轻量且在Windows上原生支持。代码可以在任何文本编辑器（例如记事本）中进行编辑。

脚本可以通过直接执行（即双击）或从命令行运行。命令行选项还支持输入参数。

vbScript是后期绑定的，不需要使用*As*关键字显式声明变量类型。

vbScript支持通过::CreateObject和::GetObject方法创建或连接到COM对象，这意味着它可以使用SOLIDWORKS API进行自动化。

使用以下代码连接到SOLIDWORKS实例：

``` vb
Dim swApp
Set swApp = CreateObject("SldWorks.Application")
```
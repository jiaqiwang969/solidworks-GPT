---
title:  使用 SOLIDWORKS API 中的 Callouts 对象进行模型注释
caption: Callouts
---
 使用 SOLIDWORKS API 中的 Callouts 对象进行模型注释（类似于气球），链接到实体并使用自定义数据显示
sidebar_position: 1
labels: [callout, balloons]
---
在 SOLIDWORKS 中，Callouts 是类似气球的对象，可以附加到实体上（通常通过选择），并显示有关实体的附加信息。Callouts 不会随着模型的缩放而改变大小，并且即使模型旋转，它们也会保持相同的方向。

Callouts 是临时对象，通常在选择被清除或操作完成后被销毁。

SOLIDWORKS 中最常见的 Callouts 示例是测量工具。当选择实体时，测量结果会显示在 Callouts 中。

SOLIDWORKS API 通过 [ISwCalloutHandler 接口](https://help.solidworks.com/2018/english/api/swpublishedapi/solidworks.interop.swpublished~solidworks.interop.swpublished.iswcallouthandler.html) 提供了创建 Callouts 的能力。该处理程序允许创建 Callout 的定义并处理相关事件。

Callouts 可以以只读方式显示，也可以捕获用户输入的值。Callouts 可以具有不同的颜色，可以是单行或多行。

本节包含使用 SOLIDWORKS API 创建、显示和处理 Callouts 的宏和代码示例。
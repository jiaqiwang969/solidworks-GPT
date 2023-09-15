---
title:  使用SOLIDWORKS API中的Callouts对象进行模型注释
caption: Callouts
---
 使用SOLIDWORKS API的Callouts对象对模型进行注释（类似于气球），链接到实体并显示自定义数据
sidebar_position: 1
labels: [callout, balloons]
---
在SOLIDWORKS中，Callouts是类似气球的对象，可以附加到实体上（通常是通过选择），并显示有关实体的附加信息。Callouts不会随着模型的缩放而改变大小，并且即使模型旋转，它们也会保持相同的方向。

Callouts是临时对象，通常在选择被清除或操作完成后被销毁。

SOLIDWORKS中最常见的Callouts示例是测量工具。当选择实体时，测量结果会显示在Callouts中。

SOLIDWORKS API通过[ISwCalloutHandler接口](https://help.solidworks.com/2018/english/api/swpublishedapi/solidworks.interop.swpublished~solidworks.interop.swpublished.iswcallouthandler.html)实现了创建Callouts的功能。该处理程序允许创建Callout的定义并处理相关事件。

Callouts可以以只读方式显示，也可以捕获用户输入的值。Callouts可以具有不同的颜色，可以是单行或多行。

本节包含使用SOLIDWORKS API创建、显示和处理Callouts的宏和代码示例。
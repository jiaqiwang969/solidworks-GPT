---
title: 使用SOLIDWORKS API在模型中存储数据
caption: 数据存储
description: 一系列文章和代码示例，演示如何使用SOLIDWORKS API在SOLIDWORKS模型中存储不同类型的数据（第三方存储、属性、自定义属性）
image: solidworks-model-data-storage.png
sidebar_position: 0
---
![通过API在模型中存储用户数据](solidworks-model-data-storage.png){ width=250 }

SOLIDWORKS提供了多种使用API在SOLIDWORKS模型中存储自定义用户数据（如文本、数字或更复杂的类型，如图像或视频）的方法。最常见的方法有：

## 自定义属性

允许在模型或配置中添加自定义键值对。键的类型是不区分大小写的字符串，必须在作用域内（即文档级别或配置级别）是唯一的。值的类型可以是文本、数字、日期和布尔值（是或否）。用户可以编辑自定义属性。

## 属性

属性是添加到特征树中的自定义特征，可以保存带有值（字符串或数字）的参数。属性还可以与可选择的对象（面、顶点、边和组件）关联。属性不能与草图段关联。属性可以在特征树中隐藏。属性不能从用户界面更改。

## 第三方存储

SOLIDWORKS允许在主模型流中创建自定义COM存储。可以在此流中序列化/反序列化任何自定义数据。

本节包含了使用上述技术在模型中保存数据的宏和代码示例，使用SOLIDWORKS API。
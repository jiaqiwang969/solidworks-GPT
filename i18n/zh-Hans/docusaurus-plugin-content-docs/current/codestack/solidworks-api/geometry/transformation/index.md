---
title:  使用变换在SOLIDWORKS API中操作
caption: 变换
---
 使用SOLIDWORKS API应用和读取变换（组件、实体、草图等）
sidebar_position: 2
labels: [transform,math]
---
在SOLIDWORKS API中，变换使用[IMathTransform](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathtransform.html)接口表示。这是一个4x4的变换矩阵，保存了变换、缩放和平移的信息。

矩阵数组由16个双精度数（0到15）表示，按照以下顺序排列：

|||||
|-|-|-|-|
|0|1|2|13|
|3|4|5|14|
|6|7|8|15|
|9|10|11|12|

0-8 - 矩阵的旋转部分

9-11 - 矩阵的平移部分（x、y、z）

12 - 缩放因子

13-15 - 未使用

矩阵描述了SOLIDWORKS中各种元素的方向和平移，例如：

* 组件在装配体中的位置
* 实体的相对移动
* 草图坐标系与模型坐标系之间的关系
* 相机方向和模型视图旋转

在一个非常简单的表示中，您可以将变换视为您需要应用于原始位置（位置、旋转）以到达目标位置的值。

![transform.svg](transform.svg){ width=250 }

## 单位矩阵

表示无旋转、缩放或变换的单位矩阵等于

### Visual Basic

~~~ vb
Dim dMatrix(15) As Double
dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0
dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0
dMatrix(8) = 1: dMatrix(9) = 0: dMatrix(10) = 0: dMatrix(11) = 0
dMatrix(12) = 1: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0
~~~

### C#

~~~ cs
var matrix = new double[]
{
    1, 0, 0, 0,
    1, 0, 0, 0,
    1, 0, 0, 0,
    1, 0, 0, 0
};
~~~

[IMathUtility](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathutility.html)是一个SOLIDWORKS API实用程序接口，提供基于输入参数（如旋转角度、平移、原始数据）的变换组合操作的访问。

在计算变换和平移时，通常使用以下接口：

* [IMathVector](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathvector.html)
* [IMathPoint](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathpoint.html)

本示例包含了解使用变换矩阵的文章和教程。
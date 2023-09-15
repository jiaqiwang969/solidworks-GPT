---
title:  在SOLIDWORKS API中使用宏特征
caption: 宏特征
---
 使用SOLIDWORKS API解释和示例宏特征（自定义特征）的用法
sidebar_position: 14
---
{% youtube { id: tE_OVE9YTMs } %}

宏特征是一种可以通过SOLIDWORKS API进行配置的特征，它提供与任何本机SOLIDWORKS特征相同的功能。

宏特征被插入到特征管理器树中，可以移动、删除、抑制或编辑。

可以通过[IFeatureManager::InsertMacroFeature3](https://help.solidworks.com/2014/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IFeatureManager~InsertMacroFeature3.html)方法插入宏特征。

宏特征定义在[IMacroFeatureData](https://help.solidworks.com/2014/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMacroFeatureData.html) SOLIDWORKS API接口中。

## 宏特征的类型

宏特征有两种主要类型：基于宏和基于COM。这两个选项提供相同级别的功能，只是支持的编程语言和部署和维护方式有所不同。

### 基于宏的宏特征

这种宏特征只能从VBA宏创建。

#### 优点
* 宏可以完全嵌入到模型中，允许特征在任何机器上运行，无需运行任何宏或安装任何附加组件。
* 宏特征可以在宏模块中完全定义，因此不需要注册任何其他软件。

#### 限制
* 可维护性。除非删除特征，否则无法更新嵌入的宏源代码。但是可以禁用此选项，以便代码集中化。

### 基于COM的宏特征

可以通过注册负责处理宏特征功能的COM服务器，使用与COM兼容的语言（C++、C#、VB.NET）创建此宏特征。

#### 优点
* COM对象中的集中化源代码。简单的维护和更新。

#### 限制
* 需要在使用宏特征的所有工作站上注册COM对象。

## 功能

* 在特征重建时执行自定义代码
    * 按需重建（ctrl+Q或ctrl+B）
    * 自动重建
* 生成或修改实体和曲面体，包括模式
* 添加尺寸
* 在宏特征定义中存储自定义参数
* 与其他实体的关系
* 支持装配体中的上下文编辑
* 支持修改编辑
* 支持自定义错误
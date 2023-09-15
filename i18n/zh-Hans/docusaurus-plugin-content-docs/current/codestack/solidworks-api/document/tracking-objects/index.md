---
title:  在SOLIDWORKS API中使用临时和持久ID跟踪对象
caption: 跟踪对象
---
 这个系列的文章解释了如何在几何操作或跨会话时跟踪不同的对象
sidebar_position: 13
labels: [跟踪, ID, 持久, 引用]
---
在开发与SOLIDWORKS实体交互的应用程序时，有时需要引用某些对象并在不同操作中跟踪它们。例如，在模板模型中查找特定特征或在修改面（分割或合并）后识别用户选择的面。

下面描述了多种不同的方法，使用SOLIDWORKS API可以标记和跟踪不同的元素。

## 持久引用ID

允许检索SOLIDWORKS模型中任何可选择对象的持久ID。可以通过[SOLIDWORKS API方法IModelDocExtension::GetObjectByPersistReference3](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~getobjectbypersistreference3.html)快速查找元素的指针。这种方法的主要缺点是ID的大小，每个实体大约为250字节。因此，如果需要跟踪数千个元素，由于内存消耗，这可能不是理想的方法。

请参阅[持久引用ID](/docs/codestack/solidworks-api/document/tracking-objects/persist-references/)文章了解更多信息

## 内部ID

各种元素组的ID（草图元素、特征等）。内部ID只消耗少量内存（表示为1或2个整数或长整数值）。但是，无法通过内部ID查找元素，因此不适用于需要通过ID直接访问对象的软件。

请参阅[内部ID](/docs/codestack/solidworks-api/document/tracking-objects/internal-ids/)文章了解更多信息

## 跟踪ID

由API分配并用于跟踪建模操作中的实体（面、边和顶点）。例如，用户在输入实体上选择面，复制并更改该实体（例如分割或合并）。在这种情况下，跟踪ID将保持不变，并且所有分割实体将继承父面的ID。

请参阅[跟踪ID](/docs/codestack/solidworks-api/document/tracking-objects/tracking-ids/)文章了解更多信息

## 名称

名称可供用户通过GUI查看和编辑。由于名称可以轻松更改，因此不应将其用作可靠的跟踪实体的方法。名称适用于使用/修改模板模型的软件。

请参阅[对象名称](/docs/codestack/solidworks-api/document/tracking-objects/names/)文章了解更多信息

## 属性

属性是可以由API创建并添加到特征树中的特定特征。可选择地，属性可以与可选择对象关联，从而实现跟踪。与宏特征不同，属性是本机特征，并且在未安装创建属性的应用程序的环境中仍然可用。

请参阅[属性](/docs/codestack/solidworks-api/data-storage/attributes/)文章了解更多信息

请参阅下面的比较表，根据以下标准对上述所有方法进行分类：

* *生命周期* - ID可用的时间长度
* *大小* - 单个元素的ID消耗的内存
* *可见性* - 用户是否可见此ID
* *可更改性* - 用户或API是否可以更改ID
* *可搜索性* - 是否可以直接从ID检索引用，而无需遍历所有元素
* *自动释放* - 当父元素被销毁（例如删除）时，ID是否自动释放

|跟踪类型|生命周期|大小|可见性|可更改性|可搜索性|自动释放|
|---|---|---|---|---|---|---|
|持久引用ID|持久|~250字节|否|否|是|是|
|内部ID|持久|2-8字节|否|否|否|是|
|跟踪ID|重建前临时|2字节|否|否|否|是|
|名称|持久|通常10-20字节|是|是|是|是|
|属性|除非删除，否则持久|~1千字节|可以隐藏或可见|是|是|否|
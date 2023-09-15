---
title:  SOLIDWORKS Document Manager API简介
caption: Document Manager API
---
 包含使用SOLIDWORKS Document Manager库的示例和文章的集合
image: document-manager-api.svg
labels: [document manager]
redirect-from:
  - /2018/04/document-manager-api-getting-started.html
sidebar_position: 0
---
![SOLIDWORKS Document Manager API](document-manager-api.svg){ width=150 }

本节介绍了SOLIDWORKS Document Manager API，这是由SOLIDWORKS提供的功能强大的独立库，可以公开API并允许直接从SOLIDWORKS文件流中读取和写入元数据。

## 优势

* 对于订阅的客户或SOLIDWORKS合作伙伴（研究、解决方案或黄金），免费提供
* 轻量级 - 库的大小约为13 MB
* 独立 - 不需要安装SOLIDWORKS即可访问文件
* 快速 - 直接从流中访问数据，无需将完整文件加载到内存中

## 支持的功能

与完整的SOLIDWORKS API相比，Document Manager的功能有限。以下是Document Manager库支持的主要模块列表。

* 基本功能
	* 读取/写入自定义属性（包括配置特定和摘要信息）
    * 读取文件关系（装配件清单和图纸）
    * 替换文件关系（组件和图纸视图引用）
    * 读取装配件中的组件变换
    * 读取模型和图纸中的表格数据
    * 读取[第三方存储数据](https://help.solidworks.com/2015/english/api/sldworksapiprogguide/overview/third-party_data_in_solidworks_files.htm)
    * 获取有关配置、图纸视图及其属性的信息
	
* 预览功能
	* 从文件和配置获取2D图像预览
	
* DimXpert功能
	* 访问DimXpert尺寸
    * 访问DimXpert特征
	
* 几何流功能
	* 获取Parasolid几何体

* XML流功能
	* 读取嵌入式装配XML数据
    * 读取3D Content Central数据
	
* 曲面细分功能
	* 获取曲面细分（三角化）数据（如果存储在模型中）

## 应用场景

使用SOLIDWORKS Document Manager API可以开发的可能应用程序列表包括但不限于以下类型的软件：

* 产品数据管理（PDM）或产品生命周期管理（PLM）应用程序
	* 物料清单
    * 预览
    * 属性
* SOLIDWORKS文件的3D查看器
* 具有导入SOLIDWORKS文件要求的CAD系统
* 具有访问DimXpert数据要求的检测软件

请参阅[入门指南](getting-started)文章，了解使用Document Manager进行开发所需的步骤概述。
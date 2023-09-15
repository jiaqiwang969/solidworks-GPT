---
title:  在SOLIDWORKS文档管理器API中利用主要的ISwDMApplication应用程序对象
caption: 应用程序
---
 解释和示例SOLIDWORKS文档管理器API中的顶级对象ISwDMApplication
---

[ISwDMApplication](https://help.solidworks.com/2017/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmapplication.html)是SOLIDWORKS文档管理器API层次结构中的顶级对象，代表应用程序本身。

可以通过[ISwDMClassFactory::GetApplication](https://help.solidworks.com/2017/english/api/swdocmgrapi/SOLIDWORKS.Interop.swdocumentmgr~SOLIDWORKS.Interop.swdocumentmgr.ISwDMClassFactory~GetApplication.html)方法访问该对象的指针。

### 功能

* 访问文档（即打开文档流）
* 对文档进行操作（移动、复制），并能够保留引用
* 创建数据对象（如搜索选项或外部引用选项）
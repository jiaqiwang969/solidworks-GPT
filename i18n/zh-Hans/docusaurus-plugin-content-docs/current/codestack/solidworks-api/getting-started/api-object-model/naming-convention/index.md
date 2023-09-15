---
title:  SOLIDWORKS API中的方法和属性命名
caption: 命名约定
---
 SOLIDWORKS API对象模型（即OpenDoc6 vs OpenDoc5）中方法、属性和接口的命名约定的解释
image: obsolete-api-interface.png
labels: [已过时,版本,编号]
---
SOLIDWORKS API（以及SOLIDWORKS本身）都是向后兼容的，这意味着旧版本的API与新版本的SOLIDWORKS兼容。这意味着当新版本发布时，API方法的签名和行为不应更改。为此，SOLIDWORKS引入了方法和接口名称的修订系统。每当有新版本的API可用时，它将作为**MethodName** *Last Revision + 1*添加到类图中。例如，[ISldWorks::OpenDoc6](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html)是[ISldWorks::OpenDoc5](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc5.html)方法的较新版本。而[IModelDoc2](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html)是[IModelDoc](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc.html)接口的较新（也是当前的）版本。

## 已过时的方法和接口

尽管SOLIDWORKS是向后兼容的，并且所有版本的方法都应该可用，但建议使用与SOLIDWORKS目标程序的最低版本兼容的最新版本。

这样做的主要原因是：

* 已过时的方法（或任何备注和描述）可能在API文档中不可用。因此，可能需要维护先前版本的API帮助文档。

![已过时的IModelDoc API接口](obsolete-api-interface.png){ width=250 }

* 并不总是知道添加替代方法的原因。这可能是由于旧版本方法中存在的某个错误（或行为）导致的，如果使用该方法，则可能会引入未知的副作用。

* 如果出现问题，可能会在寻求支持时遇到问题，因为最明显的建议是将方法升级到新版本，因为较旧的方法可能被视为*无效的保修*。
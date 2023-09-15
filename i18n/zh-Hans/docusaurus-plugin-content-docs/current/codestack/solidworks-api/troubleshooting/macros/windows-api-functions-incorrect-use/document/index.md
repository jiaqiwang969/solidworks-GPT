---
title:  使用SOLIDWORKS API管理文档的用户首选项
caption: 文档选项
---
 本文档收集了一些示例和文章，演示了如何使用SOLIDWORKS API来控制文档选项（用户首选项）。
labels: [document, preferences, options]
---
要管理SOLIDWORKS零件、装配体或绘图的用户首选项（选项），需要使用以下SOLIDWORKS API之一：

用于读取选项：

* [IModelDocExtension::GetUserPreferenceDouble](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceDouble.html)

* [IModelDocExtension::GetUserPreferenceInteger](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceInteger.html) 

* [IModelDocExtension::GetUserPreferenceString](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceString.html)

* [IModelDocExtension::GetUserPreferenceTextFormat](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceTextFormat.html)

* [IModelDocExtension::GetUserPreferenceToggle](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceToggle.html)

用于写入选项：

* [IModelDocExtension::SetUserPreferenceDouble](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceDouble.html)

* [IModelDocExtension::SetUserPreferenceInteger](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceInteger.html) 

* [IModelDocExtension::SetUserPreferenceString](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceString.html)

* [IModelDocExtension::SetUserPreferenceTextFormat](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceTextFormat.html)

* [IModelDocExtension::SetUserPreferenceToggle](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceToggle.html)

本节包含了使用SOLIDWORKS API自动化文档用户首选项的示例和宏。
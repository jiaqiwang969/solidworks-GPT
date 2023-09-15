---
title:  使用SOLIDWORKS API自定义应用程序框架
caption: 框架
---
 使用API自动化SOLIDWORKS框架（菜单、工具栏、命令管理器）
labels: [框架,菜单,工具栏,命令]
---
可以使用[IFrame](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFrame.html)和[ISldWorks](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks.html) SOLIDWORKS API接口自定义SOLIDWORKS应用程序框架中显示的元素，如菜单、命令管理器、选项卡和工具栏。

此外，框架对象通过[IFrame::GetHWnd](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iframe~gethwnd.html)方法提供对SOLIDWORKS窗口句柄的访问，从而可以使用[Windows API来调用SOLIDWORKS命令](https://blog.codestack.net/2019/03/solidworks-api-command-doesnt-exist.html)。

本节包含使用SOLIDWORKS API和Windows API自动化应用程序框架的示例。
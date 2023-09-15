---
title:  使用SwEx.AddIn框架在SOLIDWORKS面板中托管自定义用户控件
caption: 托管用户控件
---
 使用SwEx.AddIn框架在SOLIDWORKS面板（任务窗格、模型视图管理器、特征管理器、选项对话框）中托管自定义用户控件
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
框架简化了在SOLIDWORKS的标准面板中添加和管理[自定义用户控件](https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.usercontrol?view=netframework-4.8)的过程。

* 任务窗格 - 应用程序范围的面板（通常位于SOLIDWORKS窗口的右侧）
* 模型视图管理器 - 文档范围的面板（通常位于文档窗口的模型上）。用于控制自定义模型视图（如动画视图、有限元分析等）
* 特征管理器视图 - 文档范围的面板（特征管理器设计树的选项卡，通常位于SOLIDWORKS文档的右侧）。用于添加自定义特征树元素，如电气树、成本、建筑等。
* 设置 - SOLIDWORKS设置对话框中的自定义页面
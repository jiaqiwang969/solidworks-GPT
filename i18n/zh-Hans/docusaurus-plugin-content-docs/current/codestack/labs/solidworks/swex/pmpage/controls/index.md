---
title:  添加和自定义属性管理器页面的控件
caption: 控件
---
 SwEx.PMPage框架支持的控件概述以及自定义和装饰选项
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
框架会自动为数据模型中的公共属性生成最合适的控件。例如，对于所有数字属性，将生成数字框控件。对于所有字符串属性，将生成文本框控件。对于所有复杂类型，将生成组框。

可以通过属性自定义控件的样式。

## 访问控件

通过[IPropertyManagerPageControlEx](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Controls_IPropertyManagerPageControlEx.htm)包装接口提供对控件的访问。可以通过此接口访问常见属性（如控件ID、启用或可见标志）。可以通过[IPropertyManagerPageControlEx::SwControl](https://docs.codestack.net/swex/pmpage/html/P_CodeStack_SwEx_PMPage_Controls_IPropertyManagerPageControlEx_SwControl.htm)属性访问底层的原生SOLIDWORKS控件。它返回指向相应的[IPropertyManagerPageControl](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpagecontrol.html)的指针，可以将其转换为特定的控件，如[IPropertyManagerPageSelectionbox](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpageselectionbox.html)、[IPropertyManagerPageCombobox](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpagecombobox.html)、[IPropertyManagerPageTextbox](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpagetextbox.html)等。

可以通过[IPropertyManagerPageEx::Controls](https://docs.codestack.net/swex/pmpage/html/P_CodeStack_SwEx_PMPage_Base_IPropertyManagerPageEx_2_Controls.htm)属性访问所有控件。
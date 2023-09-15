---
title:  在SOLIDWORKS Property Page中使用SwEx.PMPage框架创建选项框控件
caption: 选项框
---
 使用SwEx.PMPage框架创建和自定义SOLIDWORKS Property Manager Page选项框控件的概述
image: options-box.png
toc-group-name: labs-solidworks-swex
labels: [选项, pmpage]
sidebar_position: 0
---
![选项框控件](options-box.png)

可以通过使用[OptionBoxAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_OptionBoxAttribute.htm)对类型为Enum的属性进行修饰来定义选项组。

~~~vb
Imports CodeStack.SwEx.Common.Attributes
Imports CodeStack.SwEx.PMPage.Attributes

Public Class OptionBoxDataModel

    Public Enum Options_e
        Option1
        Option2
        <Title("Third Option")>
        Option3
    End Enum

    <OptionBox>
    Public Property Options As Options_e

End Class
~~~

~~~cs
using CodeStack.SwEx.Common.Attributes;
using CodeStack.SwEx.PMPage.Attributes;

public class OptionBoxDataModel
{
    public enum Options_e
    {
        Option1,
        Option2,
        [Title("Third Option")]
        Option3
    }

    [OptionBox]
    public Options_e Options { get; set; }
}
~~~
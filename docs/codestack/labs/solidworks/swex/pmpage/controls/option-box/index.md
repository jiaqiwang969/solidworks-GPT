---
title: Option box control in SOLIDWORKS Property Page with SwEx.PMPage framework
caption: Option Box
description: Overview of SOLIDWORKS Property Manager Page option box control creation and customization using SwEx.PMPage framework
image: options-box.png
toc-group-name: labs-solidworks-swex
labels: [option,pmpage]
sidebar_position: 0
---
![Option box control](options-box.png)

Options group can be defined by decorating the property of type Enum with [OptionBoxAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_OptionBoxAttribute.htm).

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

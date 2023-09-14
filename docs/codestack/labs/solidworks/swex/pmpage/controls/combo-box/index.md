---
title: Combo Box control in SOLIDWORKS property Manager Page
caption: Combo Box
description: Overview of options applied to Combo Box control
image: combobox.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![Combo Box control with 3 options](combobox.png)

Combo box control will be automatically generated for all the properties of enumerator types. All values of enumerators will be considered as the items in the combo box:

~~~vb
Imports CodeStack.SwEx.Common.Attributes
Imports CodeStack.SwEx.My.Resources
Imports CodeStack.SwEx.PMPage.Attributes
Imports SolidWorks.Interop.swconst

Public Class ComboBoxDataModel

    Public Enum Options_e
        Option1
        Option2
        Option3
    End Enum

    <ComboBoxOptions(swPropMgrPageComboBoxStyle_e.swPropMgrPageComboBoxStyle_Sorted)>
    Public Property Options As Options_e

End Class
~~~

~~~cs
using CodeStack.SwEx.Common.Attributes;
using CodeStack.SwEx.PMPage.Attributes;
using CodeStack.SwEx.Properties;
using SolidWorks.Interop.swconst;

public class ComboBoxDataModel
{
    public enum Options_e
    {
        Option1,
        Option2,
        Option3
    }

    [ComboBoxOptions(swPropMgrPageComboBoxStyle_e.swPropMgrPageComboBoxStyle_Sorted)]
    public Options_e Options { get; set; }
}
~~~

Additional options and style for combo box control can be specified via [ComboBoxOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_ComboBoxOptionsAttribute.htm)

### Item Text
[ComboBoxItemTextAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_ComboBoxItemTextAttribute.htm) attribute can be used to specify user friendly title for the items to be shown in the combo box

~~~vb
Imports CodeStack.SwEx.Common.Attributes
Imports CodeStack.SwEx.My.Resources
Imports CodeStack.SwEx.PMPage.Attributes
Imports SolidWorks.Interop.swconst

Public Class ComboBoxDataModel

    Public Enum OptionsCustomized_e
        <Title("First Option")>
        Option1
        <Title(GetType(Resources), NameOf(Resources.Option2Title))>
        Option2
    End Enum

    Public Property Options2 As OptionsCustomized_e

End Class
~~~


~~~cs
using CodeStack.SwEx.Common.Attributes;
using CodeStack.SwEx.PMPage.Attributes;
using CodeStack.SwEx.Properties;
using SolidWorks.Interop.swconst;

public class ComboBoxDataModel
{
    public enum OptionsCustomized_e
    {
        [Title("First Option")] //static title
        Option1,

        [Title(typeof(Resources), nameof(Resources.Option2Title))] //title loaded from resources
        Option2
    }

    public OptionsCustomized_e Options2 { get; set; }
}
~~~

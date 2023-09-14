---
title: Options of SOLIDWORKS Property Manager Page
caption: Page
description: Overview of options applied to the SOLIDWORKS property manager page itself
image: property-manager-page.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![Property Manager Page style](property-manager-page.png)

1. Icon of the property manager page
1. Title of the property manager page
1. Links to documentation (what's new and help)
1. Control buttons (OK and Cancel)
1. Optional user message title
1. Optional user message content

Property manager page style can be customized by applying the [PageOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_PageOptionsAttribute.htm) onto the main class of the data model.

![Property page with OK and Cancel button options](pmpage-options.png)

~~~vb
<PageOptions(swPropertyManagerPageOptions_e.swPropertyManagerOptions_CancelButton Or swPropertyManagerPageOptions_e.swPropertyManagerOptions_OkayButton)>
Public Class DataModelPageOpts
End Class
~~~


~~~cs
[PageOptions(swPropertyManagerPageOptions_e.swPropertyManagerOptions_CancelButton
| swPropertyManagerPageOptions_e.swPropertyManagerOptions_OkayButton)]
public class DataModelPageOpts
{
}
~~~

Attributes allow to customize the buttons and behaviour of the page

## Attribution

![Property page with custom title, icon and message](pmpage-attributes.png)

Page title can be assigned via [DisplayNameAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.displaynameattribute?view=netframework-4.7.2)

Icon can be set via overloaded constructor of [PageOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/M_CodeStack_SwEx_PMPage_Attributes_PageOptionsAttribute__ctor_1.htm)

Custom user message to provide additional information can be set via [MessageAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_MessageAttribute.htm)

~~~vb
<PageOptions(GetType(Resources), NameOf(Resources.PageIcon), swPropertyManagerPageOptions_e.swPropertyManagerOptions_OkayButton)>
<Message("Sample message for property page", "Sample Page")>
<DisplayName("Sample Page")>
Public Class DataModelPageAtts
End Class
~~~

~~~cs
[PageOptions(typeof(Resources), nameof(Resources.PageIcon),
    swPropertyManagerPageOptions_e.swPropertyManagerOptions_OkayButton)]
[Message("Sample message for property page", "Sample Page")]
[DisplayName("Sample Page")]
public class DataModelPageAtts
{
}
~~~


## Help Links

![Property page with help and what's new links](pmpage-help.png)

[HelpAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_HelpAttribute.htm) allows providing links to help resources for your add-in. Framework will automatically open the specified url when user clicks corresponding help buttons in the property manager page:

~~~vb
<Help("<Help URL>", "<What's New URL>")>
Public Class DataModelHelpLinks
End Class
~~~

~~~cs
[Help("<Help URL>", "<What's New URL>")]
public class DataModelHelpLinks
{
}
~~~

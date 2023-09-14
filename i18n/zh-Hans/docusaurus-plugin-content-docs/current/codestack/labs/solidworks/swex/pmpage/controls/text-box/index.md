---
title: Text Box control in SOLIDWORKS Property Manager Page
caption: Text Box
description: Overview of options applied to Text Box control
image: text-box.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![Text Box control](text-box.png)

Text box control will be automatically generated for all properties of type *string*.

~~~vb
Public Class TextBoxDataModel
    Public Property Text As String
End Class
~~~


~~~cs
public class TextBoxDataModel
{
    public string Text { get; set; }
}
~~~


Additional options can be specified via [TextBoxOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_TextBoxOptionsAttribute.htm)

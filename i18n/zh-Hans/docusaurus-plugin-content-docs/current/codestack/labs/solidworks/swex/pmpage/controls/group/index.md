---
title: Group Box in SOLIDWORKS Property Manager Page
caption: Group Box
description: Overview of functionality to groups the controls
image: group-box.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![Group box created from the complex type](group-box.png)

Group box will be automatically created for all complex types in the data model

~~~vb
Public Class GroupDataModel

    Public Class DataGroup
        Public Property Text As String
    End Class

    Public Property Group As DataGroup

End Class
~~~

~~~cs
public class GroupDataModel
{
    public class DataGroup
    {
        public string Text { get; set; }
    }

    public DataGroup Group { get; set; }
}
~~~

> SOLIDWORKS doesn't support groups nested into other groups, so all the nested complex types will be added as the groups to the main property manager page.

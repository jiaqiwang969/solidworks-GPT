---
title:  SOLIDWORKS 属性管理器页面中的选项卡控件
caption: 选项卡
---
 使用 SwEx.PMPage 框架在属性管理器页面中创建选项卡控件
image: pmpage-tab.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![属性管理器页面中的控件分组在选项卡中](pmpage-tab.png)

使用 [TabAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_TabAttribute.htm) 对复杂类型进行装饰，可以创建选项卡容器。

~~~vb
Imports CodeStack.SwEx.Common.Attributes
Imports CodeStack.SwEx.My.Resources
Imports CodeStack.SwEx.PMPage.Attributes

Public Class TabDataModel

	<Tab>
	<Icon(GetType(Resources), NameOf(Resources.OffsetImage))>
	Public Class TabControl1
		Public Property Field1 As String
	End Class

	Public Property Tab1 As TabControl1

End Class
~~~

~~~cs
using CodeStack.SwEx.Common.Attributes;
using CodeStack.SwEx.PMPage.Attributes;
using CodeStack.SwEx.Properties;

public class TabDataModel
{
    [Tab]
    [Icon(typeof(Resources), nameof(Resources.OffsetImage))]
    public class TabControl1
    {
        public string Field1 { get; set; }
    }

    public TabControl1 Tab1 { get; set; }

}
~~~


## 带有嵌套分组的选项卡

控件可以直接添加到选项卡中，也可以位于嵌套分组中：

~~~vb
Public Class TabControl2
	Public Class Group1
		Public Property Field2 As Integer
	End Class

	Public Property Group As Group1
	Public Property Field3 As Boolean
End Class

<Tab>
Public Property Tab2 As TabControl2
~~~

~~~cs
public class TabControl2
{
    public class Group1
    {
        public int Field2 { get; set; }
    }

    public Group1 Group { get; set; }
    public bool Field3 { get; set; }
}

[Tab]
public TabControl2 Tab2 { get; set; }
~~~
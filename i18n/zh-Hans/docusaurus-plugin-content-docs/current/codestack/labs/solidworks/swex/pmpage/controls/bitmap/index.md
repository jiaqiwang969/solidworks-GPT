---
title:  SOLIDWORKS 属性管理器页面中的位图控件
caption: 位图
---
 使用 SwEx.PMPage 框架在属性管理器页面中创建位图控件
image: bitmap.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![位图控件](bitmap.png)

对于 [Image](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.image?view=netframework-4.8) 类型或其他可从该类型分配的类型（例如 [Bitmap](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.bitmap?view=netframework-4.8)），在属性管理器页面中创建静态位图。

~~~vb
Imports CodeStack.SwEx.PMPage.Attributes
Imports System.Drawing
Imports CodeStack.SwEx.My.Resources

Public Class BitmapDataModel

    Public Property Bitmap As Image = Resources.BitmapSample

End Class
~~~


~~~cs
using CodeStack.SwEx.PMPage.Attributes;
using CodeStack.SwEx.Properties;
using System.Drawing;

public class BitmapDataModel
{
    public Image Bitmap { get; set; } = Resources.BitmapSample;

}
~~~

## 位图大小

位图的默认大小为 18x18 像素，但可以使用 [BitmapOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_BitmapOptionsAttribute.htm) 来覆盖它，通过在构造函数参数中提供宽度和高度值：

~~~vb
<BitmapOptions(48, 48)>
Public Property BitmapLarge As Image = Resources.BitmapSample
~~~

~~~cs
[BitmapOptions(48, 48)]
public Image BitmapLarge { get; set; } = Resources.BitmapSample;
~~~

> 由于 SOLIDWORKS API 的限制，在属性管理器页面显示后，无法将位图作为 [动态值](/docs/codestack/labs/solidworks/swex/pmpage/controls/dynamic-values/) 进行更改。请在数据模型类的构造函数中或作为属性的默认值中分配图像。
---
title: SOLIDWORKS 属性管理器页面中的按钮控件
caption: 按钮
description: 使用 SwEx.PMPage 框架在属性管理器页面中创建按钮控件
image: button.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![按钮控件](button.png)

要在属性管理器页面中创建按钮，需要声明委托类型 [Action](https://docs.microsoft.com/zh-cn/dotnet/api/system.action?view=netframework-4.8) 的属性。

将指向 void 函数的指针分配给此属性，作为按钮的处理程序：

~~~vb
Public Class ButtonDataModel

    Public ReadOnly Property Button As Action
        Get
            Return AddressOf OnButtonClick
        End Get
    End Property

    Private Sub OnButtonClick()
        'TODO: 处理按钮点击事件
    End Sub

End Class
~~~

~~~cs
using System;

public class ButtonDataModel
{
    public Action Button => OnButtonClick;

    private void OnButtonClick()
    {
        //TODO: 处理按钮点击事件
    }
}
~~~
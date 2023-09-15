---
title: SOLIDWORKS Property Manager Page关闭事件处理
caption: 关闭
description: 介绍在SwEx.PMPage框架中处理SOLIDWORKS属性管理器页面关闭的事件概述
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
## 关闭前事件
[PropertyManagerPageHandlerEx::Closing](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_Closing.htm)事件在属性管理器页面即将关闭时触发。

框架传递了关闭的原因和[closing argument](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Base_ClosingArg.htm)，它允许取消属性管理器页面的关闭并向用户显示错误提示。

~~~vb
Public Class DataModel
    Public Property Text As String
End Class

Private m_Data As DataModel
Private m_Page As PropertyManagerPageEx(Of MyPMPageHandler, DataModel)

Public Overrides Function OnConnect() As Boolean
    m_Data = New DataModel
    m_Page = New PropertyManagerPageEx(Of MyPMPageHandler, DataModel)(App)

    AddHandler m_Page.Handler.Closing, AddressOf OnClosing
    Return True
End Function

Private Sub OnClosing(ByVal reason As swPropertyManagerPageCloseReasons_e, ByVal arg As ClosingArg)
    If reason = swPropertyManagerPageCloseReasons_e.swPropertyManagerPageClose_Okay Then

        If String.IsNullOrEmpty(m_Data.Text) Then
            arg.Cancel = True
            arg.ErrorTitle = "插入注释错误"
            arg.ErrorMessage = "请指定注释文本"
        End If
    End If
End Sub
~~~

~~~cs
public class DataModel
{
    public string Text { get; set; }
}

private DataModel m_Data;

private PropertyManagerPageEx<MyPMPageHandler, DataModel> m_Page;

public override bool OnConnect()
{
    m_Data = new DataModel();
    m_Page = new PropertyManagerPageEx<MyPMPageHandler, DataModel>(App);

    m_Page.Handler.Closing += OnClosing;

    return true;
}

private void OnClosing(swPropertyManagerPageCloseReasons_e reason, ClosingArg arg)
{
    if (reason == swPropertyManagerPageCloseReasons_e.swPropertyManagerPageClose_Okay)
    {
        if (string.IsNullOrEmpty(m_Data.Text))
        {
            arg.Cancel = true;
            arg.ErrorTitle = "插入注释错误";
            arg.ErrorMessage = "请指定注释文本";
        }
    }
}
~~~

此事件在属性管理器页面对话框仍可见时触发。在此处理程序中不应执行重建操作，包括直接重建以及任何新的特征或几何体的创建或修改（除了临时体）。请注意，某些操作（例如保存）可能也不受支持。通常情况下，如果在属性页面打开时无法从用户界面执行某个操作，则也不应通过API从关闭事件调用该操作。否则，这可能会导致不稳定性，包括崩溃。请使用[后关闭事件](#post-closing-event)来执行任何重建操作。

在某些情况下，需要在属性管理器页面保持打开的情况下执行此操作。通常情况下，当页面支持固定（[PageOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_PageOptionsAttribute.htm)中的[swPropertyManagerOptions_PushpinButton](https://help.solidworks.com/2016/english/api/swconst/SOLIDWORKS.Interop.swconst~SOLIDWORKS.Interop.swconst.swPropertyManagerPageOptions_e.html)枚举的标志）时会发生这种情况。在这种情况下，需要在[PageOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_PageOptionsAttribute.htm)中设置[swPropertyManagerOptions_LockedPage](https://help.solidworks.com/2016/english/api/swconst/SOLIDWORKS.Interop.swconst~SOLIDWORKS.Interop.swconst.swPropertyManagerPageOptions_e.html)枚举的标志。这将启用从[PropertyManagerPageHandlerEx::Closing](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_Closing.htm)事件中进行重建操作和特征创建的支持。

## 后关闭事件

[PropertyManagerPageHandlerEx::Closed](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_Closed.htm)事件在属性管理器页面关闭时触发。

使用此处理程序执行所需的操作。

~~~vb
Public Class DataModel
    Public Property Text As String
End Class

Private m_Data As DataModel
Private m_Page As PropertyManagerPageEx(Of MyPMPageHandler, DataModel)

Public Overrides Function OnConnect() As Boolean
    m_Data = New DataModel
    m_Page = New PropertyManagerPageEx(Of MyPMPageHandler, DataModel)(App)

    AddHandler m_Page.Handler.Closed, AddressOf OnClosed
    Return True
End Function

Private Sub OnClosed(ByVal reason As swPropertyManagerPageCloseReasons_e)
    If reason = swPropertyManagerPageCloseReasons_e.swPropertyManagerPageClose_Okay Then
        'TODO: do work
    Else
        'TODO: release resources
    End If
End Sub
~~~

~~~cs
public class DataModel
{
    public string Text { get; set; }
}

private DataModel m_Data;

private PropertyManagerPageEx<MyPMPageHandler, DataModel> m_Page;

public override bool OnConnect()
{
    m_Data = new DataModel();
    m_Page = new PropertyManagerPageEx<MyPMPageHandler, DataModel>(App);

    m_Page.Handler.Closed += OnClosed;

    return true;
}

private void OnClosed(swPropertyManagerPageCloseReasons_e reason)
{
    if (reason == swPropertyManagerPageCloseReasons_e.swPropertyManagerPageClose_Okay)
    {
        //TODO: do work
    }
    else
    {
        //TODO: release resources
    }
}
~~~
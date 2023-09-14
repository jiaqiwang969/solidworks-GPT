---
title: SOLIDWORKS Property Manager Page closing events handling
caption: Closing
description: Overview of events associated with closing of SOLIDWORKS property manager page handled in SwEx.PMPage framework
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
## Pre Closing event
[PropertyManagerPageHandlerEx::Closing](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_Closing.htm) event is raised when property manager page is about to be closed.

Framework passes the reason of close and [closing argument](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Base_ClosingArg.htm) which allows to cancel property manager page closing and display error to the user as a tooltip.

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
            arg.ErrorTitle = "Insert Note Error"
            arg.ErrorMessage = "Please specify the note text"
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
            arg.ErrorTitle = "Insert Note Error";
            arg.ErrorMessage = "Please specify the note text";
        }
    }
}
~~~



This event is raised when Property Manager Page dialog is still visible. There should be no rebuild operations performed within this handler, it includes the direct rebuilds but also any new features or geometry creation or modification (with an exception of temp bodies). Note that some operations such as saving may also be unsupported. In general if certain operation cannot be performed from the user interface while property page is opened it shouldn't be called from the closing event via API as well. Otherwise this could cause instability including crashes. Use [Post closing event](#post-closing-event) event to perform any rebuild operations.

In some cases it is required to perform this operation while property manager page stays open. Usually this happens when page supports pining (swPropertyManagerOptions_PushpinButton flag of [swPropertyManagerPageOptions_e](https://help.solidworks.com/2016/english/api/swconst/SOLIDWORKS.Interop.swconst~SOLIDWORKS.Interop.swconst.swPropertyManagerPageOptions_e.html) enumeration in [PageOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_PageOptionsAttribute.htm)). In this case it is required to set the swPropertyManagerOptions_LockedPage flag of [swPropertyManagerPageOptions_e](https://help.solidworks.com/2016/english/api/swconst/SOLIDWORKS.Interop.swconst~SOLIDWORKS.Interop.swconst.swPropertyManagerPageOptions_e.html) enumeration in [PageOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_PageOptionsAttribute.htm). This would enable the support of rebuild operations and feature creation from within the [PropertyManagerPageHandlerEx::Closing](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_Closing.htm) event.

## Post closing event

[PropertyManagerPageHandlerEx::Closed](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_Closed.htm) event is raised when property manager page is closed.

Use this handler to perform the required operations.

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

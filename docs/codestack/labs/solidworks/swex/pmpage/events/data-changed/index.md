---
title: SOLIDWORKS Property Manager Page data changed events handling
caption: Data Change
description: Overview of events associated with data change of SOLIDWORKS property manager page handled in SwEx.PMPage framework
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
SwEx framework provides event handlers for the data changes in the controls. Use this handlers to update preview or any other state which depends on the values in the controls.

## Post data changed event

[PropertyManagerPageHandlerEx::DataChanged](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_DataChanged.htm) event is raised after the user changed the value in the control which has updated the data model. Refer the bound data model for new values.


~~~vb
Public Class DataModel
    Public Property Text As String
End Class

Private m_Data As DataModel
Private m_Page As PropertyManagerPageEx(Of MyPMPageHandler, DataModel)

Public Overrides Function OnConnect() As Boolean
    m_Data = New DataModel
    m_Page = New PropertyManagerPageEx(Of MyPMPageHandler, DataModel)(App)

    AddHandler m_Page.Handler.DataChanged, AddressOf OnDataChanged
    Return True
End Function

Private Sub OnDataChanged()
    Dim text = m_Data.Text
    'TODO: handle the data changing, e.g. update preview
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

    m_Page.Handler.DataChanged += OnDataChanged;

    return true;
}

private void OnDataChanged()
{
    var text = m_Data.Text;
    //TODO: handle the data changing, e.g. update preview
}
~~~

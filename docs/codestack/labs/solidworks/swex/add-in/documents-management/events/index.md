---
title: Handling the common events of SOLIDWORKS file using SwEx.AddIn framework
caption: Common Events
description: Handling of common events (rebuild, selection, configuration change, item modification, custom property modification etc.) using documents management functionality in SwEx.AddIn Framework
toc-group-name: labs-solidworks-swex
labels: [events,rebuild,selection]
---
SwEx.AddIn framework exposes the common events via generic [DocumentHandler](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Core_DocumentHandler.htm):

* Save
* Selection
* Access3rdPartyData
* CustomPropertyModify
* ItemModify
* ConfigurationChange
* Rebuild
* Dimension Change

Call the [ISwAddInEx.CreateDocumentsHandler](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Base_ISwAddInEx_CreateDocumentsHandler.htm)  to create a generic events handler.

It is recommended to use the [HandleCreated](https://docs.codestack.net/swex/add-in/html/E_CodeStack_SwEx_AddIn_Base_IDocumentsHandler_1_HandlerCreated.htm) notification which will notify that new document is loaded to subscribe to the document events.

Unsubscribe from the events from [Destroyed](https://docs.codestack.net/swex/add-in/html/E_CodeStack_SwEx_AddIn_Core_DocumentHandler_Destroyed.htm) notification.

~~~vb
Imports CodeStack.SwEx.AddIn
Imports CodeStack.SwEx.AddIn.Attributes
Imports CodeStack.SwEx.AddIn.Base
Imports CodeStack.SwEx.AddIn.Core
Imports CodeStack.SwEx.AddIn.Delegates
Imports CodeStack.SwEx.AddIn.Enums
Imports SolidWorks.Interop.sldworks
Imports SolidWorks.Interop.swconst
Imports System
Imports System.Runtime.InteropServices

Namespace CodeStack.SwEx
    <AutoRegister>
    <ComVisible(True), Guid("E6BE0C5A-8B24-46B4-98F9-BEC4100BC709")>
    Public Class EventsAddIn
        Inherits SwAddInEx

        Private m_DocHandlerGeneric As IDocumentsHandler(Of DocumentHandler)

        Public Overrides Function OnConnect() As Boolean
            m_DocHandlerGeneric = CreateDocumentsHandler()
            AddHandler m_DocHandlerGeneric.HandlerCreated, AddressOf OnHandlerCreated
            Return True
        End Function

        Private Sub OnHandlerCreated(ByVal doc As DocumentHandler)
            AddHandler doc.Initialized, AddressOf OnInitialized
            AddHandler doc.Activated, AddressOf OnActivated
            AddHandler doc.ConfigurationChange, AddressOf OnConfigurationOrSheetChanged
            AddHandler doc.CustomPropertyModify, AddressOf OnCustomPropertyModified
            AddHandler doc.Access3rdPartyData, AddressOf OnAccess3rdPartyData
            AddHandler doc.ItemModify, AddressOf OnItemModified
            AddHandler doc.Save, AddressOf OnSave
            AddHandler doc.Selection, AddressOf OnSelection
            AddHandler doc.Rebuild, AddressOf OnRebuild
            AddHandler doc.DimensionChange, AddressOf OnDimensionChange
            AddHandler doc.Destroyed, AddressOf OnDestroyed
        End Sub

        Private Sub OnDestroyed(ByVal handler As DocumentHandler)
            RemoveHandler handler.Initialized, AddressOf OnInitialized
            RemoveHandler handler.Activated, AddressOf OnActivated
            RemoveHandler handler.ConfigurationChange, AddressOf OnConfigurationOrSheetChanged
            RemoveHandler handler.CustomPropertyModify, AddressOf OnCustomPropertyModified
            RemoveHandler handler.ItemModify, AddressOf OnItemModified
            RemoveHandler handler.Save, AddressOf OnSave
            RemoveHandler handler.Selection, AddressOf OnSelection
            RemoveHandler handler.Rebuild, AddressOf OnRebuild
            RemoveHandler handler.DimensionChange, AddressOf OnDimensionChange
            RemoveHandler handler.Destroyed, AddressOf OnDestroyed
            Logger.Log($"'{handler.Model.GetTitle()}' destroyed")
        End Sub

        Public Overrides Function OnDisconnect() As Boolean
            RemoveHandler m_DocHandlerGeneric.HandlerCreated, AddressOf OnHandlerCreated
            Return True
        End Function

    End Class
End Namespace
~~~

~~~cs
using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using CodeStack.SwEx.AddIn.Base;
using CodeStack.SwEx.AddIn.Core;
using CodeStack.SwEx.AddIn.Delegates;
using CodeStack.SwEx.AddIn.Enums;
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;
using System;
using System.Runtime.InteropServices;

namespace CodeStack.SwEx
{
    [AutoRegister]
    [ComVisible(true), Guid("76045173-E27C-4DF9-AE5F-147B893CE3DC")]
    public class EventsAddIn : SwAddInEx
    {
        private IDocumentsHandler<DocumentHandler> m_DocHandlerGeneric;

        public override bool OnConnect()
        {
            m_DocHandlerGeneric = CreateDocumentsHandler();
            m_DocHandlerGeneric.HandlerCreated += OnHandlerCreated;
            return true;
        }

        private void OnHandlerCreated(DocumentHandler doc)
        {
            doc.Initialized += OnInitialized;
            doc.Activated += OnActivated;
            doc.ConfigurationChange += OnConfigurationOrSheetChanged;
            doc.CustomPropertyModify += OnCustomPropertyModified;
            doc.Access3rdPartyData += OnAccess3rdPartyData;
            doc.ItemModify += OnItemModified;
            doc.Save += OnSave;
            doc.Selection += OnSelection;
            doc.Rebuild += OnRebuild;
            doc.DimensionChange += OnDimensionChange;
            doc.Destroyed += OnDestroyed;
        }

        private void OnDestroyed(DocumentHandler handler)
        {
            handler.Initialized -= OnInitialized;
            handler.Activated -= OnActivated;
            handler.ConfigurationChange -= OnConfigurationOrSheetChanged;
            handler.CustomPropertyModify -= OnCustomPropertyModified;
            handler.ItemModify -= OnItemModified;
            handler.Save -= OnSave;
            handler.Selection -= OnSelection;
            handler.Rebuild -= OnRebuild;
            handler.DimensionChange -= OnDimensionChange;
            handler.Destroyed -= OnDestroyed;

            Logger.Log($"'{handler.Model.GetTitle()}' destroyed");
        }

        public override bool OnDisconnect()
        {
            m_DocHandlerGeneric.HandlerCreated -= OnHandlerCreated;
            return true;
        }

    }
}
~~~




Event handlers provide additional information about event, such as is it a pre or post notification and any additional parameters. Explore API reference for more information about the passed parameters.

~~~vb
Private Function OnRebuild(ByVal docHandler As DocumentHandler, ByVal type As RebuildState_e) As Boolean
    Logger.Log($"'{docHandler.Model.GetTitle()}' rebuilt ({type})")

    If type = RebuildState_e.PreRebuild Then
        'return false to cancel regeneration
    End If

    Return True
End Function

Private Sub OnInitialized(ByVal docHandler As DocumentHandler)
    Logger.Log($"'{docHandler.Model.GetTitle()}' initialized")
End Sub

Private Function OnSelection(ByVal docHandler As DocumentHandler, ByVal selType As swSelectType_e, ByVal type As SelectionState_e) As Boolean
    Logger.Log($"'{docHandler.Model.GetTitle()}' selection ({type}) of {selType}")

    If type <> SelectionState_e.UserPreSelect Then 'dynamic selection
        'return false to cancel selection
    End If

    Return True
End Function

Private Function OnSave(ByVal docHandler As DocumentHandler, ByVal fileName As String, ByVal type As SaveState_e) As Boolean
    Logger.Log($"'{docHandler.Model.GetTitle()}' saving ({type})")

    If type = SaveState_e.PreSave Then
        'return false to cancel saving
    End If

    Return True
End Function

Private Sub OnItemModified(ByVal docHandler As DocumentHandler, ByVal type As ItemModificationAction_e, ByVal entType As swNotifyEntityType_e, ByVal name As String, ByVal Optional oldName As String = "")
    Logger.Log($"'{docHandler.Model.GetTitle()}' item modified ({type}) of {entType}. Name: {name} (from {oldName})")
End Sub

Private Sub OnCustomPropertyModified(ByVal docHandler As DocumentHandler, ByVal modifications As CustomPropertyModifyData())
    For Each [mod] In modifications
        Logger.Log($"'{docHandler.Model.GetTitle()}' custom property '{[mod].Name}' changed ({[mod].Action}) in '{[mod].Configuration}' to '{[mod].Value}'")
    Next
End Sub

Private Sub OnAccess3rdPartyData(ByVal docHandler As DocumentHandler, ByVal state As Access3rdPartyDataState_e)
    Logger.Log($"'{docHandler.Model.GetTitle()}' accessing 3rd party data ({state})")
End Sub

Private Sub OnConfigurationOrSheetChanged(ByVal docHandler As DocumentHandler, ByVal type As ConfigurationChangeState_e, ByVal confName As String)
    Logger.Log($"'{docHandler.Model.GetTitle()}' configuration {confName} changed ({type})")
End Sub

Private Sub OnDimensionChange(ByVal docHandler As DocumentHandler, ByVal dispDim As IDisplayDimension)
    Dim [dim] = dispDim.GetDimension2(0)
    Logger.Log($"'{docHandler.Model.GetTitle()}' dimension change: {[dim].FullName} = {[dim].Value}")
    Marshal.ReleaseComObject([dim])
    [dim] = Nothing
End Sub

Private Sub OnActivated(ByVal docHandler As DocumentHandler)
    Logger.Log($"'{docHandler.Model.GetTitle()}' activated")
End Sub
~~~

~~~cs
private bool OnRebuild(DocumentHandler docHandler, RebuildState_e type)
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' rebuilt ({type})");

    if(type == RebuildState_e.PreRebuild)
    {
        //return false to cancel regeneration
    }

    return true;
}

private void OnInitialized(DocumentHandler docHandler)
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' initialized");
}

private bool OnSelection(DocumentHandler docHandler, swSelectType_e selType, SelectionState_e type)
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' selection ({type}) of {selType}");

    if (type != SelectionState_e.UserPreSelect) //dynamic selection
    {
        //return false to cancel selection
    }

    return true;
}

private bool OnSave(DocumentHandler docHandler, string fileName, SaveState_e type)
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' saving ({type})");

    if (type == SaveState_e.PreSave)
    {
        //return false to cancel saving
    }

    return true;
}

private void OnItemModified(DocumentHandler docHandler, ItemModificationAction_e type, swNotifyEntityType_e entType, string name, string oldName = "")
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' item modified ({type}) of {entType}. Name: {name} (from {oldName})");
}

private void OnCustomPropertyModified(DocumentHandler docHandler, CustomPropertyModifyData[] modifications)
{
    foreach (var mod in modifications)
    {
        Logger.Log($"'{docHandler.Model.GetTitle()}' custom property '{mod.Name}' changed ({mod.Action}) in '{mod.Configuration}' to '{mod.Value}'");
    }
}

private void OnAccess3rdPartyData(DocumentHandler docHandler, Access3rdPartyDataState_e state)
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' accessing 3rd party data ({state})");
}

private void OnConfigurationOrSheetChanged(DocumentHandler docHandler, ConfigurationChangeState_e type, string confName)
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' configuration {confName} changed ({type})");
}

private void OnDimensionChange(DocumentHandler docHandler, IDisplayDimension dispDim)
{
    var dim = dispDim.GetDimension2(0);

    Logger.Log($"'{docHandler.Model.GetTitle()}' dimension change: {dim.FullName} = {dim.Value}");

    Marshal.ReleaseComObject(dim);
    dim = null;
}

private void OnActivated(DocumentHandler docHandler)
{
    Logger.Log($"'{docHandler.Model.GetTitle()}' activated");
}
~~~


---
title: Managing SOLIDWORKS documents life cycle via SwEx.AddIn framework
caption: Documents Management
description: Framework to manage SOLIDWORKS documents life cycle (open, close, activate) and its events in SwEx.AddIn
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
SwEx.AddIn frameworks provides utility class to manage document life cycle by creating a specified instance handler as a wrapper of a model.

Call [ISwAddInEx.CreateDocumentsHandler](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Base_ISwAddInEx_CreateDocumentsHandler__1.htm) method and pass the type of document handler as a generic argument or use a second overload to create a generic document handler which exposes [common events](events/) (e.g. saving, selection, rebuilding, [3rd party storage access](/docs/codestack/labs/solidworks/swex/add-in/third-party-data-storage/)).

~~~vb
Private m_DocHandler As IDocumentsHandler(Of MyDocHandler)
Private m_DocHandlerGeneric As IDocumentsHandler(Of DocumentHandler)

Public Overrides Function OnConnect() As Boolean
    m_DocHandler = CreateDocumentsHandler(Of MyDocHandler)()
    m_DocHandlerGeneric = CreateDocumentsHandler()
    AddHandler m_DocHandlerGeneric.HandlerCreated, AddressOf OnHandlerCreated
    Return True
End Function

Private Sub OnHandlerCreated(ByVal doc As DocumentHandler)
    'TODO: implement
End Sub
~~~

~~~cs
Private m_DocHandler As IDocumentsHandler(Of MyDocHandler)
Private m_DocHandlerGeneric As IDocumentsHandler(Of DocumentHandler)

Public Overrides Function OnConnect() As Boolean
    m_DocHandler = CreateDocumentsHandler(Of MyDocHandler)()
    m_DocHandlerGeneric = CreateDocumentsHandler()
    AddHandler m_DocHandlerGeneric.HandlerCreated, AddressOf OnHandlerCreated
    Return True
End Function

Private Sub OnHandlerCreated(ByVal doc As DocumentHandler)
    'TODO: implement
End Subwjq in 🌐 nixos-test in solidworks-GPT/docs/codestack-clone on  main via ❄️  impure (postgres-env) ❯ cat ./labs/solidworks/swex/documents-management/DocMgrAddIn.DocHandlerInit.cs
private IDocumentsHandler<MyDocHandler> m_DocHandler;
private IDocumentsHandler<DocumentHandler> m_DocHandlerGeneric;

public override bool OnConnect()
{
    m_DocHandler = CreateDocumentsHandler<MyDocHandler>();
    m_DocHandlerGeneric = CreateDocumentsHandler();
    m_DocHandlerGeneric.HandlerCreated += OnHandlerCreated;
    return true;
}

private void OnHandlerCreated(DocumentHandler doc)
{
    //TODO: implement
}
~~~




Define the document handler either by implementing the [IDocumentHandler](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Base_IDocumentHandler.htm) interface or [DocumentHandler](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Core_DocumentHandler.htm) class. 

~~~vb
Public Class MyDocHandler
    Implements IDocumentHandler

    Private m_Model As IModelDoc2

    Public Sub Init(ByVal app As ISldWorks, ByVal model As IModelDoc2) Implements IDocumentHandler.Init
        If TypeOf model Is PartDoc Then
            m_Model = model
            AddHandler(TryCast(m_Model, PartDoc)).AddItemNotify, AddressOf OnAddItemNotify
        End If
    End Sub

    Private Function OnAddItemNotify(ByVal EntityType As Integer, ByVal itemName As String) As Integer
        Return 0
    End Function

    Public Sub Dispose() Implements IDisposable.Dispose
        If TypeOf m_Model Is PartDoc Then
            RemoveHandler(TryCast(m_Model, PartDoc)).AddItemNotify, AddressOf OnAddItemNotify
        End If
    End Sub

End Class
~~~


~~~cs
public class MyDocHandler : IDocumentHandler
{
    private IModelDoc2 m_Model;

    public void Init(ISldWorks app, IModelDoc2 model)
    {
        if (model is PartDoc)
        {
            m_Model = model;
            (m_Model as PartDoc).AddItemNotify += OnAddItemNotify;
        }
        //TODO: handle other doc types
    }

    private int OnAddItemNotify(int EntityType, string itemName)
    {
        //Implement
        return 0;
    }

    public void Dispose()
    {
        if (m_Model is PartDoc)
        {
            (m_Model as PartDoc).AddItemNotify -= OnAddItemNotify;
        }
    }
}
~~~



Override methods of document handler and implement required functionality attached for each specific SOLIDWORKS model (such as handle events, load, write data etc.)

Framework will automatically dispose the handler. Unsubscribe from the custom events within the [Dispose](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Core_DocumentHandler_Dispose.htm) or [OnDestroy](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Core_DocumentHandler_OnDestroy.htm) method. The pointer to the document attached to the handler is assigned to [Model](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Core_DocumentHandler_Model.htm) property.

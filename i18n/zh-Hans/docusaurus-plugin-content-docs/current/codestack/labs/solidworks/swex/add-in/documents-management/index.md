---
title: 通过SwEx.AddIn框架管理SOLIDWORKS文档生命周期
caption: 文档管理
description: 使用SwEx.AddIn框架管理SOLIDWORKS文档的生命周期（打开、关闭、激活）及其事件
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
SwEx.AddIn框架提供了一个实用类来通过创建指定的实例处理程序作为模型的包装来管理文档的生命周期。

调用[ISwAddInEx.CreateDocumentsHandler](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Base_ISwAddInEx_CreateDocumentsHandler__1.htm)方法，并将文档处理程序的类型作为泛型参数传递，或者使用第二个重载来创建一个通用的文档处理程序，该程序公开了[常见事件](events/)（例如保存、选择、重建、[第三方存储访问](/docs/codestack/labs/solidworks/swex/add-in/third-party-data-storage/)）。

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
End Sub
~~~

通过实现[IDocumentHandler](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Base_IDocumentHandler.htm)接口或[DocumentHandler](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Core_DocumentHandler.htm)类来定义文档处理程序。

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

重写文档处理程序的方法，并为每个特定的SOLIDWORKS模型实现所需的功能（例如处理事件、加载、写入数据等）。

框架将自动处理处理程序的释放。在[Dispose](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Core_DocumentHandler_Dispose.htm)或[OnDestroy](https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Core_DocumentHandler_OnDestroy.htm)方法中取消订阅自定义事件。附加到处理程序的文档的指针将分配给[Model](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Core_DocumentHandler_Model.htm)属性。
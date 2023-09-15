---
title:  通过SwEx.AddIn框架将数据存储在第三方存储中
caption: 存储
---
 使用SwEx.AddIn框架将自定义结构序列化到第三方存储中
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
调用[IModelDoc2::Access3rdPartyStorageStore](https://docs.codestack.net/swex/add-in/html/M_SolidWorks_Interop_sldworks_ModelDocExtension_Access3rdPartyStorageStore.htm)扩展方法来访问第三方存储。传递布尔参数以读取或写入存储。

当需要存储多个需要独立访问和管理的数据结构时，请使用此方法。与创建多个[流](/docs/codestack/labs/solidworks/swex/add-in/third-party-data-storage/stream/)相比，更推荐使用此方法。

## 存储访问处理程序

为了简化存储生命周期的处理，使用SwEx.AddIn框架的Documents Manager API：

```vb
Imports CodeStack.SwEx.AddIn
Imports CodeStack.SwEx.AddIn.Attributes
Imports CodeStack.SwEx.AddIn.Base
Imports CodeStack.SwEx.AddIn.Core
Imports CodeStack.SwEx.AddIn.Enums
Imports SolidWorks.Interop.sldworks
Imports System.Runtime.InteropServices
Imports System.Text
Imports System.Xml.Serialization

Namespace CodeStack.SwEx
    <AutoRegister>
    <ComVisible(True), Guid("0421C699-E1B1-4D64-A086-D686E88EC311")>
    Public Class ThirdPartyDataAddIn
        Inherits SwAddInEx

        Private m_StorageDocHandler As IDocumentsHandler(Of DocumentHandler)

        Public Overrides Function OnConnect() As Boolean
            m_StorageDocHandler = CreateDocumentsHandler()
            AddHandler m_StorageDocHandler.HandlerCreated, AddressOf OnStorageHandlerCreated
            Return True
        End Function

        Private Sub OnStorageHandlerCreated(ByVal doc As DocumentHandler)
            AddHandler doc.Access3rdPartyData, AddressOf OnAccess3rdPartyStorageStore
        End Sub

        Private Sub OnAccess3rdPartyStorageStore(ByVal docHandler As DocumentHandler, ByVal state As Access3rdPartyDataState_e)
            Select Case state
                Case Access3rdPartyDataState_e.StorageRead
                    LoadFromStorageStore(docHandler.Model)
                Case Access3rdPartyDataState_e.StorageWrite
                    SaveToStorageStore(docHandler.Model)
            End Select
        End Sub
    End Class
End Namespace
```

```cs
using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using CodeStack.SwEx.AddIn.Base;
using CodeStack.SwEx.AddIn.Core;
using CodeStack.SwEx.AddIn.Enums;
using SolidWorks.Interop.sldworks;
using System;
using System.Runtime.InteropServices;
using System.Text;
using System.Xml.Serialization;

namespace CodeStack.SwEx
{
    [AutoRegister]
    [ComVisible(true), Guid("64684CEF-131C-4F08-88F7-B3C3BAA7004E")]
    public class ThirdPartyDataAddIn : SwAddInEx
    {
        private IDocumentsHandler<DocumentHandler> m_StorageDocHandler;

        public override bool OnConnect()
        {
            m_StorageDocHandler = CreateDocumentsHandler();
            m_StorageDocHandler.HandlerCreated += OnStorageHandlerCreated;
            return true;
        }

        private void OnStorageHandlerCreated(DocumentHandler doc)
        {
            doc.Access3rdPartyData += OnAccess3rdPartyStorageStore;
        }

        private void OnAccess3rdPartyStorageStore(DocumentHandler docHandler, Access3rdPartyDataState_e state)
        {
            switch (state)
            {
                case Access3rdPartyDataState_e.StorageRead:
                    LoadFromStorageStore(docHandler.Model);
                    break;

                case Access3rdPartyDataState_e.StorageWrite:
                    SaveToStorageStore(docHandler.Model);
                    break;
            }
        }
    }
}
```



## 读取数据

[IThirdPartyStoreHandler::Storage](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Base_IThirdPartyStoreHandler_Storage.htm)属性在读取不存在的存储时返回null。

```vb
Private Const STORAGE_NAME As String = "CodeStackStorage"
Private Const STREAM1_NAME As String = "CodeStackStream1"
Private Const STREAM2_NAME As String = "CodeStackStream2"
Private Const SUB_STORAGE_NAME As String = "CodeStackSubStorage"

Public Class StorageStreamData
    Public Property Prp3 As Integer
    Public Property Prp4 As Boolean
End Class

Private m_StorageData As StorageStreamData
Private Sub LoadFromStorageStore(ByVal model As IModelDoc2)
    Using storageHandler = model.Access3rdPartyStorageStore(STORAGE_NAME, False)

        If storageHandler.Storage IsNot Nothing Then

            Using str = storageHandler.Storage.TryOpenStream(STREAM1_NAME, False)

                If str IsNot Nothing Then
                    Dim xmlSer = New XmlSerializer(GetType(StorageStreamData))
                    m_StorageData = TryCast(xmlSer.Deserialize(str), StorageStreamData)
                End If
            End Using

            Using subStorage = storageHandler.Storage.TryOpenStorage(SUB_STORAGE_NAME, False)

                If subStorage IsNot Nothing Then

                    Using str = subStorage.TryOpenStream(STREAM2_NAME, False)

                        If str IsNot Nothing Then
                            Dim buffer = New Byte(str.Length - 1) {}
                            str.Read(buffer, 0, buffer.Length)
                            Dim dateStr = Encoding.UTF8.GetString(buffer)
                            Dim [date] = DateTime.Parse(dateStr)
                        End If
                    End Using
                End If
            End Using
        End If
    End Using
End Sub
```

```cs
private const string STORAGE_NAME = "CodeStackStorage";
private const string STREAM1_NAME = "CodeStackStream1";
private const string STREAM2_NAME = "CodeStackStream2";
private const string SUB_STORAGE_NAME = "CodeStackSubStorage";

public class StorageStreamData
{
    public int Prp3 { get; set; }
    public bool Prp4 { get; set; }
}

private StorageStreamData m_StorageData;

private void LoadFromStorageStore(IModelDoc2 model)
{
    using (var storageHandler = model.Access3rdPartyStorageStore(STORAGE_NAME, false))
    {
        if (storageHandler.Storage != null)
        {
            using (var str = storageHandler.Storage.TryOpenStream(STREAM1_NAME, false))
            {
                if (str != null)
                {
                    var xmlSer = new XmlSerializer(typeof(StorageStreamData));
                    m_StorageData = xmlSer.Deserialize(str) as StorageStreamData;
                }
            }

            using (var subStorage = storageHandler.Storage.TryOpenStorage(SUB_STORAGE_NAME, false))
            {
                if (subStorage != null)
                {
                    using (var str = subStorage.TryOpenStream(STREAM2_NAME, false))
                    {
                        if (str != null)
                        {
                            var buffer = new byte[str.Length];
                            str.Read(buffer, 0, buffer.Length);
                            var dateStr = Encoding.UTF8.GetString(buffer);
                            var date = DateTime.Parse(dateStr);
                        }
                    }
                }
            }
        }
    }
}
```

## 写入数据

[IThirdPartyStoreHandler::Storage](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Base_IThirdPartyStoreHandler_Storage.htm)将始终返回存储的指针（如果不存在流，则会自动创建流）。

```vb
Private Const STORAGE_NAME As String = "CodeStackStorage"
Private Const STREAM1_NAME As String = "CodeStackStream1"
Private Const STREAM2_NAME As String = "CodeStackStream2"
Private Const SUB_STORAGE_NAME As String = "CodeStackSubStorage"

Public Class StorageStreamData
    Public Property Prp3 As Integer
    Public Property Prp4 As Boolean
End Class

Private m_StorageData As StorageStreamData
Private Sub SaveToStorageStore(ByVal model As IModelDoc2)
    Using storageHandler = model.Access3rdPartyStorageStore(STORAGE_NAME, True)

        Using str = storageHandler.Storage.TryOpenStream(STREAM1_NAME, True)
            Dim xmlSer = New XmlSerializer(GetType(StorageStreamData))
            xmlSer.Serialize(str, m_StorageData)
        End Using

        Using subStorage = storageHandler.Storage.TryOpenStorage(SUB_STORAGE_NAME, True)

            Using str = subStorage.TryOpenStream(STREAM2_NAME, True)
                Dim buffer = Encoding.UTF8.GetBytes(DateTime.Now.ToString("yyyy-MM-dd-hh-mm-ss"))
                str.Write(buffer, 0, buffer.Length)
            End Using
        End Using
    End Using
End Sub
```

```cs
private const string STORAGE_NAME = "CodeStackStorage";
private const string STREAM1_NAME = "CodeStackStream1";
private const string STREAM2_NAME = "CodeStackStream2";
private const string SUB_STORAGE_NAME = "CodeStackSubStorage";

public class StorageStreamData
{
    public int Prp3 { get; set; }
    public bool Prp4 { get; set; }
}

private StorageStreamData m_StorageData;

private void SaveToStorageStore(IModelDoc2 model)
{
    using (var storageHandler = model.Access3rdPartyStorageStore(STORAGE_NAME, true))
    {
        using (var str = storageHandler.Storage.TryOpenStream(STREAM1_NAME, true))
        {
            var xmlSer = new XmlSerializer(typeof(StorageStreamData));

            xmlSer.Serialize(str, m_StorageData);
        }

        using (var subStorage = storageHandler.Storage.TryOpenStorage(SUB_STORAGE_NAME, true))
        {
            using (var str = subStorage.TryOpenStream(STREAM2_NAME, true))
            {
                var buffer = Encoding.UTF8.GetBytes(DateTime.Now.ToString("yyyy-MM-dd-hh-mm-ss"));
                str.Write(buffer, 0, buffer.Length);
            }
        }
    }
}
```

请参阅[IComStorage](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Base_IComStorage.htm)的方法以了解如何创建子流或子存储并枚举现有元素的信息。
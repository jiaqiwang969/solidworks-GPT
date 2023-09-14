---
title: 通过SwEx.AddIn框架将数据存储在第三方存储（流）中
caption: 流
description: 使用SwEx.AddIn框架将自定义结构序列化到第三方存储（流）中
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
调用[IModelDoc2::Access3rdPartyStream](https://docs.codestack.net/swex/add-in/html/M_SolidWorks_Interop_sldworks_ModelDocExtension_Access3rdPartyStream.htm)扩展方法来访问第三方流。传递布尔参数以读取或写入流。

在需要在模型中存储单个结构时使用此方法。

## 流访问处理程序

为了简化流生命周期的处理，使用SwEx.AddIn框架的Documents Manager API：

```vb
Private Const STREAM_NAME As String = "CodeStackStream"

Public Class StreamData
    Public Property Prp1 As String
    Public Property Prp2 As Double
End Class

Private m_StreamData As StreamData

Private Sub LoadFromStream(ByVal model As IModelDoc2)
    Using streamHandler = model.Access3rdPartyStream(STREAM_NAME, False)

        If streamHandler.Stream IsNot Nothing Then

            Using str = streamHandler.Stream
                Dim xmlSer = New XmlSerializer(GetType(StreamData))
                m_StreamData = TryCast(xmlSer.Deserialize(str), StreamData)
            End Using
        End If
    End Using
End Sub
```

```cs
private const string STREAM_NAME = "CodeStackStream";

public class StreamData
{
    public string Prp1 { get; set; }
    public double Prp2 { get; set; }
}

private StreamData m_StreamData;

private void LoadFromStream(IModelDoc2 model)
{
    using (var streamHandler = model.Access3rdPartyStream(STREAM_NAME, false))
    {
        if (streamHandler.Stream != null)
        {
            using (var str = streamHandler.Stream)
            {
                var xmlSer = new XmlSerializer(typeof(StreamData));
                m_StreamData = xmlSer.Deserialize(str) as StreamData;
            }
        }
    }
}
```

## 读取数据

[IThirdPartyStreamHandler::Stream](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Base_IThirdPartyStreamHandler_Stream.htm)属性在读取不存在的流时返回null。

```vb
Private Const STREAM_NAME As String = "CodeStackStream"

Public Class StreamData
    Public Property Prp1 As String
    Public Property Prp2 As Double
End Class

Private m_StreamData As StreamData

Private Sub LoadFromStream(ByVal model As IModelDoc2)
    Using streamHandler = model.Access3rdPartyStream(STREAM_NAME, False)

        If streamHandler.Stream IsNot Nothing Then

            Using str = streamHandler.Stream
                Dim xmlSer = New XmlSerializer(GetType(StreamData))
                m_StreamData = TryCast(xmlSer.Deserialize(str), StreamData)
            End Using
        End If
    End Using
End Sub
```

```cs
private const string STREAM_NAME = "CodeStackStream";

public class StreamData
{
    public string Prp1 { get; set; }
    public double Prp2 { get; set; }
}

private StreamData m_StreamData;

private void LoadFromStream(IModelDoc2 model)
{
    using (var streamHandler = model.Access3rdPartyStream(STREAM_NAME, false))
    {
        if (streamHandler.Stream != null)
        {
            using (var str = streamHandler.Stream)
            {
                var xmlSer = new XmlSerializer(typeof(StreamData));
                m_StreamData = xmlSer.Deserialize(str) as StreamData;
            }
        }
    }
}
```

## 写入数据

[IThirdPartyStreamHandler::Stream](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Base_IThirdPartyStreamHandler_Stream.htm)属性将始终返回指向流的指针（如果流不存在，则自动创建流）。

```vb
Private Const STREAM_NAME As String = "CodeStackStream"

Public Class StreamData
    Public Property Prp1 As String
    Public Property Prp2 As Double
End Class

Private m_StreamData As StreamData

Private Sub SaveToStream(ByVal model As IModelDoc2)
    Using streamHandler = model.Access3rdPartyStream(STREAM_NAME, True)

        Using str = streamHandler.Stream
            Dim xmlSer = New XmlSerializer(GetType(StreamData))
            xmlSer.Serialize(str, m_StreamData)
        End Using
    End Using
End Sub
```

```cs
private const string STREAM_NAME = "CodeStackStream";

public class StreamData
{
    public string Prp1 { get; set; }
    public double Prp2 { get; set; }
}

private StreamData m_StreamData;

private void SaveToStream(IModelDoc2 model)
{
    using (var streamHandler = model.Access3rdPartyStream(STREAM_NAME, true))
    {
        using (var str = streamHandler.Stream)
        {
            var xmlSer = new XmlSerializer(typeof(StreamData));

            xmlSer.Serialize(str, m_StreamData);
        }
    }
}
```
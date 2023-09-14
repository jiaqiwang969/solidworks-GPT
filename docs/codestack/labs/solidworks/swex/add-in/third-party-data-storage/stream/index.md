---
title: Storing data in the 3rd party storage (stream) via SwEx.AddIn framework
caption: Stream
description: Serializing custom structures into the 3rd party storage (stream) using SwEx.AddIn framework
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
Call [IModelDoc2::Access3rdPartyStream](https://docs.codestack.net/swex/add-in/html/M_SolidWorks_Interop_sldworks_ModelDocExtension_Access3rdPartyStream.htm) extension method to access the 3rd party stream. Pass the boolean parameter to read or write stream.

use this approach when it is required to store a single structure at the model.

## Stream Access Handler

To simplify the handling of the stream lifecycle, use the Documents Manager API from the SwEx.AddIn framework:

~~~vb
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
~~~

~~~cs
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
~~~

## Reading data

[IThirdPartyStreamHandler::Stream](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Base_IThirdPartyStreamHandler_Stream.htm) property returns null for the stream which not exists on reading.


~~~vb
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
~~~


~~~cs
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
~~~

## Writing data

[IThirdPartyStreamHandler::Stream](https://docs.codestack.net/swex/add-in/html/P_CodeStack_SwEx_AddIn_Base_IThirdPartyStreamHandler_Stream.htm) will always return the pointer to the stream (stream is automatically created if it doesn't exist).

~~~vb
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
~~~

~~~cs
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
~~~

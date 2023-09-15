---
title: 使用SOLIDWORKS API读取和显示文件中的实体
caption: 从文件中读取实体
description: VBA示例，使用SOLIDWORKS API将外部二进制文件中的实体几何数据反序列化为临时实体并显示出来
labels: [反序列化, COM流, 临时实体]
---

这个VBA示例演示了如何从外部二进制文件中读取实体几何数据。将这些数据加载到COM流中，并使用SOLIDWORKS API将其恢复为临时实体。

实体将显示给用户，并停止宏执行。实体不会出现在特征管理器树中，只会在图形区域中可见。

继续执行宏以销毁实体。

```vb
Imports SolidWorks.Interop.sldworks
Imports SolidWorks.Interop.swconst
Imports System.IO
Imports System.Runtime.InteropServices
Imports System.Runtime.InteropServices.ComTypes

Module Module1

    Declare Function CreateStreamOnHGlobal Lib "ole32" (ByVal hGlobal As IntPtr, ByVal fDeleteOnRelease As Boolean, ByRef ppstm As IStream) As Long

    Const FILE_PATH As String = "D:\body.dat"

    Sub Main()

        Dim app As ISldWorks = CreateObject("SldWorks.Application")
        app.Visible = True

        Dim model As IModelDoc2
        model = app.ActiveDoc

        If Not model Is Nothing Then

            Dim body As IBody2 = LoadBodyFromFile(app, FILE_PATH)

            If Not body Is Nothing Then
                body.Display3(model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone)
                Console.ReadLine()
            Else
                Throw New Exception("恢复实体失败")
            End If

        Else
            Throw New Exception("请打开模型")
        End If

    End Sub

    Function LoadBodyFromFile(app As ISldWorks, filePath As String) As IBody2

        Dim stream As IStream = Nothing

        CreateStreamOnHGlobal(IntPtr.Zero, True, stream)

        Dim comStream = New ComStream(stream, True, True)

        Using fileStream = File.OpenRead(filePath)
            fileStream.CopyTo(comStream)
            comStream.Seek(0, SeekOrigin.Begin)
        End Using

        Dim modeler As IModeler = app.IGetModeler()

        Return modeler.Restore(stream)

    End Function

End Module

Public Class ComStream
    Inherits Stream

    Private ReadOnly m_ComStream As IStream
    Private ReadOnly m_Commit As Boolean
    Private m_IsWritable As Boolean

    Public Sub New(ByRef comStream As IStream, writable As Boolean, Optional commit As Boolean = True)

        If comStream Is Nothing Then
            Throw New ArgumentNullException(NameOf(comStream))
        End If

        m_ComStream = comStream
        m_IsWritable = writable
        m_Commit = commit

    End Sub

    Public Overrides ReadOnly Property CanRead() As Boolean
        Get
            Return True
        End Get
    End Property

    Public Overrides ReadOnly Property CanSeek() As Boolean
        Get
            Return True
        End Get
    End Property

    Public Overrides ReadOnly Property CanWrite() As Boolean
        Get
            Return m_IsWritable
        End Get
    End Property

    Public Overrides ReadOnly Property Length As Long
        Get
            Const STATSFLAG_NONAME As Integer = 1

            Dim stats As ComTypes.STATSTG = Nothing
            m_ComStream.Stat(stats, STATSFLAG_NONAME)

            Return stats.cbSize
        End Get
    End Property

    Public Overrides Property Position() As Long
        Get
            Return Seek(0, SeekOrigin.Current)
        End Get
        Set(ByVal Value As Long)
            Seek(Value, SeekOrigin.Begin)
        End Set
    End Property

    Public Overrides Sub Flush()
        If m_Commit Then
            Const STGC_DEFAULT As Integer = 0
            m_ComStream.Commit(STGC_DEFAULT)
        End If
    End Sub

    Public Overrides Sub SetLength(ByVal Value As Long)
        m_ComStream.SetSize(Value)
    End Sub

    Public Overrides Sub Write(buffer() As Byte, offset As Integer, count As Integer)
        If offset <> 0 Then
            Dim bufferSize As Integer
            bufferSize = buffer.Length - offset
            Dim tmpBuffer(bufferSize) As Byte
            Array.Copy(buffer, offset, tmpBuffer, 0, bufferSize)
            m_ComStream.Write(tmpBuffer, bufferSize, Nothing)
        Else
            m_ComStream.Write(buffer, count, Nothing)
        End If
    End Sub

    Public Overrides Function Read(buffer() As Byte, offset As Integer, count As Integer) As Integer

        Dim bytesRead As Integer = 0
        Dim boxBytesRead As Object = bytesRead
        Dim hObject As GCHandle

        Try
            hObject = GCHandle.Alloc(boxBytesRead, GCHandleType.Pinned)
            Dim pBytesRead As IntPtr = hObject.AddrOfPinnedObject()

            If offset <> 0 Then
                Dim tmpBuffer(count - 1) As Byte
                m_ComStream.Read(tmpBuffer, count, pBytesRead)
                bytesRead = CInt(boxBytesRead)
                Array.Copy(tmpBuffer, 0, buffer, offset, bytesRead)
            Else
                m_ComStream.Read(buffer, count, pBytesRead)
                bytesRead = CInt(boxBytesRead)
            End If

        Finally
            If hObject.IsAllocated Then
                hObject.Free()
            End If
        End Try

        Return bytesRead

    End Function

    Public Overrides Function Seek(offset As Long, origin As SeekOrigin) As Long

        Dim curPosition As Long = 0
        Dim boxCurPosition As Object = curPosition
        Dim hObject As GCHandle

        Try
            hObject = GCHandle.Alloc(boxCurPosition, GCHandleType.Pinned)
            Dim pCurPosition As IntPtr = hObject.AddrOfPinnedObject()

            m_ComStream.Seek(offset, origin, pCurPosition)
            curPosition = CLng(boxCurPosition)
        Finally
            If hObject.IsAllocated Then
                hObject.Free()
            End If
        End Try

        Return curPosition
    End Function

    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing Then
                m_IsWritable = False
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    Protected Overrides Sub Finalize()
        Dispose(False)
    End Sub

End Class
```

```vba
Const FILE_PATH As String = "D:\body.dat"

Private Declare PtrSafe Function CreateStreamOnHGlobal Lib "ole32" (ByVal hGlobal As LongPtr, ByVal fDeleteOnRelease As Long, ByRef ppstm As Any) As Long

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swBody As SldWorks.Body2
        Set swBody = LoadBodyFromFile(FILE_PATH)
        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        
        Stop ' 继续隐藏实体
        
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Function LoadBodyFromFile(filePath As String) As SldWorks.Body2

    Dim buff() As Byte
    buff = ReadByteArrFromFile(filePath)
    
    Dim comStream As IUnknown
    Set comStream = BytesArrToComStream(buff)
    
    Dim swModeler As SldWorks.Modeler
    Set swModeler = swApp.GetModeler
    
    Dim swBody As SldWorks.Body2
    Set swBody = swModeler.Restore(comStream)
    
    Set LoadBodyFromFile = swBody
        
End Function

Function ReadByteArrFromFile(filePath) As Byte()

    Dim buff() As Byte
    
    Dim fileNumb As Integer
    fileNumb = FreeFile
    
    Open filePath For Binary Access Read As fileNumb
    
    ReDim buff(0 To LOF(fileNumb) - 1)
    
    Get fileNumb, , buff
    
    Close fileNumb
    
    ReadByteArrFromFile = buff
    
End Function

Private Function BytesArrToComStream(ByRef buff() As Byte) As IUnknown
    
    Dim comStream As IUnknown
    
    If CreateStreamOnHGlobal(VarPtr(buff(LBound(buff))), 0, comStream) Then
        Err.Raise vbError, "", "从字节数组创建流失败"
    End If
    
    Set BytesArrToComStream = comStream
    
End Function
```
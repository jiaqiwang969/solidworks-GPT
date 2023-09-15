---
title:  Save the selected body into external file using SOLIDWORKS API
caption: Save Body To File
---
 VBA example to serialize the selected body as binary file using SOLIDWORKS API
labels: [serialize,com stream,save body]
---
This VBA example demonstrates how to serialize the selected body (surface or solid) into the COM Stream using SOLIDWORKS API and store that in the external binary file.

~~~vb
Imports SolidWorks.Interop.sldworks
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

            Dim body As IBody2 = model.ISelectionManager.GetSelectedObject6(1, -1)

            If Not body Is Nothing Then
                SaveBodyToFile(body, FILE_PATH)
            Else
                Throw New Exception("Please select body to export")
            End If

        Else
            Throw New Exception("Please open the model")
        End If

    End Sub

    Sub SaveBodyToFile(body As IBody2, filePath As String)

        Dim stream As IStream = Nothing

        CreateStreamOnHGlobal(IntPtr.Zero, True, stream)
        body.Save(stream)

        Dim comStream = New ComStream(stream, False, False)

        Using fileStream = File.Create(filePath)
            comStream.Seek(0, SeekOrigin.Begin)
            comStream.CopyTo(fileStream)
        End Using

    End Sub

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
~~~

~~~vba
Const FILE_PATH As String = "D:\body.dat"

Private Declare PtrSafe Function CreateStreamOnHGlobal Lib "ole32" (ByVal hGlobal As LongPtr, ByVal fDeleteOnRelease As Long, ByRef ppstm As Any) As Long
Private Declare PtrSafe Function GlobalLock Lib "kernel32" (ByVal hMem As LongPtr) As Long
Private Declare PtrSafe Function GlobalUnlock Lib "kernel32" (ByVal hMem As LongPtr) As Long
Private Declare PtrSafe Function GlobalSize Lib "kernel32" (ByVal hMem As LongPtr) As Long
Private Declare PtrSafe Function GetHGlobalFromStream Lib "ole32" (ByVal ppstm As LongPtr, hGlobal As LongPtr) As Long
Private Declare PtrSafe Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" (ByRef Destination As Any, ByRef Source As Any, ByVal Length As Long)
    
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swBody As SldWorks.Body2
        Set swBody = swModel.SelectionManager.GetSelectedObject6(1, -1)
        
        If Not swBody Is Nothing Then
            SaveBodyToFile swBody, FILE_PATH
        Else
            MsgBox "Please select body to export"
        End If
    
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Sub SaveBodyToFile(body As SldWorks.Body2, filePath As String)
    
    Dim comStream As IUnknown
            
    If CreateStreamOnHGlobal(0, 0, comStream) Then
        Err.Raise vbError, "", "Failed to create new stream"
    End If
    
    body.Save comStream
    
    Dim buff() As Byte

    buff = GetArrayFromComStream(comStream)
    
    WriteByteArrToFile filePath, buff
    
End Sub

Private Function GetArrayFromComStream(comStream As IUnknown) As Byte()
  
    Dim buffer() As Byte
  
    Dim hMem As LongPtr
    Dim lpMem As LongPtr
    Dim bytesCount As Long
     
    If Not comStream Is Nothing Then
     
        If GetHGlobalFromStream(ByVal ObjPtr(comStream), hMem) = 0 Then
            
            bytesCount = GlobalSize(hMem)
            
            If bytesCount > 0 Then
                
                lpMem = GlobalLock(hMem)
                
                If lpMem <> 0 Then
                    ReDim buffer(0 To bytesCount - 1)
                    CopyMemory buffer(0), ByVal lpMem, bytesCount
                    GlobalUnlock hMem
                    GetArrayFromComStream = buffer
                Else
                    Err.Raise vbError, "", "Failed to lock memory"
                End If
            Else
                Err.Raise vbError, "", "Stream is empty"
            End If
        Else
            Err.Raise vbError, "", "Failed to get handler from stream"
        End If
    Else
        Err.Raise vbError, "", "Stream is null"
    End If
     
End Function

Function WriteByteArrToFile(filePath As String, buffer() As Byte)

    Dim fileNmb As Integer
    fileNmb = FreeFile
    
    Open filePath For Binary Access Write As #fileNmb
    Put #fileNmb, 1, buffer
    Close #fileNmb
    
End Function
~~~

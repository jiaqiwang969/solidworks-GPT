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
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
        
        Stop ' continue to hide body
        
    Else
        MsgBox "Please open the model"
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
        Err.Raise vbError, "", "Faield to create stream from byte array"
    End If
    
    Set BytesArrToComStream = comStream
    
End Function
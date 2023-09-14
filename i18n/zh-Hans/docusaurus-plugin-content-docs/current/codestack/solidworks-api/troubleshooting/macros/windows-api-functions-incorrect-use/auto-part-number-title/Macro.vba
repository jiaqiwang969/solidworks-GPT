Const NMB_SRC_FILE_PATH As String = "D:\prt.txt"
Const NMB_FORMAT As String = "000"
Const BASE_NAME As String = "PRT-"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
        
    Dim swModel As SldWorks.ModelDoc2
        
    Set swModel = swApp.ActiveDoc
    
    Dim lastNumber As Integer
    
    lastNumber = ReadNumber(NMB_SRC_FILE_PATH)
    
    Dim thisNumber As Integer
    thisNumber = lastNumber + 1
    
    Dim name As String
    name = BASE_NAME & Format(thisNumber, NMB_FORMAT)
    
    If False = swModel.SetTitle2(name) Then
        Err.Raise vbError, "", "Failed to set title"
    End If
    
    StoreNumber NMB_SRC_FILE_PATH, thisNumber
    
End Sub

Function ReadNumber(filePath As String) As Integer
    
    Dim fileNo As Integer

    fileNo = FreeFile
    
    Dim number As String
    
    Open filePath For Input As #fileNo
        
    Line Input #fileNo, number
    
    Close #fileNo
    
    ReadNumber = CInt(number)
    
End Function

Sub StoreNumber(filePath As String, number As Integer)
    
    Dim fileNo As Integer
    fileNo = FreeFile
    
    Open filePath For Output As #fileNo
    
    Print #fileNo, CStr(number)
    
    Close #fileNo
    
End Sub
Const ARG_FORMAT = "__SwMacroArgs__"

Private Declare PtrSafe Function RegisterClipboardFormat Lib "User32" Alias "RegisterClipboardFormatA" (ByVal lpString As String) As LongPtr
Private Declare PtrSafe Function OpenClipboard Lib "User32" (ByVal hwnd As LongPtr) As Long
Private Declare PtrSafe Function GetClipboardData Lib "User32" (ByVal wFormat As LongPtr) As LongPtr
Private Declare PtrSafe Function GlobalSize Lib "kernel32" (ByVal hClipMemory As LongPtr) As Long
Private Declare PtrSafe Function GlobalLock Lib "kernel32" (ByVal hClipMemory As LongPtr) As LongPtr
Private Declare PtrSafe Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" (lpvDest As Any, lpvSource As Any, ByVal cbCopy As LongPtr)
Private Declare PtrSafe Function GlobalUnlock Lib "kernel32" (ByVal hClipMemory As LongPtr) As Long
Private Declare PtrSafe Function CloseClipboard Lib "User32" () As Long

Public Function GetArgument() As String
    
    On Error GoTo ErrorHandler
    
    Dim hClipMemory As LongPtr
    Dim lSize As Long
    Dim lpClipMemory As LongPtr
    Dim wFormat As LongPtr
    
    wFormat = RegisterClipboardFormat(ARG_FORMAT)
    
    If OpenClipboard(0&) = 0 Then
        RaiseError "Failed to open clipboard"
    End If
            
    hClipMemory = GetClipboardData(wFormat)
        
    If hClipMemory > 0 Then
        
        lSize = GlobalSize(hClipMemory)
        
        If lSize > 0 Then
        
            lpClipMemory = GlobalLock(hClipMemory)
            
            If lpClipMemory > 0 Then
                
                Dim bData() As Byte
                ReDim bData(lSize - 1) As Byte
                
                CopyMemory bData(0), ByVal lpClipMemory, lSize
                
                GlobalUnlock hClipMemory

                GetArgument = Trim(StrConv(bData, vbUnicode))

            End If
            
        End If
    
    Else
        RaiseError "No argument specified"
    End If
    
    GoTo Finally
    
ErrorHandler:
    MsgBox "Critical Error: " & Err.Description

Finally:
    CloseClipboard 'must close the clipboard otherswise memory leak
    
End Function

Sub RaiseError(desc As String)
    
    Const SYS_ERR_OFFSET As Integer = 513
    
    Err.Raise Number:=vbObjectError + SYS_ERR_OFFSET, _
              Description:=desc
End Sub
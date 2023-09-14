#If VBA7 Then
    Private Type BROWSEINFO
      hOwner As LongPtr
      pidlRoot As Long
      pszDisplayName As String
      lpszTitle As String
      ulFlags As Long
      lpfnCallback As LongPtr
      lParam As LongPtr
      iImage As Long
    End Type

    Private Declare PtrSafe Function SHBrowseForFolder Lib "Shell32" (lpbi As BROWSEINFO) As Long
    Private Declare PtrSafe Function SHGetPathFromIDList Lib "Shell32" (ByVal pidList As LongPtr, ByVal lpBuffer As String) As Long
    Private Declare PtrSafe Sub CoTaskMemFree Lib "ole32" (ByVal hMem As LongPtr)
#Else
    Private Type BROWSEINFO
        hOwner As Long
        pidlRoot As Long
        pszDisplayName As Long
        lpszTitle As String
        ulFlags As Long
        lpfnCallback As Long
        lParam As Long
        iImage As Long
    End Type
    
    Private Declare Function SHBrowseForFolder Lib "Shell32" (lpbi As BROWSEINFO) As Long
    Private Declare Function SHGetPathFromIDList Lib "Shell32" (ByVal pidList As Long, ByVal lpBuffer As String) As Long
    Private Declare Sub CoTaskMemFree Lib "ole32" (ByVal hMem As Long)
#End If

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
        
    swApp.SendMsgToUser "Selected folder " & BrowseForFolder
    
End Sub

Public Function BrowseForFolder() As String
  
    Dim bi As BROWSEINFO
    Dim pidl As Long
    Dim path As String
  
    bi.lpszTitle = ""
    bi.ulFlags = 0
    
    pidl = SHBrowseForFolder(bi)
    If pidl <> 0 Then
    
        path = Space$(265)
        SHGetPathFromIDList pidl, path
        path = Left$(path, InStr(path, Chr$(0)) - 1)
    
        CoTaskMemFree lngPIDL
    End If
    
    BrowseForFolder = path
    
End Function

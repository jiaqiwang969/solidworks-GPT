Const ADD_IN_GUID As String = "{63496b16-e9ad-4d3a-8473-99d124a1672b}"
Const ADD_IN_PATH As String = "C:\Program Files\CodeStack\MyToolbar\CodeStack.Sw.MyToolbar.dll"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim isLoaded As Boolean
    
    isLoaded = IsAddInLoaded(ADD_IN_GUID)
    
    Debug.Print "AddIn Loaded: " & isLoaded
    
    Dim addInPath As String
    
    If ADD_IN_PATH <> "" Then
        addInPath = ADD_IN_PATH
    Else
        addInPath = GetAddInPath(ADD_IN_GUID)
    End If
    
    Debug.Print LoadAddIn(addInPath, Not isLoaded)
    
End Sub

Function IsAddInLoaded(addInGuid As String) As Boolean
    
    Dim addIn As Object
    Set addIn = swApp.GetAddInObject(addInGuid)
    
    IsAddInLoaded = Not addIn Is Nothing
    
End Function

Function LoadAddIn(addInGuid As String, load As Boolean) As Boolean
    
    Const SUCCESS As Long = 0
    
    Dim res As Long
    If True = load Then
        res = swApp.LoadAddIn(addInGuid)
    Else
        res = swApp.UnloadAddIn(addInGuid)
    End If
    
    LoadAddIn = (res = SUCCESS)
    
End Function

Function GetAddInPath(addInGuid As String) As String
    
    Dim addInUri As String
    addInUri = CreateObject("WScript.Shell").RegRead("HKCR\CLSID\" & addInGuid & "\InprocServer32\CodeBase")
    
    GetAddInPath = UriToLocalPath(addInUri)
    
End Function

Function UriToLocalPath(uri As String) As String
    UriToLocalPath = Right(uri, Len(uri) - Len("file:///"))
    UriToLocalPath = Replace(UriToLocalPath, "/", "\")
End Function
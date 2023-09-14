---
layout: sw-tool
title: Macro to load and unload add-in using SOLIDWORKS API
caption: Load/Unload Add-In
description: Macro to trigger (load/unload) the specified add-in using SOLIDWORKS API
image: toggle-addins.svg
labels: [add-in, load]
group: Frame
---
This macro allows to trigger the load state of the specified add-in using the [ISldWorks::LoadAddIn](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~loadaddin.html) and [ISldWorks::UnloadAddIn](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~unloadaddin.html) SOLIDWORKS API.

This can be useful to provide a short-cut for loading and unloading the add-in with one button click. It is recommended to use [Macro Buttons](/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/) to create a button for add-in in the toolbar.

Macro requires the add-in Global Unique Identifier (GUID) to be specified at the beginning of the macro.

~~~ vb
Const ADD_IN_GUID As String = "{1730410d-85ad-4be8-aa2d-ed977b93fe5d}"
~~~

Locate the guid of the required SOLIDWORKS add-in in the registry at *HKLM\SOFTWARE\SolidWorks\AddIns*. Each sub-key of this registry key represents the add-in. Select each key to see the title and description of the add-in. Copy the name of the key which represents the add-in guid.

![Available add-ins presented in the registry](addins-registry.png){ width=450 }

It is optionally required to specify the path to the add-in in the *ADD_IN_PATH* variable. In some cases macro cannot retrieve the path to the add-in from its guid and can fail. You can find the path to the add-in in the SOLIDWORKS add-ins dialog:

![Add-ins list in SOLIWORKS menu](addins-list.png){ width=450 }

~~~ vb
Const ADD_IN_PATH As String = "C:\Program Files\CodeStack\MyToolbar\CodeStack.Sw.MyToolbar.dll"
~~~

If this option is not used set the value to an empty string

~~~ vb
Const ADD_IN_PATH As String = ""
~~~

~~~ vb
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
~~~



---
layout: sw-tool
title:  使用SOLIDWORKS API加载和卸载插件的宏
caption: 加载/卸载插件
---
 使用SOLIDWORKS API触发（加载/卸载）指定的插件的宏
image: toggle-addins.svg
labels: [插件, 加载]
group: 框架
---
此宏允许使用[SldWorks::LoadAddIn](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~loadaddin.html)和[SldWorks::UnloadAddIn](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~unloadaddin.html) SOLIDWORKS API触发指定插件的加载状态。

这对于提供一个按钮点击即可加载和卸载插件的快捷方式非常有用。建议使用[宏按钮](/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/)在工具栏中创建一个插件按钮。

宏要求在宏的开头指定插件的全局唯一标识符（GUID）。

~~~ vb
Const ADD_IN_GUID As String = "{1730410d-85ad-4be8-aa2d-ed977b93fe5d}"
~~~

在注册表的*HKLM\SOFTWARE\SolidWorks\AddIns*位置找到所需SOLIDWORKS插件的GUID。该注册表键的每个子键都代表一个插件。选择每个键以查看插件的标题和描述。复制代表插件GUID的键的名称。

![注册表中的可用插件](addins-registry.png){ width=450 }

还可以选择性地在*ADD_IN_PATH*变量中指定插件的路径。在某些情况下，宏无法从其GUID中检索插件的路径，可能会失败。您可以在SOLIDWORKS插件对话框中找到插件的路径：

![SOLIDWORKS菜单中的插件列表](addins-list.png){ width=450 }

~~~ vb
Const ADD_IN_PATH As String = "C:\Program Files\CodeStack\MyToolbar\CodeStack.Sw.MyToolbar.dll"
~~~

如果不使用此选项，请将值设置为空字符串

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
    
    Debug.Print "插件已加载: " & isLoaded
    
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
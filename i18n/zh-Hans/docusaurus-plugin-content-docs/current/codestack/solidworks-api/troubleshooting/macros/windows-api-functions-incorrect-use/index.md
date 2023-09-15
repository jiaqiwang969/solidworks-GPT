---
layout: sw-macro-fix
title:  修复在SOLIDWORKS宏中错误使用32位版本的Windows API函数
caption: 错误使用32位版本的Windows API函数
---
 修复编译错误 - 当宏使用Windows API函数时，必须更新此项目的代码以在64位系统上使用
image: declare-function-win-api.png
labels: [宏, 故障排除]
redirect-from:
  - /2018/04/macro-troubleshooting-incorrect-use-of-32-bit-versions-of-win-api.html
---
## 症状

系统从早于2012年的SOLIDWORKS更新到更新的版本。
或者运行某些旧版宏。
宏使用Windows API函数（例如，具有浏览文件/文件夹对话框，连接到注册表，使用窗口句柄）通过*Declare Function*语句。
启动时显示*编译错误：必须更新此项目的代码以在64位系统上使用*。

![Windows API Declare函数不兼容错误](declare-function-win-api.png){ width=640 height=185 }

## 原因

SOLIDWORKS在2013版本中将Visual Basic for Application环境从VB6更新为VB7。
VB6是32位应用程序，而[VB7](https://msdn.microsoft.com/en-us/vba/language-reference-vba/articles/64-bit-visual-basic-for-applications-overview)是64位应用程序。
由于32/64位变量大小的差异，需要使用PtrSafe关键字来确保在x64系统中运行宏是安全的，并使用LongPtr或LongLong来正确解析32位和64位环境中的Long类型变量。

## 解决方法

* 修改所有声明并包含PtrSafe关键字和LongPtr作为Long类型的变量声明
* 如果需要支持旧版本的SOLIDWORKS（2012年之前），可以使用预编译条件语句#IF-#Else

~~~ vb
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

~~~
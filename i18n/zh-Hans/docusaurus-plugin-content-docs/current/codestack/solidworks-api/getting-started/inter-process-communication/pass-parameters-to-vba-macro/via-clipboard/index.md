---
title: Pass Arguments to SOLIDWORKS VBA Macro via Clipboard
caption: Via Clipboard
description: Pass custom string arguments to a VBA macro from a .NET application or another macro via the clipboard
image: msg-box-macro-argument.png
labels: [arguments, clipboard, example, SOLIDWORKS API]
redirect-from:
  - /2018/04/pass-arguments-to-vba-macro-via-clipboard.html
---

The system clipboard can store different types of data (including but not limited to text, images, HTML, etc.). The simplest way is to write the custom argument to the text buffer, but this will clear any existing data in the buffer (if any). This can be confusing and result in a poor user experience as running the macro may overwrite text that was already copied to the clipboard.

Another approach is to write the data to a custom buffer with a unique name so that it is not explicitly exposed to the user and can only be accessed through code.

Let's start with the "target" macro that will be called from a different "main" macro.

```vb
Dim swApp As SldWorks.SldWorks

Sub main()
        
    Set swApp = Application.SldWorks
        
     swApp.SendMsgToUser "Specified argument: " & ArgumentHelper.GetArgument()
    
End Sub
```

In the above example, the value of the argument passed from the "main" macro will be extracted and displayed to the user in a message box in the "target" macro:

![Message box displaying the passed argument value in the macro](msg-box-macro-argument.png){ width=400 height=132 }

The helper class reads the value of the buffer from the **__SwMacroArgs__** format. This is a known custom name that both the main macro (which will write the argument value) and the target macro (which will read the value) are aware of. It can be renamed to any other custom name if desired.

```vb
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
        RaiseError "Unable to open the clipboard"
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
    MsgBox "Critical error: " & Err.Description

Finally:
    CloseClipboard ' Must close the clipboard, otherwise it will leak memory
    
End Function

Sub RaiseError(desc As String)
    
    Const SYS_ERR_OFFSET As Integer = 513
    
    Err.Raise Number:=vbObjectError + SYS_ERR_OFFSET, _
              Description:=desc
End Sub
```

To call the macro and pass the argument, the buffer value in the **__SwMacroArgs__** format needs to be set as a Unicode string. Here are examples of how to achieve this in different programming languages.

<details>
<summary>VBA Macro</summary>

Argument Helper module

```vb
Const ARG_FORMAT = "__SwMacroArgs__"

Const GHND As Integer = &H42

Private Declare PtrSafe Function RegisterClipboardFormat Lib "User32" Alias "RegisterClipboardFormatA" (ByVal lpString As String) As LongPtr
Private Declare PtrSafe Function GlobalAlloc Lib "kernel32" (ByVal wFlags As LongPtr, ByVal dwBytes As LongPtr) As Long
Private Declare PtrSafe Function GlobalLock Lib "kernel32" (ByVal hMem As LongPtr) As Long
Private Declare PtrSafe Function lstrcpy Lib "kernel32" (ByVal lpString1 As Any, ByVal lpString2 As Any) As Long
Private Declare PtrSafe Function GlobalUnlock Lib "kernel32" (ByVal hMem As LongPtr) As Long
Private Declare PtrSafe Function OpenClipboard Lib "User32" (ByVal hwnd As LongPtr) As Long
Private Declare PtrSafe Function CloseClipboard Lib "User32" () As Long
Private Declare PtrSafe Function SetClipboardData Lib "User32" (ByVal wFormat As LongPtr, ByVal hMem As LongPtr) As Long

Public Sub SetArgument(arg As String)
    
    On Error GoTo ErrorHandler
        
    Dim wFormat As LongPtr
    
    wFormat = RegisterClipboardFormat(ARG_FORMAT)
    
    Dim hGlobalMemory As Long
    Dim lpGlobalMemory As Long
        
    hGlobalMemory = GlobalAlloc(GHND, Len(arg))
    lpGlobalMemory = GlobalLock(hGlobalMemory)
    lpGlobalMemory = lstrcpy(lpGlobalMemory, arg)

    If GlobalUnlock(hGlobalMemory) <> 0 Then
        RaiseError "Unable to unlock memory"
    End If

    If OpenClipboard(0&) = 0 Then
        RaiseError "Unable to open the clipboard"
    End If

    SetClipboardData wFormat, hGlobalMemory
    
    GoTo Finally
    
ErrorHandler:
    MsgBox "Critical error: " & err.Description

Finally:
    CloseClipboard
    
End Sub

Sub RaiseError(desc As String)
    
    Const SYS_ERR_OFFSET As Integer = 513
    
    err.Raise Number:=vbObjectError + SYS_ERR_OFFSET, _
              Description:=desc
End Sub
```

Macro

```vb
Dim swApp As SldWorks.SldWorks

Sub main()
    
    Set swApp = Application.SldWorks
    
    ArgumentHelper.SetArgument "Argument from VBA macro"
    
    Dim err As Long
    
    If False = swApp.RunMacro2("D:\Macros\GetArgumentMacro.swp", _
        "Macro1", "main", swRunMacroOption_e.swRunMacroUnloadAfterRun, err) Then
        
        swApp.SendMsgToUser "Unable to run the macro. Error code: " & err
        
    End If
    
End Sub
```

</details>

<details>
<summary>C#</summary>

```cs
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;
using System.Runtime.InteropServices;
using System;
using System.Windows.Forms;
using System.Text;
using System.IO;

namespace CodeStack
{
    public partial class SolidWorksMacro
    {
        const string ARG_NAME = "__SwMacroArgs__";

        public void Main()
        {
            SetArgument("Argument from C# macro");

            int err;
            if (!swApp.RunMacro2(@"D:\Macros\GetArgumentMacro.swp",
                "Macro1", "main", (int)swRunMacroOption_e.swRunMacroUnloadAfterRun, out err))
            {
                swApp.SendMsgToUser(string.Format("Unable to run the macro. Error code: {0}", err));
            }
        }

        private static void SetArgument(string arg)
        {
            using (MemoryStream stream = new MemoryStream(Encoding.UTF8.GetBytes(arg)))
            {
                Clipboard.SetData(ARG_NAME, stream);
            }
        }

        public SldWorks swApp;
    }
}
```



</details>

<details>
<summary>VB.NET</summary>

```vb
Imports SolidWorks.Interop.sldworks
Imports SolidWorks.Interop.swconst
Imports System.Runtime.InteropServices
Imports System.IO
Imports System.Windows.Forms
Imports System.Text
Imports System

Partial Class CodeStack

    Const ARG_NAME As String = "__SwMacroArgs__"

    Public Sub Main()
        SetArgument("Argument from VB.NET macro")
        Dim err As Integer
        If Not swApp.RunMacro2("D:\Macros\GetArgumentMacro.swp", "Macro1", "main", CInt(swRunMacroOption_e.swRunMacroUnloadAfterRun), err) Then
            swApp.SendMsgToUser(String.Format("Unable to run the macro. Error code: {0}", err))
        End If
    End Sub

    Private Shared Sub SetArgument(ByVal arg As String)
        Using stream As MemoryStream = New MemoryStream(Encoding.UTF8.GetBytes(arg))
            Clipboard.SetData(ARG_NAME, stream)
        End Using
    End Sub

    Public swApp As SldWorks

End Class

```



</details>

> Note: The above examples do not handle "race conditions" when multiple macros with different arguments may run in parallel. Use Mutex or Semaphore objects to synchronize access to shared resources.
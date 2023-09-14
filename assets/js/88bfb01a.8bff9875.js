"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84514],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23913:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={title:"Passing the parameters to SOLIDWORKS VBA Macro via clipboard",caption:"Via Clipboard",description:"Passing the custom string parameters to VBA macro from .NET application or another macro via clipboard",image:"msg-box-macro-argument.png",labels:["argument","clipboard","example","parameter","solidworks api"],"redirect-from":["/2018/04/pass-arguments-to-vba-macro-via-clipboard.html"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard/index",title:"Passing the parameters to SOLIDWORKS VBA Macro via clipboard",description:"Passing the custom string parameters to VBA macro from .NET application or another macro via clipboard",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard/index.md",tags:[],version:"current",frontMatter:{title:"Passing the parameters to SOLIDWORKS VBA Macro via clipboard",caption:"Via Clipboard",description:"Passing the custom string parameters to VBA macro from .NET application or another macro via clipboard",image:"msg-box-macro-argument.png",labels:["argument","clipboard","example","parameter","solidworks api"],"redirect-from":["/2018/04/pass-arguments-to-vba-macro-via-clipboard.html"]},sidebar:"tutorialSidebar",previous:{title:"Generate report for the SOLIDWORKS file versions (created and last saved) for all the files in the folder",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/"},next:{title:"Passing the parameters to SOLIDWORKS Macro using the SWBasic macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-swb-macro/"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:r,...a}=e;return(0,o.kt)(m,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"System clipboard allows to store different types of data (that includes but not limited to text, image, html etc.). As the simplest way, the custom argument may be written to the text buffer, but this will clear all the data already in the buffer (if any). This may introduce confusion and result in bad user experience as running the macro may overwrite the text already copied into the clipboard.  "),(0,o.kt)("p",null,"Alternative way is to write the data into the custom buffer with unique name so it is not explicitly exposed to the user and will remain accessible via code only."),(0,o.kt)("p",null,"Let's start with the 'target' macro which will be called from the different 'master' macro.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n        \n    Set swApp = Application.SldWorks\n        \n     swApp.SendMsgToUser "Specified argument: " & ArgumentHelper.GetArgument()\n    \nEnd Sub\n')),(0,o.kt)("p",null,"In the example above argument value passed from the 'master' macro will be extracted and displayed to the user in the message box in the 'target' macro:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Message box in macro displaying the passed argument value",src:n(66784).Z,width:"400",height:"133"}),"{ width=400 height=132 }"),(0,o.kt)("p",null,"The helper class reads the buffer value from the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"SwMacroArgs"))," format. This is a custom name which is known to both 'master' macro (which will write the value of argument) and the 'target' macro (which will read the value). This can be renamed to any other custom name if needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ARG_FORMAT = "__SwMacroArgs__"\n\nPrivate Declare PtrSafe Function RegisterClipboardFormat Lib "User32" Alias "RegisterClipboardFormatA" (ByVal lpString As String) As LongPtr\nPrivate Declare PtrSafe Function OpenClipboard Lib "User32" (ByVal hwnd As LongPtr) As Long\nPrivate Declare PtrSafe Function GetClipboardData Lib "User32" (ByVal wFormat As LongPtr) As LongPtr\nPrivate Declare PtrSafe Function GlobalSize Lib "kernel32" (ByVal hClipMemory As LongPtr) As Long\nPrivate Declare PtrSafe Function GlobalLock Lib "kernel32" (ByVal hClipMemory As LongPtr) As LongPtr\nPrivate Declare PtrSafe Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" (lpvDest As Any, lpvSource As Any, ByVal cbCopy As LongPtr)\nPrivate Declare PtrSafe Function GlobalUnlock Lib "kernel32" (ByVal hClipMemory As LongPtr) As Long\nPrivate Declare PtrSafe Function CloseClipboard Lib "User32" () As Long\n\nPublic Function GetArgument() As String\n    \n    On Error GoTo ErrorHandler\n    \n    Dim hClipMemory As LongPtr\n    Dim lSize As Long\n    Dim lpClipMemory As LongPtr\n    Dim wFormat As LongPtr\n    \n    wFormat = RegisterClipboardFormat(ARG_FORMAT)\n    \n    If OpenClipboard(0&) = 0 Then\n        RaiseError "Failed to open clipboard"\n    End If\n            \n    hClipMemory = GetClipboardData(wFormat)\n        \n    If hClipMemory > 0 Then\n        \n        lSize = GlobalSize(hClipMemory)\n        \n        If lSize > 0 Then\n        \n            lpClipMemory = GlobalLock(hClipMemory)\n            \n            If lpClipMemory > 0 Then\n                \n                Dim bData() As Byte\n                ReDim bData(lSize - 1) As Byte\n                \n                CopyMemory bData(0), ByVal lpClipMemory, lSize\n                \n                GlobalUnlock hClipMemory\n\n                GetArgument = Trim(StrConv(bData, vbUnicode))\n\n            End If\n            \n        End If\n    \n    Else\n        RaiseError "No argument specified"\n    End If\n    \n    GoTo Finally\n    \nErrorHandler:\n    MsgBox "Critical Error: " & Err.Description\n\nFinally:\n    CloseClipboard \'must close the clipboard otherswise memory leak\n    \nEnd Function\n\nSub RaiseError(desc As String)\n    \n    Const SYS_ERR_OFFSET As Integer = 513\n    \n    Err.Raise Number:=vbObjectError + SYS_ERR_OFFSET, _\n              Description:=desc\nEnd Sub\n')),(0,o.kt)("p",null,"In order to call the macro and pass the argument it is required to set the buffer value for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"SwMacroArgs"))," format as the unicode string. Below are examples which demonstrate how to do this in different programming languages"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"VBA Macro"),(0,o.kt)("p",null,"Argument Helper Module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ARG_FORMAT = "__SwMacroArgs__"\n\nConst GHND As Integer = &H42\n\nPrivate Declare PtrSafe Function RegisterClipboardFormat Lib "User32" Alias "RegisterClipboardFormatA" (ByVal lpString As String) As LongPtr\nPrivate Declare PtrSafe Function GlobalAlloc Lib "kernel32" (ByVal wFlags As LongPtr, ByVal dwBytes As LongPtr) As Long\nPrivate Declare PtrSafe Function GlobalLock Lib "kernel32" (ByVal hMem As LongPtr) As Long\nPrivate Declare PtrSafe Function lstrcpy Lib "kernel32" (ByVal lpString1 As Any, ByVal lpString2 As Any) As Long\nPrivate Declare PtrSafe Function GlobalUnlock Lib "kernel32" (ByVal hMem As LongPtr) As Long\nPrivate Declare PtrSafe Function OpenClipboard Lib "User32" (ByVal hwnd As LongPtr) As Long\nPrivate Declare PtrSafe Function CloseClipboard Lib "User32" () As Long\nPrivate Declare PtrSafe Function SetClipboardData Lib "User32" (ByVal wFormat As LongPtr, ByVal hMem As LongPtr) As Long\n\nPublic Sub SetArgument(arg As String)\n    \n    On Error GoTo ErrorHandler\n        \n    Dim wFormat As LongPtr\n    \n    wFormat = RegisterClipboardFormat(ARG_FORMAT)\n    \n    Dim hGlobalMemory As Long\n    Dim lpGlobalMemory As Long\n        \n    hGlobalMemory = GlobalAlloc(GHND, Len(arg))\n    lpGlobalMemory = GlobalLock(hGlobalMemory)\n    lpGlobalMemory = lstrcpy(lpGlobalMemory, arg)\n\n    If GlobalUnlock(hGlobalMemory) <> 0 Then\n        RaiseError "Failed to unlock memory"\n    End If\n\n    If OpenClipboard(0&) = 0 Then\n        RaiseError "Failed to open clipboard"\n    End If\n\n    SetClipboardData wFormat, hGlobalMemory\n    \n    GoTo Finally\n    \nErrorHandler:\n    MsgBox "Critical Error: " & err.Description\n\nFinally:\n    CloseClipboard\n    \nEnd Sub\n\nSub RaiseError(desc As String)\n    \n    Const SYS_ERR_OFFSET As Integer = 513\n    \n    err.Raise Number:=vbObjectError + SYS_ERR_OFFSET, _\n              Description:=desc\nEnd Sub\n')),(0,o.kt)("p",null,"Macro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n    \n    Set swApp = Application.SldWorks\n    \n    ArgumentHelper.SetArgument "Argument from VBA macro"\n    \n    Dim err As Long\n    \n    If False = swApp.RunMacro2("D:\\Macros\\GetArgumentMacro.swp", _\n        "Macro1", "main", swRunMacroOption_e.swRunMacroUnloadAfterRun, err) Then\n        \n        swApp.SendMsgToUser "Failed to run macro. Error code: " & err\n        \n    End If\n    \nEnd Sub\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"C#"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Windows.Forms;\nusing System.Text;\nusing System.IO;\n\nnamespace CodeStack\n{\n    public partial class SolidWorksMacro\n    {\n        const string ARG_NAME = "__SwMacroArgs__";\n\n        public void Main()\n        {\n            SetArgument("Argument from C# macro");\n\n            int err;\n            if (!swApp.RunMacro2(@"D:\\Macros\\GetArgumentMacro.swp",\n                "Macro1", "main", (int)swRunMacroOption_e.swRunMacroUnloadAfterRun, out err))\n            {\n                swApp.SendMsgToUser(string.Format("Failed to run macro. Error code: {0}", err));\n            }\n        }\n\n        private static void SetArgument(string arg)\n        {\n            using (MemoryStream stream = new MemoryStream(Encoding.UTF8.GetBytes(arg)))\n            {\n                Clipboard.SetData(ARG_NAME, stream);\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n\n\n\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"VB.NET"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Imports SolidWorks.Interop.sldworks\nImports SolidWorks.Interop.swconst\nImports System.Runtime.InteropServices\nImports System.IO\nImports System.Windows.Forms\nImports System.Text\nImports System\n\nPartial Class CodeStack\n\n    Const ARG_NAME As String = "__SwMacroArgs__"\n\n    Public Sub Main()\n        SetArgument("Argument from VB.NET macro")\n        Dim err As Integer\n        If Not swApp.RunMacro2("D:\\Macros\\GetArgumentMacro.swp", "Macro1", "main", CInt(swRunMacroOption_e.swRunMacroUnloadAfterRun), err) Then\n            swApp.SendMsgToUser(String.Format("Failed to run macro. Error code: {0}", err))\n        End If\n    End Sub\n\n    Private Shared Sub SetArgument(ByVal arg As String)\n        Using stream As MemoryStream = New MemoryStream(Encoding.UTF8.GetBytes(arg))\n            Clipboard.SetData(ARG_NAME, stream)\n        End Using\n    End Sub\n\n    Public swApp As SldWorks\n\nEnd Class\n\n'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: the examples above do not handle 'race conditions' (when multiple macros with different arguments may be run in parallel). Use Mutex or Semaphore objects to synchronise the access to shared resources.")))}u.isMDXComponent=!0},66784:(e,r,n)=>{n.d(r,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACFCAMAAABCDV5iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAABDDX/rqQAwCi004LAL38/qurrVVBbPjvA1OYu4QDAAECiZmeaPjcklmi5qnC3alzaWGy1QFgc1F/rlMBR7/Zo5NHOcChb+Hi4rLJ2cyspXt5ezJqcwMANrpKNPz3AIyaqObz+qS0weLYLKKQQsmwVl1cWgDK+HhPcs7LyuH49wBMaREhLGM2AIrX9rbP6Ye058rm9ZxGALJ6PIizzAFgr5Oqw/7+/jE5clQvTO2vYuPPJJF2M5uWgtadcH/U9LU/Ju7lvf767bK1tzFhomhil+nu2en1+ej+/vDw8IKUrQB3h1Vna9ja3ibR+pVjaaC61v/+vwAlXI2+17Xf7EOQt+fAByoAL1s5JjMAAoGBgstxYNO7h7iYjNrm88VmVAFNk4zT629IS1IFJaW/29+XisvV2++4rejn5rTN573e8jUuVbloApCkvOudQ6Td8einm63G4IViHby8vYmCUszd74eIiygNep3B6fPiKIdQUu7LS8KkncBbSHZydCp1vdfV1f3hx7bB5VRle2CGx6G7pW5oSrnr+nhTISc9hSECVrLK5ExMggCAjqi53aDN5rnL5nycyMCIV9+tGbfAqnmYlV2b0WLG8NXMbztAQLzR3tjGqPfr49Lh8eajlktKSP783ysgH/3krHZWBAUCXPP4/XIAAu30+nSzwtnTjYsuBdKAcHeJoIphfZ24zOHo88aoNzBpk2CGsY2EZ5OSlJJdBAIke7CXYejHGLzT6bqEdrvT9LnR6uvr66GAU8qOGZrG25yvxsPi8tLe7W0CJXMhQKGlqJCuzZy62QZ4zd29t5241MyKOtvu+evu8XKAkqzFy3Q8KurCOF9RghEqEXnG8Dt6o0iW2+CrAsTExXpojv3vyKfx+7Kyse/Nq/nOiJXc9HOQvJtUR/y9bjsHVY1cLtO6lWmYvT55vIKbupjO/yJRiUBTX3i83KFTIfHe05m10vX19GRtf8bY7M2yeZOAgmpoau3VxI5ydZuamyssML/V66yokqK82ND9/wAAAGMggS4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAATjElEQVR4Xu2dDVhTR7qAc1cbtVVDq9XQVhdYpaaKyI+MP6i7QWvilWst/lda0Gjxh9oYoWoVYbHEGm9ZKUUsWlI0opRapRGtFqvQhl4rCy6rEjHqaitUtIBChCg895s5E0ggIIKU7LPz+piZ853vzDmZ98zMiUHlSaUh/J2ujK4nWRuSJZXypApT7dJKDaPLSS24bciS8kJMIsdchj0g8LgbKeXxax0rGPaBLECXxdu5NJduMrqcVS+F8Fz/TjcYXQ8Roqn4iWEfMCH2BhXyGqNzqXsUNO+na0zI70JoeuuE0jwm5HehLrQmcEOr1DjRMcKE/B7UpQe+3Tob8pmQ35G69A1vf9bAu+++21iQ6mdvv9CiEPMK01iaNzgaIlb7GktzvSHOgP6wErJkiWVBePeFfBmXygn5ifQeRnbax8cHb0Lh8yP0qE8FbECw4iCO5ELoNInkwstBH+j2hkS8W1Z38DQcfdqngjSEMxnQq+mB7y4xU52fX8MV1VwAwEJIpnmEkA1M6Njo6G2/1hU4LY6OXpERUOez+F+yOtnX81/fXj03Onr67YwK2Z6yU3V1EYPu1NWFf5hbMG0elxjafUx0TGauTNcjV+ayJ2j7aeP06OgM2up/OlZC0hES1XxRo0dI50BDSz7bYC2kYYT4uZUKBKd9ZBMGlcgEoWNnC3zGgpC617b0WzvhQ5lApku+8GPv4XdkLjG8vrKDX5f+yCXOw4nbBQV7Jp8CIQUxQaNcYibXCV4LhaHDaDpC/BGKXCRCKCS8UYh5hNRxQn6UUeLdLgqgKHDbBK+CCVtHuYAQmYwTUge12p/vfPBzgqB2m9smgUtMrwK3UpK4dxQIkQl8y2CE+HwdlAv78A4GxVLIcWIE+5jxBQ1h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"}}]);
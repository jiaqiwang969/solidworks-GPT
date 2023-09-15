"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[82794],{3905:(n,r,e)=>{e.d(r,{Zo:()=>p,kt:()=>A});var t=e(67294);function o(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function a(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}function s(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){o(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}function i(n,r){if(null==n)return{};var e,t,o=function(n,r){if(null==n)return{};var e,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||(o[e]=n[e]);return o}(n,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=t.createContext({}),c=function(n){var r=t.useContext(l),e=r;return n&&(e="function"==typeof n?n(r):s(s({},r),n)),e},p=function(n){var r=c(n.components);return t.createElement(l.Provider,{value:r},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var r=n.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(n,r){var e=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),u=c(e),g=o,A=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return e?t.createElement(A,s(s({ref:r},p),{},{components:e})):t.createElement(A,s({ref:r},p))}));function A(n,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof n||o){var a=e.length,s=new Array(a);s[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=n,i[u]="string"==typeof n?n:o,s[1]=i;for(var c=2;c<a;c++)s[c]=e[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,e)}g.displayName="MDXCreateElement"},54967:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=e(87462),o=(e(67294),e(3905));const a={title:"\u901a\u8fc7\u526a\u8d34\u677f\u5c06\u53c2\u6570\u4f20\u9012\u7ed9SOLIDWORKS VBA\u5b8f",image:"msg-box-macro-argument.png",labels:["\u53c2\u6570","\u526a\u8d34\u677f","\u793a\u4f8b","solidworks api"],"redirect-from":["/2018/04/pass-arguments-to-vba-macro-via-clipboard.html"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard/index",title:"\u901a\u8fc7\u526a\u8d34\u677f\u5c06\u53c2\u6570\u4f20\u9012\u7ed9SOLIDWORKS VBA\u5b8f",description:"\u7cfb\u7edf\u526a\u8d34\u677f\u53ef\u4ee5\u5b58\u50a8\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff08\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6587\u672c\u3001\u56fe\u50cf\u3001HTML\u7b49\uff09\u3002\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5c06\u81ea\u5b9a\u4e49\u53c2\u6570\u5199\u5165\u6587\u672c\u7f13\u51b2\u533a\uff0c\u4f46\u8fd9\u5c06\u6e05\u9664\u7f13\u51b2\u533a\u4e2d\u5df2\u6709\u7684\u6240\u6709\u6570\u636e\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002\u8fd9\u53ef\u80fd\u4f1a\u5f15\u8d77\u6df7\u6dc6\uff0c\u5e76\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u4e0d\u4f73\uff0c\u56e0\u4e3a\u8fd0\u884c\u5b8f\u53ef\u80fd\u4f1a\u8986\u76d6\u5df2\u7ecf\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u6587\u672c\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard/index.md",tags:[],version:"current",frontMatter:{title:"\u901a\u8fc7\u526a\u8d34\u677f\u5c06\u53c2\u6570\u4f20\u9012\u7ed9SOLIDWORKS VBA\u5b8f",image:"msg-box-macro-argument.png",labels:["\u53c2\u6570","\u526a\u8d34\u677f","\u793a\u4f8b","solidworks api"],"redirect-from":["/2018/04/pass-arguments-to-vba-macro-via-clipboard.html"]},sidebar:"tutorialSidebar",previous:{title:"\u5c06\u53c2\u6570\u4f20\u9012\u7ed9SOLIDWORKS VBA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/"},next:{title:"Passing Parameters to SOLIDWORKS Macros through SWBasic Macros",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-swb-macro/"}},l={},c=[],p={toc:c},u="wrapper";function m(n){let{components:r,...a}=n;return(0,o.kt)(u,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7cfb\u7edf\u526a\u8d34\u677f\u53ef\u4ee5\u5b58\u50a8\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff08\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6587\u672c\u3001\u56fe\u50cf\u3001HTML\u7b49\uff09\u3002\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5c06\u81ea\u5b9a\u4e49\u53c2\u6570\u5199\u5165\u6587\u672c\u7f13\u51b2\u533a\uff0c\u4f46\u8fd9\u5c06\u6e05\u9664\u7f13\u51b2\u533a\u4e2d\u5df2\u6709\u7684\u6240\u6709\u6570\u636e\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002\u8fd9\u53ef\u80fd\u4f1a\u5f15\u8d77\u6df7\u6dc6\uff0c\u5e76\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u4e0d\u4f73\uff0c\u56e0\u4e3a\u8fd0\u884c\u5b8f\u53ef\u80fd\u4f1a\u8986\u76d6\u5df2\u7ecf\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u6587\u672c\u3002"),(0,o.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5c06\u6570\u636e\u5199\u5165\u5177\u6709\u552f\u4e00\u540d\u79f0\u7684\u81ea\u5b9a\u4e49\u7f13\u51b2\u533a\uff0c\u8fd9\u6837\u5b83\u4e0d\u4f1a\u88ab\u663e\u5f0f\u5730\u66b4\u9732\u7ed9\u7528\u6237\uff0c\u53ea\u80fd\u901a\u8fc7\u4ee3\u7801\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u4ece\u201c\u76ee\u6807\u201d\u5b8f\u5f00\u59cb\uff0c\u8be5\u5b8f\u5c06\u4ece\u4e0d\u540c\u7684\u201c\u4e3b\u201d\u5b8f\u4e2d\u8c03\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n        \n    Set swApp = Application.SldWorks\n        \n     swApp.SendMsgToUser "\u6307\u5b9a\u7684\u53c2\u6570: " & ArgumentHelper.GetArgument()\n    \nEnd Sub\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u4ece\u201c\u4e3b\u201d\u5b8f\u4f20\u9012\u7684\u53c2\u6570\u503c\u5c06\u5728\u201c\u76ee\u6807\u201d\u5b8f\u7684\u6d88\u606f\u6846\u4e2d\u63d0\u53d6\u5e76\u663e\u793a\u7ed9\u7528\u6237\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5b8f\u4e2d\u663e\u793a\u4f20\u9012\u7684\u53c2\u6570\u503c\u7684\u6d88\u606f\u6846",src:e(41538).Z,width:"400",height:"133"}),"{ width=400 height=132 }"),(0,o.kt)("p",null,"\u52a9\u624b\u7c7b\u4ece",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"SwMacroArgs")),"\u683c\u5f0f\u4e2d\u8bfb\u53d6\u7f13\u51b2\u533a\u7684\u503c\u3002\u8fd9\u662f\u4e00\u4e2a\u5df2\u77e5\u7684\u81ea\u5b9a\u4e49\u540d\u79f0\uff0c\u4e3b\u5b8f\uff08\u5c06\u5199\u5165\u53c2\u6570\u503c\uff09\u548c\u76ee\u6807\u5b8f\uff08\u5c06\u8bfb\u53d6\u503c\uff09\u90fd\u77e5\u9053\u3002\u5982\u679c\u9700\u8981\uff0c\u53ef\u4ee5\u5c06\u5176\u91cd\u547d\u540d\u4e3a\u4efb\u4f55\u5176\u4ed6\u81ea\u5b9a\u4e49\u540d\u79f0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ARG_FORMAT = "__SwMacroArgs__"\n\nPrivate Declare PtrSafe Function RegisterClipboardFormat Lib "User32" Alias "RegisterClipboardFormatA" (ByVal lpString As String) As LongPtr\nPrivate Declare PtrSafe Function OpenClipboard Lib "User32" (ByVal hwnd As LongPtr) As Long\nPrivate Declare PtrSafe Function GetClipboardData Lib "User32" (ByVal wFormat As LongPtr) As LongPtr\nPrivate Declare PtrSafe Function GlobalSize Lib "kernel32" (ByVal hClipMemory As LongPtr) As Long\nPrivate Declare PtrSafe Function GlobalLock Lib "kernel32" (ByVal hClipMemory As LongPtr) As LongPtr\nPrivate Declare PtrSafe Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" (lpvDest As Any, lpvSource As Any, ByVal cbCopy As LongPtr)\nPrivate Declare PtrSafe Function GlobalUnlock Lib "kernel32" (ByVal hClipMemory As LongPtr) As Long\nPrivate Declare PtrSafe Function CloseClipboard Lib "User32" () As Long\n\nPublic Function GetArgument() As String\n    \n    On Error GoTo ErrorHandler\n    \n    Dim hClipMemory As LongPtr\n    Dim lSize As Long\n    Dim lpClipMemory As LongPtr\n    Dim wFormat As LongPtr\n    \n    wFormat = RegisterClipboardFormat(ARG_FORMAT)\n    \n    If OpenClipboard(0&) = 0 Then\n        RaiseError "\u65e0\u6cd5\u6253\u5f00\u526a\u8d34\u677f"\n    End If\n            \n    hClipMemory = GetClipboardData(wFormat)\n        \n    If hClipMemory > 0 Then\n        \n        lSize = GlobalSize(hClipMemory)\n        \n        If lSize > 0 Then\n        \n            lpClipMemory = GlobalLock(hClipMemory)\n            \n            If lpClipMemory > 0 Then\n                \n                Dim bData() As Byte\n                ReDim bData(lSize - 1) As Byte\n                \n                CopyMemory bData(0), ByVal lpClipMemory, lSize\n                \n                GlobalUnlock hClipMemory\n\n                GetArgument = Trim(StrConv(bData, vbUnicode))\n\n            End If\n            \n        End If\n    \n    Else\n        RaiseError "\u672a\u6307\u5b9a\u53c2\u6570"\n    End If\n    \n    GoTo Finally\n    \nErrorHandler:\n    MsgBox "\u5173\u952e\u9519\u8bef: " & Err.Description\n\nFinally:\n    CloseClipboard \'\u5fc5\u987b\u5173\u95ed\u526a\u8d34\u677f\uff0c\u5426\u5219\u4f1a\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\n    \nEnd Function\n\nSub RaiseError(desc As String)\n    \n    Const SYS_ERR_OFFSET As Integer = 513\n    \n    Err.Raise Number:=vbObjectError + SYS_ERR_OFFSET, _\n              Description:=desc\nEnd Sub\n')),(0,o.kt)("p",null,"\u4e3a\u4e86\u8c03\u7528\u5b8f\u5e76\u4f20\u9012\u53c2\u6570\uff0c\u9700\u8981\u5c06",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"SwMacroArgs")),"\u683c\u5f0f\u7684\u7f13\u51b2\u533a\u503c\u8bbe\u7f6e\u4e3aUnicode\u5b57\u7b26\u4e32\u3002\u4ee5\u4e0b\u662f\u5728\u4e0d\u540c\u7f16\u7a0b\u8bed\u8a00\u4e2d\u5982\u4f55\u5b9e\u73b0\u6b64\u64cd\u4f5c\u7684\u793a\u4f8b\u3002"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"VBA\u5b8f"),(0,o.kt)("p",null,"Argument Helper \u6a21\u5757"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ARG_FORMAT = "__SwMacroArgs__"\n\nConst GHND As Integer = &H42\n\nPrivate Declare PtrSafe Function RegisterClipboardFormat Lib "User32" Alias "RegisterClipboardFormatA" (ByVal lpString As String) As LongPtr\nPrivate Declare PtrSafe Function GlobalAlloc Lib "kernel32" (ByVal wFlags As LongPtr, ByVal dwBytes As LongPtr) As Long\nPrivate Declare PtrSafe Function GlobalLock Lib "kernel32" (ByVal hMem As LongPtr) As Long\nPrivate Declare PtrSafe Function lstrcpy Lib "kernel32" (ByVal lpString1 As Any, ByVal lpString2 As Any) As Long\nPrivate Declare PtrSafe Function GlobalUnlock Lib "kernel32" (ByVal hMem As LongPtr) As Long\nPrivate Declare PtrSafe Function OpenClipboard Lib "User32" (ByVal hwnd As LongPtr) As Long\nPrivate Declare PtrSafe Function CloseClipboard Lib "User32" () As Long\nPrivate Declare PtrSafe Function SetClipboardData Lib "User32" (ByVal wFormat As LongPtr, ByVal hMem As LongPtr) As Long\n\nPublic Sub SetArgument(arg As String)\n    \n    On Error GoTo ErrorHandler\n        \n    Dim wFormat As LongPtr\n    \n    wFormat = RegisterClipboardFormat(ARG_FORMAT)\n    \n    Dim hGlobalMemory As Long\n    Dim lpGlobalMemory As Long\n        \n    hGlobalMemory = GlobalAlloc(GHND, Len(arg))\n    lpGlobalMemory = GlobalLock(hGlobalMemory)\n    lpGlobalMemory = lstrcpy(lpGlobalMemory, arg)\n\n    If GlobalUnlock(hGlobalMemory) <> 0 Then\n        RaiseError "\u65e0\u6cd5\u89e3\u9501\u5185\u5b58"\n    End If\n\n    If OpenClipboard(0&) = 0 Then\n        RaiseError "\u65e0\u6cd5\u6253\u5f00\u526a\u8d34\u677f"\n    End If\n\n    SetClipboardData wFormat, hGlobalMemory\n    \n    GoTo Finally\n    \nErrorHandler:\n    MsgBox "\u5173\u952e\u9519\u8bef: " & err.Description\n\nFinally:\n    CloseClipboard\n    \nEnd Sub\n\nSub RaiseError(desc As String)\n    \n    Const SYS_ERR_OFFSET As Integer = 513\n    \n    err.Raise Number:=vbObjectError + SYS_ERR_OFFSET, _\n              Description:=desc\nEnd Sub\n')),(0,o.kt)("p",null,"\u5b8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n    \n    Set swApp = Application.SldWorks\n    \n    ArgumentHelper.SetArgument "\u6765\u81eaVBA\u5b8f\u7684\u53c2\u6570"\n    \n    Dim err As Long\n    \n    If False = swApp.RunMacro2("D:\\Macros\\GetArgumentMacro.swp", _\n        "Macro1", "main", swRunMacroOption_e.swRunMacroUnloadAfterRun, err) Then\n        \n        swApp.SendMsgToUser "\u65e0\u6cd5\u8fd0\u884c\u5b8f\u3002\u9519\u8bef\u4ee3\u7801: " & err\n        \n    End If\n    \nEnd Sub\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"C#"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Windows.Forms;\nusing System.Text;\nusing System.IO;\n\nnamespace CodeStack\n{\n    public partial class SolidWorksMacro\n    {\n        const string ARG_NAME = "__SwMacroArgs__";\n\n        public void Main()\n        {\n            SetArgument("\u6765\u81eaC#\u5b8f\u7684\u53c2\u6570");\n\n            int err;\n            if (!swApp.RunMacro2(@"D:\\Macros\\GetArgumentMacro.swp",\n                "Macro1", "main", (int)swRunMacroOption_e.swRunMacroUnloadAfterRun, out err))\n            {\n                swApp.SendMsgToUser(string.Format("\u65e0\u6cd5\u8fd0\u884c\u5b8f\u3002\u9519\u8bef\u4ee3\u7801: {0}", err));\n            }\n        }\n\n        private static void SetArgument(string arg)\n        {\n            using (MemoryStream stream = new MemoryStream(Encoding.UTF8.GetBytes(arg)))\n            {\n                Clipboard.SetData(ARG_NAME, stream);\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n\n\n\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"VB.NET"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Imports SolidWorks.Interop.sldworks\nImports SolidWorks.Interop.swconst\nImports System.Runtime.InteropServices\nImports System.IO\nImports System.Windows.Forms\nImports System.Text\nImports System\n\nPartial Class CodeStack\n\n    Const ARG_NAME As String = "__SwMacroArgs__"\n\n    Public Sub Main()\n        SetArgument("\u6765\u81eaVB.NET\u5b8f\u7684\u53c2\u6570")\n        Dim err As Integer\n        If Not swApp.RunMacro2("D:\\Macros\\GetArgumentMacro.swp", "Macro1", "main", CInt(swRunMacroOption_e.swRunMacroUnloadAfterRun), err) Then\n            swApp.SendMsgToUser(String.Format("\u65e0\u6cd5\u8fd0\u884c\u5b8f\u3002\u9519\u8bef\u4ee3\u7801: {0}", err))\n        End If\n    End Sub\n\n    Private Shared Sub SetArgument(ByVal arg As String)\n        Using stream As MemoryStream = New MemoryStream(Encoding.UTF8.GetBytes(arg))\n            Clipboard.SetData(ARG_NAME, stream)\n        End Using\n    End Sub\n\n    Public swApp As SldWorks\n\nEnd Class\n\n'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0a\u8ff0\u793a\u4f8b\u672a\u5904\u7406\u201c\u7ade\u4e89\u6761\u4ef6\u201d\uff08\u5f53\u591a\u4e2a\u5177\u6709\u4e0d\u540c\u53c2\u6570\u7684\u5b8f\u53ef\u80fd\u5e76\u884c\u8fd0\u884c\u65f6\uff09\u3002\u4f7f\u7528\u4e92\u65a5\u4f53\u6216\u4fe1\u53f7\u91cf\u5bf9\u8c61\u6765\u540c\u6b65\u5bf9\u5171\u4eab\u8d44\u6e90\u7684\u8bbf\u95ee\u3002")))}m.isMDXComponent=!0},41538:(n,r,e)=>{e.d(r,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACFCAMAAABCDV5iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAABDDX/rqQAwCi004LAL38/qurrVVBbPjvA1OYu4QDAAECiZmeaPjcklmi5qnC3alzaWGy1QFgc1F/rlMBR7/Zo5NHOcChb+Hi4rLJ2cyspXt5ezJqcwMANrpKNPz3AIyaqObz+qS0weLYLKKQQsmwVl1cWgDK+HhPcs7LyuH49wBMaREhLGM2AIrX9rbP6Ye058rm9ZxGALJ6PIizzAFgr5Oqw/7+/jE5clQvTO2vYuPPJJF2M5uWgtadcH/U9LU/Ju7lvf767bK1tzFhomhil+nu2en1+ej+/vDw8IKUrQB3h1Vna9ja3ibR+pVjaaC61v/+vwAlXI2+17Xf7EOQt+fAByoAL1s5JjMAAoGBgstxYNO7h7iYjNrm88VmVAFNk4zT629IS1IFJaW/29+XisvV2++4rejn5rTN573e8jUuVbloApCkvOudQ6Td8einm63G4IViHby8vYmCUszd74eIiygNep3B6fPiKIdQUu7LS8KkncBbSHZydCp1vdfV1f3hx7bB5VRle2CGx6G7pW5oSrnr+nhTISc9hSECVrLK5ExMggCAjqi53aDN5rnL5nycyMCIV9+tGbfAqnmYlV2b0WLG8NXMbztAQLzR3tjGqPfr49Lh8eajlktKSP783ysgH/3krHZWBAUCXPP4/XIAAu30+nSzwtnTjYsuBdKAcHeJoIphfZ24zOHo88aoNzBpk2CGsY2EZ5OSlJJdBAIke7CXYejHGLzT6bqEdrvT9LnR6uvr66GAU8qOGZrG25yvxsPi8tLe7W0CJXMhQKGlqJCuzZy62QZ4zd29t5241MyKOtvu+evu8XKAkqzFy3Q8KurCOF9RghEqEXnG8Dt6o0iW2+CrAsTExXpojv3vyKfx+7Kyse/Nq/nOiJXc9HOQvJtUR/y9bjsHVY1cLtO6lWmYvT55vIKbupjO/yJRiUBTX3i83KFTIfHe05m10vX19GRtf8bY7M2yeZOAgmpoau3VxI5ydZuamyssML/V66yokqK82ND9/wAAAGMggS4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAATjElEQVR4Xu2dDVhTR7qAc1cbtVVDq9XQVhdYpaaKyI+MP6i7QWvilWst/lda0Gjxh9oYoWoVYbHEGm9ZKUUsWlI0opRapRGtFqvQhl4rCy6rEjHqaitUtIBChCg895s5E0ggIIKU7LPz+piZ853vzDmZ98zMiUHlSaUh/J2ujK4nWRuSJZXypApT7dJKDaPLSS24bciS8kJMIsdchj0g8LgbKeXxax0rGPaBLECXxdu5NJduMrqcVS+F8Fz/TjcYXQ8Roqn4iWEfMCH2BhXyGqNzqXsUNO+na0zI70JoeuuE0jwm5HehLrQmcEOr1DjRMcKE/B7UpQe+3Tob8pmQ35G69A1vf9bAu+++21iQ6mdvv9CiEPMK01iaNzgaIlb7GktzvSHOgP6wErJkiWVBePeFfBmXygn5ifQeRnbax8cHb0Lh8yP0qE8FbECw4iCO5ELoNInkwstBH+j2hkS8W1Z38DQcfdqngjSEMxnQq+mB7y4xU52fX8MV1VwAwEJIpnmEkA1M6Njo6G2/1hU4LY6OXpERUOez+F+yOtnX81/fXj03Onr67YwK2Z6yU3V1EYPu1NWFf5hbMG0elxjafUx0TGauTNcjV+ayJ2j7aeP06OgM2up/OlZC0hES1XxRo0dI50BDSz7bYC2kYYT4uZUKBKd9ZBMGlcgEoWNnC3zGgpC617b0WzvhQ5lApku+8GPv4XdkLjG8vrKDX5f+yCXOw4nbBQV7Jp8CIQUxQaNcYibXCV4LhaHDaDpC/BGKXCRCKCS8UYh5hNRxQn6UUeLdLgqgKHDbBK+CCVtHuYAQmYwTUge12p/vfPBzgqB2m9smgUtMrwK3UpK4dxQIkQl8y2CE+HwdlAv78A4GxVLIcWIE+5jxBQ1h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"}}]);
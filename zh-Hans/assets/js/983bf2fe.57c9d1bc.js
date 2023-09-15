"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15419],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={layout:"sw-tool",title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u4e2d\u5c06\u6240\u6709\u6ce8\u91ca\u6253\u5370\u5230\u6587\u672c\u6587\u4ef6\u7684\u5b8f",caption:"\u6253\u5370\u6ce8\u91ca\u6587\u672c\u5230\u6587\u4ef6"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print-to-file/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print-to-file/index",title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u4e2d\u5c06\u6240\u6709\u6ce8\u91ca\u6253\u5370\u5230\u6587\u672c\u6587\u4ef6\u7684\u5b8f",description:"\u4eceSOLIDWORKS\u56fe\u7eb8\u6587\u4ef6\u4e2d\u8f93\u51fa\u6240\u6709\u6ce8\u91ca\u6587\u672c\u5230\u6587\u672c\u6587\u4ef6\u7684VBA\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print-to-file/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print-to-file",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print-to-file/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print-to-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print-to-file/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u4e2d\u5c06\u6240\u6709\u6ce8\u91ca\u6253\u5370\u5230\u6587\u672c\u6587\u4ef6\u7684\u5b8f",caption:"\u6253\u5370\u6ce8\u91ca\u6587\u672c\u5230\u6587\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u7528\u4e8e\u6253\u5370SOLIDWORKS\u6587\u6863\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print/"},next:{title:"Macro propagates configurations of the referenced document to sheets in the SOLIDWORKS drawings",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/propagate-configurations-sheets/"}},l={},c=[{value:"group: \u56fe\u7eb8",id:"group-\u56fe\u7eb8",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4eceSOLIDWORKS\u56fe\u7eb8\u6587\u4ef6\u4e2d\u8f93\u51fa\u6240\u6709\u6ce8\u91ca\u6587\u672c\u5230\u6587\u672c\u6587\u4ef6\u7684VBA\u5b8f\nimage: print-notes.svg\nlabels: ","[\u6ce8\u91ca, \u6253\u5370, \u6b63\u5219\u8868\u8fbe\u5f0f, regex]"),(0,o.kt)("h2",{id:"group-\u56fe\u7eb8"},"group: \u56fe\u7eb8"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5c06\u4eceSOLIDWORKS\u56fe\u7eb8\u4e2d\u7684\u6240\u6709\u89c6\u56fe\u4e2d\u8f93\u51fa\u6587\u672c\u5230\u6587\u672c\u6587\u4ef6\u4e2d\u3002"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u6ce8\u91ca\u5c06\u4f1a\u5728\u65b0\u7684\u4e00\u884c\u4e2d\u6253\u5370\u3002\u8fd8\u53ef\u4ee5\u5c06\u89c6\u56fe\u7684\u540d\u79f0\u548c\u6587\u4ef6\u540d\u5305\u542b\u5728\u8f93\u51fa\u4e2d\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4ee5\u4e0b\u5e38\u91cf\u6765\u914d\u7f6e\u5b8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const FILE_PATH As String = \"\" '\u6ce8\u91ca\u5e94\u5199\u5165\u7684\u6587\u672c\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u3002\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u5c06\u6587\u4ef6\u4fdd\u5b58\u4e3a\u4e0e\u539f\u59cb\u6587\u4ef6\u76f8\u540c\u7684\u540d\u79f0\uff0c\u524d\u7f00\u4e3a_Note.txt\nConst PRINT_FILE_NAME As Boolean = True 'True\u8868\u793a\u5c06\u6587\u4ef6\u540d\u8f93\u51fa\u5230\u6587\u672c\u6587\u4ef6\u4e2d\nConst PRINT_VIEW_NAME As Boolean = True 'True\u8868\u793a\u5c06\u7ed8\u56fe\u89c6\u56fe\u540d\u79f0\u8f93\u51fa\u5230\u6587\u672c\u6587\u4ef6\u4e2d\nConst FILTER As String = \"\" '\u7528\u4e8e\u5305\u542b\u6ce8\u91ca\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u8fc7\u6ee4\u5668\uff08\u4f8b\u5982\uff0c\\d+\u8868\u793a\u5305\u542b\u6240\u6709\u5305\u542b\u6570\u5b57\u503c\u7684\u6ce8\u91ca\uff09\n")),(0,o.kt)("h2",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7a7a\u6ce8\u91ca\uff0c\u503c\u5c06\u8f93\u51fa\u4e3a",(0,o.kt)("strong",{parentName:"li"},"[","X","]")),(0,o.kt)("li",{parentName:"ul"},"\u6709\u5173\u53ef\u7528\u4e8e\u914d\u7f6e",(0,o.kt)("strong",{parentName:"li"},"FILTER"),"\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/the-regular-expression-object-model"},"\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\u5c06\u8ffd\u52a0\u5230\u73b0\u6709\u7684\u6587\u672c\u6587\u4ef6\u4e2d\uff08\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u65b0\u6587\u4ef6\uff09\u3002\u8fd9\u5141\u8bb8\u901a\u8fc7",(0,o.kt)("a",{parentName:"li",href:"https://cadplus.xarial.com/batch/"},"Batch+"),"\u6279\u91cf\u8fd0\u884c\u6b64\u5b8f\u4ee5\u4ece\u591a\u4e2a\u6587\u4ef6\u4e2d\u8f93\u51fa\u6ce8\u91ca\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = ""\nConst PRINT_FILE_NAME As Boolean = True\nConst PRINT_VIEW_NAME As Boolean = True\nConst FILTER As String = ""\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim outFilePath As String\n        \n        If FILE_PATH <> "" Then\n            outFilePath = FILE_PATH\n        Else\n            outFilePath = swDraw.GetPathName\n            \n            If outFilePath = "" Then\n                Err.Raise "\u7ed8\u56fe\u672a\u4fdd\u5b58\u4e14\u672a\u6307\u5b9aFILE_PATH"\n            End If\n            \n            outFilePath = Left(outFilePath, InStrRev(outFilePath, ".") - 1) & "_Notes.txt"\n        End If\n        \n        Dim fileNmb As Integer\n        fileNmb = FreeFile\n    \n        Open outFilePath For Append As #fileNmb\n    \n        If PRINT_FILE_NAME Then\n            Print #fileNmb, "*** \u6587\u4ef6\u8def\u5f84: " & swDraw.GetPathName & " ***"\n        End If\n    \n        PrintNotes swDraw, fileNmb\n        \n        Print #fileNmb, ""\n        Close #fileNmb\n        \n    Else\n        Err.Raise vbError, "", "\u4ec5\u652f\u6301\u7ed8\u56fe"\n    End If\n    \nEnd Sub\n\nSub PrintNotes(draw As SldWorks.DrawingDoc, fileNmb As Integer)\n    \n    Dim vSheets As Variant\n    vSheets = draw.GetViews\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.View\n            Set swView = vViews(j)\n            \n            If PRINT_VIEW_NAME Then\n                Print #fileNmb, "*** \u89c6\u56fe\u540d\u79f0: " & swView.Name & " ***"\n            End If\n            \n            Dim vNotes As Variant\n            vNotes = swView.GetNotes\n            \n            Dim k As Integer\n            \n            For k = 0 To UBound(vNotes)\n                Dim swNote As SldWorks.Note\n                Set swNote = vNotes(k)\n                \n                Dim text As String\n                text = swNote.GetText\n                \n                If IncludeNote(text) Then\n                    If text = "" Then\n                        text = "[X]"\n                    End If\n                    \n                    Print #fileNmb, text\n                End If\n                \n            Next\n            \n        Next\n        \n    Next\n    \nEnd Sub\n\nFunction IncludeNote(text As String) As Boolean\n\n    If FILTER = "" Then\n        IncludeNote = True\n    Else\n        Dim regEx As Object\n        Set regEx = CreateObject("VBScript.RegExp")\n        \n        regEx.Global = True\n        regEx.IgnoreCase = True\n        regEx.Pattern = FILTER\n        \n        IncludeNote = regEx.Test(text)\n    \n    End If\n    \nEnd Function\n')))}d.isMDXComponent=!0}}]);
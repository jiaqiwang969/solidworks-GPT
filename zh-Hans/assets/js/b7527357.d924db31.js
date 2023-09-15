"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[28691],{3905:(n,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>k});var t=o(67294);function r(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function a(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function s(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function d(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var i=t.createContext({}),l=function(n){var e=t.useContext(i),o=e;return n&&(o="function"==typeof n?n(e):s(s({},e),n)),o},c=function(n){var e=l(n.components);return t.createElement(i.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(n,e){var o=n.components,r=n.mdxType,a=n.originalType,i=n.parentName,c=d(n,["components","mdxType","originalType","parentName"]),p=l(o),g=r,k=p["".concat(i,".").concat(g)]||p[g]||u[g]||a;return o?t.createElement(k,s(s({ref:e},c),{},{components:o})):t.createElement(k,s({ref:e},c))}));function k(n,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=o.length,s=new Array(a);s[0]=g;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=n,d[p]="string"==typeof n?n:r,s[1]=d;for(var l=2;l<a;l++)s[l]=o[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},44184:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=o(87462),r=(o(67294),o(3905));const a={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u52a0\u8f7d\u548c\u5378\u8f7d\u52a0\u8f7d\u9879\u7684\u5b8f",caption:"\u52a0\u8f7d/\u5378\u8f7d\u52a0\u8f7d\u9879"},s=void 0,d={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/load-unload/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/load-unload/index",title:"\u4f7f\u7528SOLIDWORKS API\u52a0\u8f7d\u548c\u5378\u8f7d\u52a0\u8f7d\u9879\u7684\u5b8f",description:"\u4f7f\u7528SOLIDWORKS API\u89e6\u53d1\uff08\u52a0\u8f7d/\u5378\u8f7d\uff09\u6307\u5b9a\u7684\u52a0\u8f7d\u9879\u7684\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/load-unload/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/load-unload",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/load-unload/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/load-unload/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/load-unload/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u52a0\u8f7d\u548c\u5378\u8f7d\u52a0\u8f7d\u9879\u7684\u5b8f",caption:"\u52a0\u8f7d/\u5378\u8f7d\u52a0\u8f7d\u9879"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528API\u521b\u5efaSOLIDWORKS\u81ea\u52a8\u5316\u7684C#\u63d2\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/csharp/"},next:{title:"\u4f7f\u7528API\u521b\u5efaSOLIDWORKS\u7684VB.NET\u63d2\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/vbnet/"}},i={},l=[{value:"group: \u6846\u67b6",id:"group-\u6846\u67b6",level:2}],c={toc:l},p="wrapper";function u(n){let{components:e,...a}=n;return(0,r.kt)(p,(0,t.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u89e6\u53d1\uff08\u52a0\u8f7d/\u5378\u8f7d\uff09\u6307\u5b9a\u7684\u52a0\u8f7d\u9879\u7684\u5b8f\nimage: toggle-addins.svg\nlabels: ","[\u52a0\u8f7d\u9879, \u52a0\u8f7d]"),(0,r.kt)("h2",{id:"group-\u6846\u67b6"},"group: \u6846\u67b6"),(0,r.kt)("p",null,"\u6b64\u5b8f\u5141\u8bb8\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~loadaddin.html"},"SldWorks::LoadAddIn"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~unloadaddin.html"},"SldWorks::UnloadAddIn")," SOLIDWORKS API\u89e6\u53d1\u6307\u5b9a\u52a0\u8f7d\u9879\u7684\u52a0\u8f7d\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u8fd9\u5bf9\u4e8e\u901a\u8fc7\u5355\u51fb\u4e00\u4e2a\u6309\u94ae\u6765\u52a0\u8f7d\u548c\u5378\u8f7d\u52a0\u8f7d\u9879\u975e\u5e38\u6709\u7528\u3002\u5efa\u8bae\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},"\u5b8f\u6309\u94ae"),"\u5728\u5de5\u5177\u680f\u4e2d\u521b\u5efa\u52a0\u8f7d\u9879\u6309\u94ae\u3002"),(0,r.kt)("p",null,"\u5b8f\u8981\u6c42\u5728\u5b8f\u7684\u5f00\u5934\u6307\u5b9a\u52a0\u8f7d\u9879\u7684\u5168\u5c40\u552f\u4e00\u6807\u8bc6\u7b26\uff08GUID\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_GUID As String = "{1730410d-85ad-4be8-aa2d-ed977b93fe5d}"\n')),(0,r.kt)("p",null,"\u5728\u6ce8\u518c\u8868\u7684",(0,r.kt)("em",{parentName:"p"},"HKLM\\SOFTWARE\\SolidWorks\\AddIns"),"\u4f4d\u7f6e\u627e\u5230\u6240\u9700SOLIDWORKS\u52a0\u8f7d\u9879\u7684GUID\u3002\u8be5\u6ce8\u518c\u8868\u952e\u7684\u6bcf\u4e2a\u5b50\u952e\u90fd\u4ee3\u8868\u4e00\u4e2a\u52a0\u8f7d\u9879\u3002\u9009\u62e9\u6bcf\u4e2a\u952e\u4ee5\u67e5\u770b\u52a0\u8f7d\u9879\u7684\u6807\u9898\u548c\u63cf\u8ff0\u3002\u590d\u5236\u4ee3\u8868\u52a0\u8f7d\u9879GUID\u7684\u952e\u7684\u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6ce8\u518c\u8868\u4e2d\u7684\u53ef\u7528\u52a0\u8f7d\u9879",src:o(38369).Z,width:"861",height:"589"}),"{ width=450 }"),(0,r.kt)("p",null,"\u53ef\u9009\u5730\uff0c\u53ef\u4ee5\u5728",(0,r.kt)("em",{parentName:"p"},"ADD_IN_PATH"),"\u53d8\u91cf\u4e2d\u6307\u5b9a\u52a0\u8f7d\u9879\u7684\u8def\u5f84\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b8f\u65e0\u6cd5\u4ece\u5176GUID\u4e2d\u68c0\u7d22\u52a0\u8f7d\u9879\u7684\u8def\u5f84\uff0c\u53ef\u80fd\u4f1a\u5931\u8d25\u3002\u60a8\u53ef\u4ee5\u5728SOLIDWORKS\u52a0\u8f7d\u9879\u5bf9\u8bdd\u6846\u4e2d\u627e\u5230\u52a0\u8f7d\u9879\u7684\u8def\u5f84\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SOLIDWORKS\u83dc\u5355\u4e2d\u7684\u52a0\u8f7d\u9879\u5217\u8868",src:o(26271).Z,width:"910",height:"750"}),"{ width=450 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_PATH As String = "C:\\Program Files\\CodeStack\\MyToolbar\\CodeStack.Sw.MyToolbar.dll"\n')),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528\u6b64\u9009\u9879\uff0c\u8bf7\u5c06\u503c\u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_PATH As String = ""\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_GUID As String = "{63496b16-e9ad-4d3a-8473-99d124a1672b}"\nConst ADD_IN_PATH As String = "C:\\Program Files\\CodeStack\\MyToolbar\\CodeStack.Sw.MyToolbar.dll"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim isLoaded As Boolean\n    \n    isLoaded = IsAddInLoaded(ADD_IN_GUID)\n    \n    Debug.Print "\u52a0\u8f7d\u9879\u5df2\u52a0\u8f7d: " & isLoaded\n    \n    Dim addInPath As String\n    \n    If ADD_IN_PATH <> "" Then\n        addInPath = ADD_IN_PATH\n    Else\n        addInPath = GetAddInPath(ADD_IN_GUID)\n    End If\n    \n    Debug.Print LoadAddIn(addInPath, Not isLoaded)\n    \nEnd Sub\n\nFunction IsAddInLoaded(addInGuid As String) As Boolean\n    \n    Dim addIn As Object\n    Set addIn = swApp.GetAddInObject(addInGuid)\n    \n    IsAddInLoaded = Not addIn Is Nothing\n    \nEnd Function\n\nFunction LoadAddIn(addInGuid As String, load As Boolean) As Boolean\n    \n    Const SUCCESS As Long = 0\n    \n    Dim res As Long\n    If True = load Then\n        res = swApp.LoadAddIn(addInGuid)\n    Else\n        res = swApp.UnloadAddIn(addInGuid)\n    End If\n    \n    LoadAddIn = (res = SUCCESS)\n    \nEnd Function\n\nFunction GetAddInPath(addInGuid As String) As String\n    \n    Dim addInUri As String\n    addInUri = CreateObject("WScript.Shell").RegRead("HKCR\\CLSID\\" & addInGuid & "\\InprocServer32\\CodeBase")\n    \n    GetAddInPath = UriToLocalPath(addInUri)\n    \nEnd Function\n\nFunction UriToLocalPath(uri As String) As String\n    UriToLocalPath = Right(uri, Len(uri) - Len("file:///"))\n    UriToLocalPath = Replace(UriToLocalPath, "/", "\\")\nEnd Function\n')))}u.isMDXComponent=!0},26271:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/addins-list-61209abd8f25998f069e47e2effca232.png"},38369:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/addins-registry-2f1dcbc70351eb69b660ce92c5b02fd1.png"}}]);
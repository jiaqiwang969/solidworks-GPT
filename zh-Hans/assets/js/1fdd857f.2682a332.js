"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18285],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>h});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},d=Object.keys(n);for(a=0;a<d.length;a++)t=d[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(a=0;a<d.length;a++)t=d[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=a.createContext({}),l=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=l(n.components);return a.createElement(s.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,d=n.originalType,s=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),p=l(t),g=o,h=p["".concat(s,".").concat(g)]||p[g]||u[g]||d;return t?a.createElement(h,i(i({ref:e},c),{},{components:t})):a.createElement(h,i({ref:e},c))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var d=t.length,i=new Array(d);i[0]=g;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r[p]="string"==typeof n?n:o,i[1]=r;for(var l=2;l<d;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},21076:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const d={layout:"sw-tool",title:"Macro to load and unload add-in using SOLIDWORKS API",caption:"Load/Unload Add-In",description:"Macro to trigger (load/unload) the specified add-in using SOLIDWORKS API",image:"toggle-addins.svg",labels:["add-in","load"],group:"Frame"},i=void 0,r={unversionedId:"codestack/solidworks-api/application/add-ins/load-unload/index",id:"codestack/solidworks-api/application/add-ins/load-unload/index",title:"Macro to load and unload add-in using SOLIDWORKS API",description:"Macro to trigger (load/unload) the specified add-in using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/application/add-ins/load-unload/index.md",sourceDirName:"codestack/solidworks-api/application/add-ins/load-unload",slug:"/codestack/solidworks-api/application/add-ins/load-unload/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/add-ins/load-unload/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/application/add-ins/load-unload/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to load and unload add-in using SOLIDWORKS API",caption:"Load/Unload Add-In",description:"Macro to trigger (load/unload) the specified add-in using SOLIDWORKS API",image:"toggle-addins.svg",labels:["add-in","load"],group:"Frame"},sidebar:"tutorialSidebar",previous:{title:"Developing C++, C#, VB.NET add-ins for SOLIDWORKS using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/add-ins/"},next:{title:"Convert meters to fraction inches using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/convert-to-fraction-inches/"}},s={},l=[],c={toc:l},p="wrapper";function u(n){let{components:e,...d}=n;return(0,o.kt)(p,(0,a.Z)({},c,d,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This macro allows to trigger the load state of the specified add-in using the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~loadaddin.html"},"ISldWorks::LoadAddIn")," and ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~unloadaddin.html"},"ISldWorks::UnloadAddIn")," SOLIDWORKS API."),(0,o.kt)("p",null,"This can be useful to provide a short-cut for loading and unloading the add-in with one button click. It is recommended to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},"Macro Buttons")," to create a button for add-in in the toolbar."),(0,o.kt)("p",null,"Macro requires the add-in Global Unique Identifier (GUID) to be specified at the beginning of the macro."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_GUID As String = "{1730410d-85ad-4be8-aa2d-ed977b93fe5d}"\n')),(0,o.kt)("p",null,"Locate the guid of the required SOLIDWORKS add-in in the registry at ",(0,o.kt)("em",{parentName:"p"},"HKLM\\SOFTWARE\\SolidWorks\\AddIns"),". Each sub-key of this registry key represents the add-in. Select each key to see the title and description of the add-in. Copy the name of the key which represents the add-in guid."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Available add-ins presented in the registry",src:t(9634).Z,width:"861",height:"589"}),"{ width=450 }"),(0,o.kt)("p",null,"It is optionally required to specify the path to the add-in in the ",(0,o.kt)("em",{parentName:"p"},"ADD_IN_PATH")," variable. In some cases macro cannot retrieve the path to the add-in from its guid and can fail. You can find the path to the add-in in the SOLIDWORKS add-ins dialog:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add-ins list in SOLIWORKS menu",src:t(95319).Z,width:"910",height:"750"}),"{ width=450 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_PATH As String = "C:\\Program Files\\CodeStack\\MyToolbar\\CodeStack.Sw.MyToolbar.dll"\n')),(0,o.kt)("p",null,"If this option is not used set the value to an empty string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_PATH As String = ""\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ADD_IN_GUID As String = "{63496b16-e9ad-4d3a-8473-99d124a1672b}"\nConst ADD_IN_PATH As String = "C:\\Program Files\\CodeStack\\MyToolbar\\CodeStack.Sw.MyToolbar.dll"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim isLoaded As Boolean\n    \n    isLoaded = IsAddInLoaded(ADD_IN_GUID)\n    \n    Debug.Print "AddIn Loaded: " & isLoaded\n    \n    Dim addInPath As String\n    \n    If ADD_IN_PATH <> "" Then\n        addInPath = ADD_IN_PATH\n    Else\n        addInPath = GetAddInPath(ADD_IN_GUID)\n    End If\n    \n    Debug.Print LoadAddIn(addInPath, Not isLoaded)\n    \nEnd Sub\n\nFunction IsAddInLoaded(addInGuid As String) As Boolean\n    \n    Dim addIn As Object\n    Set addIn = swApp.GetAddInObject(addInGuid)\n    \n    IsAddInLoaded = Not addIn Is Nothing\n    \nEnd Function\n\nFunction LoadAddIn(addInGuid As String, load As Boolean) As Boolean\n    \n    Const SUCCESS As Long = 0\n    \n    Dim res As Long\n    If True = load Then\n        res = swApp.LoadAddIn(addInGuid)\n    Else\n        res = swApp.UnloadAddIn(addInGuid)\n    End If\n    \n    LoadAddIn = (res = SUCCESS)\n    \nEnd Function\n\nFunction GetAddInPath(addInGuid As String) As String\n    \n    Dim addInUri As String\n    addInUri = CreateObject("WScript.Shell").RegRead("HKCR\\CLSID\\" & addInGuid & "\\InprocServer32\\CodeBase")\n    \n    GetAddInPath = UriToLocalPath(addInUri)\n    \nEnd Function\n\nFunction UriToLocalPath(uri As String) As String\n    UriToLocalPath = Right(uri, Len(uri) - Len("file:///"))\n    UriToLocalPath = Replace(UriToLocalPath, "/", "\\")\nEnd Function\n')))}u.isMDXComponent=!0},95319:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/addins-list-61209abd8f25998f069e47e2effca232.png"},9634:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/addins-registry-2f1dcbc70351eb69b660ce92c5b02fd1.png"}}]);
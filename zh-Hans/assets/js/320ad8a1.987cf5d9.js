"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[65017],{3905:(o,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>g});var t=e(67294);function s(o,n,e){return n in o?Object.defineProperty(o,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[n]=e,o}function r(o,n){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),e.push.apply(e,t)}return e}function i(o){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){s(o,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(e,n))}))}return o}function a(o,n){if(null==o)return{};var e,t,s=function(o,n){if(null==o)return{};var e,t,s={},r=Object.keys(o);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(s[e]=o[e]);return s}(o,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(o,e)&&(s[e]=o[e])}return s}var l=t.createContext({}),c=function(o){var n=t.useContext(l),e=n;return o&&(e="function"==typeof o?o(n):i(i({},n),o)),e},p=function(o){var n=c(o.components);return t.createElement(l.Provider,{value:n},o.children)},A="mdxType",d={inlineCode:"code",wrapper:function(o){var n=o.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(o,n){var e=o.components,s=o.mdxType,r=o.originalType,l=o.parentName,p=a(o,["components","mdxType","originalType","parentName"]),A=c(e),m=s,g=A["".concat(l,".").concat(m)]||A[m]||d[m]||r;return e?t.createElement(g,i(i({ref:n},p),{},{components:e})):t.createElement(g,i({ref:n},p))}));function g(o,n){var e=arguments,s=n&&n.mdxType;if("string"==typeof o||s){var r=e.length,i=new Array(r);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=o,a[A]="string"==typeof o?o:s,i[1]=a;for(var c=2;c<r;c++)i[c]=e[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,e)}m.displayName="MDXCreateElement"},63003:(o,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=e(87462),s=(e(67294),e(3905));const r={title:"Fix or float component in active or all configurations using SOLIDWORKS API",caption:"Fix/Float In This Or All Configurations",description:"Example demonstrates a workaround for missing SOLIDWORKS API for fixing or floating the component in the active or all configuration",image:"component-fix-options.png",labels:["fix","float","component","workaround"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float/index",title:"Fix or float component in active or all configurations using SOLIDWORKS API",description:"Example demonstrates a workaround for missing SOLIDWORKS API for fixing or floating the component in the active or all configuration",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float/index.md",tags:[],version:"current",frontMatter:{title:"Fix or float component in active or all configurations using SOLIDWORKS API",caption:"Fix/Float In This Or All Configurations",description:"Example demonstrates a workaround for missing SOLIDWORKS API for fixing or floating the component in the active or all configuration",image:"component-fix-options.png",labels:["fix","float","component","workaround"]},sidebar:"tutorialSidebar",previous:{title:"Find tables from drawing by type using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type/"},next:{title:"Remove all mates and fix components in SOLIDWORKS assembly",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-remove-mates/"}},l={},c=[],p={toc:c},A="wrapper";function d(o){let{components:n,...r}=o;return(0,s.kt)(A,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Options to fix component",src:e(57778).Z,width:"568",height:"154"})),(0,s.kt)("p",null,"This VBA example demonstrates a simple workaround for missing SOLIDWORKS API to fix or float the component in active configuration only. ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~fixcomponent.html"},"IAssemblyDoc::FixComponent")," only fixes the components in all configurations."),(0,s.kt)("p",null,"Create an example assembly with 2 configurations and 4 instances of the component, where first 2 instances are floating in both configurations, while last 2 instances are fixed in both configuration."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Initial state of example",src:e(55545).Z,width:"563",height:"408"})),(0,s.kt)("p",null,"As the result of running this macro components will be changed to the following result:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Result of running the macro",src:e(56589).Z,width:"581",height:"332"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    FixComponent swAssy.GetComponentByName("Part1-1"), True\n    FixComponent swAssy.GetComponentByName("Part1-2"), False\n    FloatComponent swAssy.GetComponentByName("Part1-3"), True\n    FloatComponent swAssy.GetComponentByName("Part1-4"), False\n    \nEnd Sub\n\nSub FixComponent(comp As SldWorks.Component2, thisConf As Boolean)\n\n    Const CMD_FixCompInThisConf As Long = 51605\n    Const CMD_FixCompInAllConf As Long = 51611\n    \n    If False <> comp.Select4(False, Nothing, False) Then\n        \n        Const WM_COMMAND As Long = &H111\n        Dim cmd As Long\n        \n        If thisConf Then\n            cmd = CMD_FixCompInThisConf\n        Else\n            cmd = CMD_FixCompInAllConf\n        End If\n        \n        SendMessage swApp.Frame().GetHWnd(), WM_COMMAND, cmd, 0\n    Else\n        Err.Raise vbError, "", "Failed to select component"\n    End If\n    \nEnd Sub\n\nSub FloatComponent(comp As SldWorks.Component2, thisConf As Boolean)\n    \n    Const CMD_FloatCompInThisConf As Long = 51609\n    Const CMD_FloatCompInAllConf As Long = 51608\n    \n    If False <> comp.Select4(False, Nothing, False) Then\n        \n        Const WM_COMMAND As Long = &H111\n        Dim cmd As Long\n        \n        If thisConf Then\n            cmd = CMD_FloatCompInThisConf\n        Else\n            cmd = CMD_FloatCompInAllConf\n        End If\n        \n        SendMessage swApp.Frame().GetHWnd(), WM_COMMAND, cmd, 0\n    Else\n        Err.Raise vbError, "", "Failed to select component"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},57778:(o,n,e)=>{e.d(n,{Z:()=>t});const t="data:image/png;base64,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"},56589:(o,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/component-fix-result-2ae5fe8ea24c5345ddbd0910991c7b8c.png"},55545:(o,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/component-initial-state-70bf4a7361942ef26ae6e1aa84dcdc96.png"}}]);